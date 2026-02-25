// src/components/SectionIsland.jsx
import { useTranslation } from "react-i18next";

const SectionIsland = ({
  id,
  badge,
  title,
  subtitle,
  description,
  children,
  className = "",
  center = false, // <-- Nueva prop, por defecto falsa
}) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-10 bg-[#08090a] ${className}`}
    >
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-[#111318] py-12 px-6 md:py-20 md:px-16 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent-silver)]/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none transform-gpu" />

        <div className="relative z-10">
          {/* Añadimos lógica de centrado dinámica */}
          <div
            className={`flex flex-col mb-12 ${center ? "items-center text-center" : "items-start text-left"}`}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-6">
              {t(badge)}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              {t(title)}
              {subtitle && (
                <>
                  <br />
                  <span className="text-zinc-500 italic font-light text-3xl md:text-4xl">
                    {t(subtitle)}
                  </span>
                </>
              )}
            </h2>

            {description && (
              <p
                className={`mt-6 text-zinc-400 text-lg font-light leading-relaxed max-w-2xl ${center ? "mx-auto" : ""}`}
              >
                {t(description)}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};
export default SectionIsland;
