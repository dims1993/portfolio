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
    <section id="projects" className="py-24 px-6 md:px-10 bg-[#08090a]">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección estilo "About" */}
        <div className="mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-4 block">
            {t("projects.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            {t("projects.title_main")}
            <br />
            <span className="text-zinc-500 italic font-light text-3xl md:text-4xl tracking-[0.02em]">
              {t("projects.title_sub")}
            </span>
          </h2>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
