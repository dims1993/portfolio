const Footer = () => {
  return (
    <footer className="py-12 bg-[#08090a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Lado Izquierdo: Branding Minimal */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tighter text-white">
            DAVID<span className="text-[var(--accent-silver)]">MUÑOZ</span>
          </span>
          <p className="text-zinc-500 text-xs mt-2 uppercase tracking-widest">
            Fullstack Developer • 2026
          </p>
        </div>

        {/* Lado Central: Quick Links (Opcional) */}
        <div className="flex gap-8 text-zinc-400 text-sm font-light">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Lado Derecho: Social Rings */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/david-muñoz-salinas-735b0b133"
            target="_blank"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--accent-silver)] hover:bg-white/5 transition-all group"
          >
            <span className="text-zinc-500 group-hover:text-[var(--accent-silver)] transition-colors text-xs font-bold">
              In
            </span>
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--accent-silver)] hover:bg-white/5 transition-all group"
          >
            <span className="text-zinc-500 group-hover:text-[var(--accent-silver)] transition-colors text-xs font-bold">
              Git
            </span>
          </a>
        </div>
      </div>

      {/* Línea final de copyright */}
      <div className="mt-12 text-center">
        <p className="text-[10px] text-zinc-700 uppercase tracking-[0.4em]">
          Built with React & Tailwind • Designed by DM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
