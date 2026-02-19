const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-[#08090a]">
      {/* CONTENEDOR TIPO ISLA */}
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/5 bg-[#111318] py-20 px-8 md:px-16 shadow-2xl">
        {/* Luz de ambiente de fondo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent-silver)]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* COLUMNA IZQUIERDA: Imagen / Foto */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Marco de la foto */}
              <div className="w-64 h-80 md:w-80 md:h-[450px] rounded-[3rem] overflow-hidden border border-white/10 relative z-10 bg-zinc-900">
                <img
                  src="/api/placeholder/400/600" // Cambia esto por tu foto real
                  alt="David Muñoz"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
              {/* Borde decorativo detrás de la foto */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[var(--accent-silver)]/20 rounded-[3rem] -z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Contenido de texto (en inglés) */}
          <div className="flex flex-col">
            {/* Etiqueta superior */}
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-6">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
              Transforming ideas into <br />
              <span className="text-zinc-500 italic font-light text-3xl md:text-4xl">
                digital experiences.
              </span>
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">David Muñoz</span>,
                a developer with an analytical mind and a creative soul. My main
                focus is the <span className="text-white">Fullstack</span>{" "}
                ecosystem, where I enjoy bridging robust architectures with
                intuitive interfaces.
              </p>
              <p>
                My technical background allows me to tackle complex problems
                with scalable solutions, always keeping a critical eye on
                **design and usability**. I firmly believe that code should not
                only work, but it should be elegant and maintainable.
              </p>
              <p>
                Currently, I am focusing on honing my skills in{" "}
                <span className="text-[var(--accent-silver)]">
                  Python and React
                </span>
                , constantly exploring new ways to optimize workflow and the
                end-user experience.
              </p>
            </div>

            {/* Tarjetas de información rápida */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-[var(--accent-silver)] font-bold text-xl">
                  Location
                </p>
                <p className="text-zinc-500 text-sm mt-1">Alicante, Spain</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-[var(--accent-silver)] font-bold text-xl">
                  Interests
                </p>
                <p className="text-zinc-500 text-sm mt-1">AI, UX/UI, Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
