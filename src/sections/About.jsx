import { useTranslation } from "react-i18next";
import SectionIsland from "../components/SectionIsland";

const About = () => {
  const { t } = useTranslation();

  return (
    <SectionIsland
      id="about"
      badge="about.badge"
      title="about.title"
      subtitle="about.subtitle"
      // Si tienes una descripción general en i18n, puedes usar la prop description
    >
      {/* QUITAMOS: <section>, el fondo negro, el título manual y el badge manual.
          Todo eso ya lo hace SectionIsland por fuera.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* COLUMNA IZQUIERDA: Imagen / Foto */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Marco de la foto */}
            <div className="w-full max-w-[280px] h-80 md:w-80 md:h-[450px] rounded-[3rem] overflow-hidden border border-white/10 relative z-10 bg-zinc-900">
              <img
                src="profile.webp"
                alt="David Muñoz"
                loading="lazy" // Optimización: carga solo cuando llegas aquí
                decoding="async"
                className="w-full h-full object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700 ease-in-out transform-gpu"
              />
            </div>
            {/* Borde decorativo detrás de la foto */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[var(--accent-silver)]/20 rounded-[3rem] -z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 transform-gpu"></div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Párrafos de texto */}
        <div className="flex flex-col">
          <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
            <p>
              {t("about.p1_intro")}{" "}
              <span className="text-white font-medium">
                {t("about.p1_name")}
              </span>
              {t("about.p1_rest")}{" "}
              <span className="text-white">{t("about.p1_focus")}</span>
              {t("about.p1_end")}
            </p>

            <p>
              {t("about.p2_intro")}{" "}
              <strong className="font-medium text-white">
                {t("about.p2_bold")}
              </strong>
              {t("about.p2_end")}
            </p>

            <p>
              {t("about.p3_intro")}{" "}
              <span className="text-[var(--accent-silver)] font-medium">
                {t("about.p3_bold")}
              </span>
              {t("about.p3_end")}
            </p>
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
