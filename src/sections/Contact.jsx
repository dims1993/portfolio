import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionIsland from "../components/SectionIsland";

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
        headers: { Accept: "application/json" },
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
    <SectionIsland
      id="contact"
      badge="contact.badge"
      title="contact.title_main1"
      subtitle="contact.title_main2"
      description="contact.title_sub"
      center={true} // <--- ESTO centra solo esta sección
    >
      <div className="max-w-3xl mx-auto mt-10">
        {/* FILA DE CONTACTO (HORIZONTAL Y CENTRADA) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          <a
            href="mailto:dimsepp@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent-silver)]/30 transition-all duration-300"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              ✉
            </span>
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white">
              dimsepp@gmail.com
            </span>
          </a>

          <a
            href="https://linkedin.com/in/david-muñoz-salinas-735b0b133"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent-silver)]/30 transition-all duration-300"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              in
            </span>
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white">
              LinkedIn
            </span>
          </a>
        </div>

        {/* FORMULARIO CENTRADO */}
        <div className="relative">
          {/* Decoración sutil de fondo para el formulario */}
          <div className="absolute -inset-4 bg-[var(--accent-silver)]/5 rounded-[3rem] blur-2xl pointer-events-none" />

          <div className="relative bg-[#16181d] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {t("contact.success.title")}
                </h3>
                <p className="text-zinc-400 max-w-xs mx-auto">
                  {t("contact.success.message")}
                </p>
                <button
                  onClick={() => setStatus("")}
                  className="mt-8 text-xs font-black uppercase tracking-widest text-[var(--accent-silver)] hover:text-white transition-colors"
                >
                  {t("contact.success.reset_button")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
                      {t("contact.name_tag")}
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="David Muñoz"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[var(--accent-silver)]/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="david@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[var(--accent-silver)]/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
                    {t("contact.message_tag")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder={t("contact.message_content")}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[var(--accent-silver)]/50 focus:bg-white/[0.06] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={status === "sending"}
                  type="submit"
                  className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-xs rounded-2xl hover:bg-[var(--accent-silver)] transform transition-all active:scale-[0.98] shadow-xl disabled:opacity-50"
                >
                  {status === "sending"
                    ? t("contact.button.sending")
                    : t("contact.button.default")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionIsland>
  );
};

export default Contact;
