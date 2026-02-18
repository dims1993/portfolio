import DATA from "../data/webData";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  // Verificación de seguridad: si DATA o DATA.projects no existen, devolvemos un mensaje o nada.
  if (!DATA || !DATA.projects) {
    console.error("DATA.projects is undefined! Check your webData.js file.");
    return null;
  }

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Featured <span className="text-[var(--green)]">Projects</span>
        </h2>
        <div className="h-1.5 w-24 bg-[var(--green)] rounded-full mb-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {DATA.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
