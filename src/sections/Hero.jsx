import DATA from "../data/webData";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  // Estilo para el desvanecimiento del grid
  const gridStyle = {
    maskImage: "linear-gradient(to bottom, black 40%, transparent 90%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 90%)",
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#08090a] flex flex-col justify-center items-center overflow-hidden px-6"
    >
      {/* 1. EL GRID: Con máscara radial para fundir todos los bordes */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          // Esta máscara crea un círculo de visibilidad en el centro y lo funde hacia fuera
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
        }}
      />

      {/* 2. EL GLOW: Un brillo sutil en el centro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-silver)]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Role */}
      <p className="hero-tag fade-up" style={{ animationDelay: "0.2s" }}>
        {DATA.role}
      </p>

      {/* Name */}
      <h1 className="mt-4 text-6xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
        {DATA.name.split(" ")[0]} <br />
        <em className="italic font-light text-[var(--accent-silver)]">
          {DATA.name.split(" ")[1]}
        </em>
      </h1>

      {/* Stack */}
      <p className="hero-subtitle fade-up" style={{ animationDelay: "0.6s" }}>
        {t("hero.subtitle")}
      </p>

      {/* Description */}
      <p className="hero-desc fade-up" style={{ animationDelay: "0.8s" }}>
        {t("hero.description")}
      </p>

      {/* CTA */}
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 mt-12 fade-up"
        style={{ animationDelay: "1s" }}
      >
        <a
          href="#projects"
          className="w-full sm:w-auto min-w-[180px] flex items-center justify-center py-4 px-8 rounded-full bg-white text-black font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-white/5"
        >
          {t("hero.btn_projects")}
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto min-w-[180px] flex items-center justify-center py-4 px-8 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-all"
        >
          {t("hero.btn_contact")}
        </a>
      </div>
      {/* Availability */}
      <div className="status-badge fade-up" style={{ animationDelay: "1.2s" }}>
        <div className="status-dot" />
        {t("hero.availability")}
      </div>
      {/* 4. EL PARCHE FINAL: Degradado negro en la base para asegurar el corte */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#08090a] to-transparent z-[5]"></div>
    </section>
  );
}

export default Hero;
