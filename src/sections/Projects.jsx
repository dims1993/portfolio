import React from "react";
import { useTranslation } from "react-i18next";
import DATA from "../data/webData";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const { t } = useTranslation();

  if (!DATA || !DATA.projects) return null;

  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-10 bg-[#050505] overflow-hidden"
    >
      {/* Fondo de alto impacto */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[140%] bg-[var(--accent-silver)]/10 blur-[120px] rotate-12 opacity-60"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[120%] bg-[var(--accent-silver)]/5 blur-[100px] -rotate-12 opacity-40"></div>
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

        {/* Grid de proyectos corregido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 relative z-20">
          {DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#08090a] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}

export default Projects;
