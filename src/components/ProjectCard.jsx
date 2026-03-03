import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="group relative bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-4 transition-all duration-500 hover:border-[var(--accent-silver)] hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
      {/* Imagen */}
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
        <img
          src={project.image}
          alt={t(`projects.${project.key}.title`)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="px-2">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack?.backend?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md uppercase"
            >
              {tag}
            </span>
          ))}
          {project.stack?.frontend?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-[var(--accent-silver)] border border-emerald-500/20 rounded-md uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Texto */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent-silver)] transition-colors tracking-tight">
          {t(`projects.${project.key}.title`)}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {t(`projects.${project.key}.desc`)}
        </p>

        {/* Enlaces con protección de clic */}
        <div className="flex items-center gap-6 relative z-30">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto text-[11px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors underline decoration-[var(--accent-silver)] underline-offset-8 decoration-2"
          >
            GitHub Repo
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto group/link flex items-center gap-2 py-2 px-4 bg-[var(--accent-silver)]/5 border border-[var(--accent-silver)]/20 rounded-xl text-[11px] font-black uppercase tracking-widest text-[var(--accent-silver)] hover:bg-[var(--accent-silver)] hover:text-black transition-all duration-300"
          >
            Live View{" "}
            <span className="group-hover/link:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
