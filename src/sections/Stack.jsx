import DATA from "../data/webData";
import { useTranslation } from "react-i18next";

const Stack = () => {
  const { t } = useTranslation();
  return (
    <section id="stack" className="py-20 px-4 md:px-10">
      {" "}
      {/* GRAN CAJA CONTENEDORA */}
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] md:rounded-[2.5rem] border border-white/5 bg-[#111318] py-20 px-8 md:px-16 shadow-2xl">
        {/* Fondo interno con degradado y rejilla */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1c1f26_0%,#111318_100%)]"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        {/* Luces de ambiente internas */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent-silver)]/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* CONTENIDO */}
        <div className="relative z-10">
          {/* Título de la sección estilo "About" */}
          <div className="mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-4 block">
              {t("stack.badge")}
            </span>
          </div>
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              {t("stack.title_main1")}{" "}
              <span className="text-[var(--accent-silver)] opacity-80">
                {t("stack.title_main2")}
              </span>
            </h2>
            <p className="text-zinc-400 text-lg font-light max-w-xl">
              {t("stack.title_sub")}
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {/* FRONTEND */}
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-600 pt-2">
                Frontend
              </span>
              <div className="flex flex-wrap gap-3">
                {DATA.skills.frontend.map((skill) => (
                  <div
                    key={skill}
                    className="px-5 py-2.5 bg-white/5 border border-white/5 backdrop-blur-md rounded-xl hover:border-[var(--accent-silver)]/30 transition-all duration-300 group"
                  >
                    <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CORE / BACKEND (DESTACADO) */}
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--accent-silver)] pt-2">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-4">
                {["Python", "Django", "PostgreSQL", "Node.js"].map((skill) => (
                  <div
                    key={skill}
                    className="px-8 py-4 bg-white/[0.03] border border-[var(--accent-silver)]/20 rounded-2xl hover:scale-105 hover:border-[var(--accent-silver)]/50 transition-all duration-300 group"
                  >
                    <span className="text-[var(--accent-silver)] font-bold text-xl group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* UTILITIES */}
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-600 pt-2">
                {t("stack.utilities")}
              </span>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {DATA.skills.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-[var(--accent-silver)] transition-all"></div>
                    <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
