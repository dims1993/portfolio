import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Paso 1: Importar el hook

function Navbar() {
  const { t, i18n } = useTranslation(); // Paso 2: Inicializar el traductor
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Paso 3: Usar t() para los nombres.
  // Asegúrate de que estas claves existan en tus archivos locales (en.json y es.json)
  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.stack"), href: "#stack" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  // Función para alternar idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "py-4 bg-black/90 backdrop-blur-xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-black tracking-tighter hover:text-[var(--accent-silver)] transition-colors z-[110]"
        >
          DM<span className="text-[var(--accent-silver)]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href} // Usamos href como key porque el name ahora cambia con el idioma
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Botón Switcher de Idioma */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-md border border-white/10 text-[10px] font-bold text-zinc-400 hover:text-[var(--accent-silver)] transition-all uppercase"
          >
            {i18n.language === "en" ? "ESP" : "ENG"}
          </button>

          <a
            href="/cv.pdf"
            target="_blank"
            className="px-5 py-2 rounded-full border border-[var(--accent-silver)] text-[var(--accent-silver)] text-sm font-semibold hover:bg-[var(--accent-silver)] hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-[110] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible shadow-none"
        }`}
        style={{ top: "0", height: "100vh" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold tracking-tighter text-white hover:text-[var(--accent-silver)] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="h-px w-12 bg-zinc-800 my-4"></div>

          <button
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="text-[var(--accent-silver)] font-bold tracking-widest uppercase text-sm"
          >
            {i18n.language === "en" ? "ESPAÑOL" : "ENGLISH"}
          </button>

          <a
            href="/cv.pdf"
            target="_blank"
            className="mt-4 px-8 py-3 rounded-full border border-[var(--accent-silver)] text-[var(--accent-silver)] font-bold"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
