import DATA from "../data/webData";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-[#08090a]">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/5 bg-[#111318] py-20 px-8 md:px-16 shadow-2xl">
        {/* Luz de fondo sutil */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent-silver)]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* COLUMNA IMAGEN / VISUAL */}
          <div className="relative group mx-auto lg:mx-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-2 border-white/10 group-hover:border-[var(--accent-silver)]/30 transition-all duration-500 shadow-2xl">
              <img
                src="/path-a-tu-foto.jpg" // Pon tu foto en public/ o usa un placeholder
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Adorno decorativo Detrás */}
            <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 border-2 border-[var(--accent-silver)]/20 rounded-[3rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </div>

          {/* COLUMNA TEXTO */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-6">
              Sobre mí
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Pasión por el código, <br />
              <span className="text-zinc-500 italic font-light">
                enfoque en la solución.
              </span>
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
              <p>
                ¡Hola! Soy <span className="text-white font-medium">David</span>{" "}
                (o tu nombre), un desarrollador Fullstack apasionado por crear
                experiencias digitales que combinan un backend robusto con
                interfaces impecables.
              </p>
              <p>
                Mi viaje en la programación comenzó con{" "}
                <span className="text-white">Python</span>, lo que me dio una
                base sólida en lógica y eficiencia. Hoy, disfruto construyendo
                aplicaciones completas utilizando el stack moderno, siempre
                buscando el equilibrio entre el rendimiento y la estética.
              </p>
              <p>
                Cuando no estoy escribiendo código, me encontrarás explorando
                nuevas tecnologías o centrado en cómo mejorar la arquitectura de
                mis proyectos personales.
              </p>
            </div>

            {/* Stats Rápidos */}
            <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-white/5">
              <div>
                <h4 className="text-[var(--accent-silver)] font-bold text-2xl">
                  2+
                </h4>
                <p className="text-xs uppercase tracking-widest text-zinc-600 mt-1">
                  Años de Exp.
                </p>
              </div>
              <div>
                <h4 className="text-[var(--accent-silver)] font-bold text-2xl">
                  15+
                </h4>
                <p className="text-xs uppercase tracking-widest text-zinc-600 mt-1">
                  Proyectos Finalizados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
