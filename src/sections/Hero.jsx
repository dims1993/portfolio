import DATA from "../data/webData";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-center items-center overflow-hidden px-6 text-center"
    >
      {/* 1. EL GRID: Ajustado para que se vea más natural */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          // Máscara más suave y amplia (de 0% a 70% de la pantalla)
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
        }}
      />

      {/* 2. LUCES DE FONDO (Nebulosas estilo Proyectos) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent-silver)]/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--accent-silver)]/5 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* 3. CONTENIDO (Z-10 para estar sobre el fondo) */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        {/* Role */}
        <p
          className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-4 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {DATA.role}
        </p>

        {/* Name: Estilo Proyectos con degradado y padding para la "g" */}
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent py-4 fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {DATA.name.split(" ")[0]} <br />
          <span className="italic font-light text-zinc-500">
            {DATA.name.split(" ")[1]}
          </span>
        </h1>

        {/* Description centrada correctamente */}
        <p
          className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto text-center mt-6 leading-relaxed fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-12 fade-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto min-w-[200px] py-4 px-8 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-xl shadow-white/5"
          >
            {t("hero.btn_projects")}
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto min-w-[200px] py-4 px-8 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-all"
          >
            {t("hero.btn_contact")}
          </a>
        </div>
        {/* Availability Badge */}
        <div
          className="status-badge fade-up mb-8"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="status-dot" />
          {t("hero.availability")}
        </div>
      </div>

      {/* Parche inferior para suavizar la unión con la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#08090a] to-transparent z-[5]"></div>
    </section>
  );
}

export default Hero;
