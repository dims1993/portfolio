import React from "react";
import { useTranslation } from "react-i18next";
import DATA from "../data/webData";
import ProjectCard from "../components/ProjectCard"; // Asegúrate de que la ruta sea correcta

function Projects() {
  const { t } = useTranslation();
  // Verificación de seguridad: si DATA o DATA.projects no existen, devolvemos un mensaje o nada.
  if (!DATA || !DATA.projects) {
    console.error("DATA.projects is undefined! Check your webData.js file.");
    return null;
  }

  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-10 bg-[#050505] overflow-hidden"
    >
      {/* 1. FONDO DE ALTO IMPACTO (Nebulosa plateada) */}
      <div className="absolute inset-0 z-0">
        {/* Haz de luz diagonal */}
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[140%] bg-[var(--accent-silver)]/10 blur-[120px] rotate-12 pointer-events-none opacity-60"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[120%] bg-[var(--accent-silver)]/5 blur-[100px] -rotate-12 pointer-events-none opacity-40"></div>

        {/* Grid de líneas finas pero con perspectiva */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), 
                              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at 50% 50%, black, transparent 90%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 2. CABECERA CENTRADA Y POTENTE */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-silver)]/20 bg-[var(--accent-silver)]/5 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-silver)] mb-6">
            {t("projects.badge")}
          </span>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent py-2 leading-[1.15]">
            {t("projects.title_main")}
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {t("projects.title_sub")}
          </p>
        </div>

        {/* 3. GRID DE PROYECTOS CON MÁS AIRE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {DATA.projects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Resplandor más sutil y ajustado */}
              <div className="absolute -inset-2 bg-[var(--accent-silver)]/5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. DIVISOR INFERIOR PARA FUNDIR CON EL SIGUIENTE BLOQUE */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#08090a] to-transparent z-20"></div>
    </section>
  );
}

export default Projects;
