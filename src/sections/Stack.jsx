import DATA from "../data/webData";
import { useTranslation } from "react-i18next";
import SectionIsland from "../components/SectionIsland";

const Stack = () => {
  const { t } = useTranslation();
  return (
    <SectionIsland
      id="stack"
      badge="stack.badge"
      title="stack.title"
      description="stack.description"
    >
      <div className="flex flex-col gap-16 mt-10">
        {/* FRONTEND */}
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-600 pt-2">
            Frontend
          </span>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.frontend.map((skill) => (
              <div
                key={skill}
                className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-xl hover:border-[var(--accent-silver)]/30 transition-all duration-300 group transform-gpu"
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
                className="px-8 py-4 bg-white/[0.03] border border-[var(--accent-silver)]/20 rounded-2xl hover:scale-105 hover:border-[var(--accent-silver)]/50 transition-all duration-300 group transform-gpu"
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
    </SectionIsland>
  );
};

export default Stack;
