import { useEffect, useRef, useState } from "react";

export const CHARACTER_DELAY = 0.02;
export const ANIMATION_DURATION = 0.8;

function AnimatedDescription({
  text,
  parts,
  className = "",
  delay = 0,
  animateOnView = true,
  isActive,
}) {
  const descriptionRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const textParts = parts ?? [{ text }];
  const accessibleText = text ?? textParts.map((part) => part.text).join("");
  const tokens = textParts.flatMap(({ text: partText, className: partClass = "" }) =>
    partText
      .split(/(\s+)/)
      .filter(Boolean)
      .map((value) => ({
        value,
        className: partClass,
        isWhitespace: /^\s+$/.test(value),
      })),
  );
  const shouldAnimate = isActive ?? hasEnteredView;
  let characterIndex = 0;

  useEffect(() => {
    if (!animateOnView || isActive !== undefined) return undefined;

    const description = descriptionRef.current;
    if (!description) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(description);
    return () => observer.disconnect();
  }, [animateOnView, isActive]);

  return (
    <p ref={descriptionRef} className={className} aria-label={accessibleText}>
      {shouldAnimate
        ? tokens.map(({ value, className: partClass, isWhitespace }, tokenIndex) => {
            const wordStartIndex = characterIndex;
            characterIndex += value.length;

            if (isWhitespace) {
              return (
                <span key={`space-${tokenIndex}`} aria-hidden="true">
                  {value}
                </span>
              );
            }

            return (
              <span
                key={`${value}-${tokenIndex}`}
                className="inline-block whitespace-nowrap"
                aria-hidden="true"
              >
                {value.split("").map((character, index) => (
                  <span
                    key={`${character}-${index}`}
                    className={`animated-description-character ${partClass}`}
                    style={{
                      animationDelay: `${delay + (wordStartIndex + index) * CHARACTER_DELAY}s`,
                    }}
                  >
                    {character}
                  </span>
                ))}
              </span>
            );
          })
        : parts
          ? textParts.map(({ text: partText, className: partClass = "" }, index) => (
              <span key={`${partText}-${index}`} className={partClass}>
                {partText}
              </span>
            ))
          : text}
    </p>
  );
}

export default AnimatedDescription;
