import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import SectionIsland from "../components/SectionIsland";
import profileImg from "../assets/profile.webp";
import AnimatedDescription, {
  ANIMATION_DURATION,
  CHARACTER_DELAY,
} from "../components/AnimatedDescription";

const About = () => {
  const { t } = useTranslation();
  const descriptionRef = useRef(null);
  const [showDescriptionAnimation, setShowDescriptionAnimation] =
    useState(false);
  const paragraphs = [
    [
      { text: `${t("about.p1_intro")} ` },
      { text: t("about.p1_name"), className: "text-white font-medium" },
      { text: `${t("about.p1_rest")} ` },
      { text: t("about.p1_focus"), className: "text-white" },
      { text: t("about.p1_end") },
    ],
    [
      { text: `${t("about.p2_intro")} ` },
      { text: t("about.p2_bold"), className: "font-medium text-white" },
      { text: t("about.p2_end") },
    ],
    [
      { text: `${t("about.p3_intro")} ` },
      {
        text: t("about.p3_bold"),
        className: "text-[var(--accent-silver)] font-medium",
      },
      { text: t("about.p3_end") },
    ],
  ];
  const paragraphText = paragraphs.map((parts) =>
    parts.map(({ text }) => text).join(""),
  );
  const paragraphDelays = paragraphText.reduce((delays, text, index) => {
    if (index === 0) return [0];

    const previousLength = paragraphText[index - 1].length;
    const previousEnd =
      delays[index - 1] +
      (previousLength - 1) * CHARACTER_DELAY +
      ANIMATION_DURATION;

    return [...delays, previousEnd];
  }, []);

  useEffect(() => {
    const description = descriptionRef.current;
    if (!description) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDescriptionAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(description);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionIsland
      id="about"
      badge="about.badge"
      title="about.title"
      subtitle="about.subtitle"
    >
      <div
        ref={descriptionRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* COLUMNA IZQUIERDA: Imagen / Foto */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Marco de la foto */}
            <div
              className="w-full max-w-[280px] h-80 md:w-80 md:h-[450px] rounded-[3rem] overflow-hidden border border-white/10 relative z-10 bg-zinc-900 isolation-auto"
              style={{
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              }}
            >
              <img
                src={profileImg}
                alt="David Muñoz"
                loading="eager" // Cámbialo a eager para descartar fallos de lazy load en iOS
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                // He quitado el grayscale aquí temporalmente para probar
              />
            </div>
            {/* Borde decorativo detrás de la foto */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[var(--accent-silver)]/20 rounded-[3rem] -z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 transform-gpu"></div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Párrafos de texto */}
        <div className="flex flex-col">
          <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
            <AnimatedDescription
              parts={paragraphs[0]}
              delay={paragraphDelays[0]}
              animateOnView={false}
              isActive={showDescriptionAnimation}
            />

            <AnimatedDescription
              parts={paragraphs[1]}
              delay={paragraphDelays[1]}
              animateOnView={false}
              isActive={showDescriptionAnimation}
            />

            <AnimatedDescription
              parts={paragraphs[2]}
              delay={paragraphDelays[2]}
              animateOnView={false}
              isActive={showDescriptionAnimation}
            />
          </div>

          {/* Tarjetas de información rápida */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 transform-gpu">
              <p className="text-[var(--accent-silver)] font-bold text-xl">
                Location
              </p>
              <p className="text-zinc-500 text-sm mt-1">Alicante, Spain</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 transform-gpu">
              <p className="text-[var(--accent-silver)] font-bold text-xl">
                Interests
              </p>
              <p className="text-zinc-500 text-sm mt-1">AI, UX/UI, Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </SectionIsland>
  );
};

export default About;
