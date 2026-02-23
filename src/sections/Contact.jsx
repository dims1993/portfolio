import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdaldvly", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-[#08090a]">
      {/* CAJA CONTENEDORA (Island Style) */}
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] md:rounded-[2.5rem] border border-white/5 bg-[#111318] py-16 px-8 md:px-20 shadow-2xl">
        {/* Luz de fondo sutil */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--accent-silver)]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* COLUMNA IZQUIERDA: Texto e Info */}
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-6">
              {t("contact.badge")}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
              {t("contact.title_main1")} <br />
              <span className="text-zinc-500 italic font-light">
                {t("contact.title_main2")}
              </span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md font-light">
              {t("contact.title_sub")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--accent-silver)]/50 transition-colors">
                  <span className="text-xs">✉</span>
                </div>
                <a
                  href="mailto:dimsepp@gmail.com?subject=Contacto desde Portfolio David"
                  className="text-zinc-300 hover:text-[var(--accent-silver)] transition-colors duration-300"
                >
                  dimsepp@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--accent-silver)]/50 transition-colors">
                  <span className="text-xs">in</span>
                </div>
                <a
                  href="https://linkedin.com/in/david-muñoz-salinas-735b0b133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[var(--accent-silver)] transition-colors duration-300 flex items-center gap-2"
                >
                  linkedin.com/in/david-muñoz-salinas
                </a>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: El Formulario */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2rem] backdrop-blur-sm relative">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-[var(--accent-silver)]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[var(--accent-silver)]">
                    ✓
                  </span>
                </div>
                <h3 className="text-2xl font-bold">
                  {t("contact.success.title")}
                </h3>
                <p className="text-zinc-400 text-center">
                  {t("contact.success.message")}
                </p>
                <button
                  onClick={() => setStatus("")}
                  className="text-sm text-[var(--accent-silver)] underline underline-offset-4 mt-4"
                >
                  {t("contact.success.reset_button")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                      {t("contact.name_tag")}
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Jhon Mayer"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[var(--accent-silver)]/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jhonmayer@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[var(--accent-silver)]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                    {t("contact.message_tag")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder={t("contact.message_content")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[var(--accent-silver)]/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={status === "sending"}
                  type="submit"
                  className="w-full py-4 bg-[var(--accent-silver)] text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? t("contact.button.sending")
                    : t("contact.button.default")}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center mt-2">
                    {t("contact.error_message")}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Contact;
