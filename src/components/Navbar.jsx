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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tighter hover:text-[var(--accent-silver)] transition-colors"
        >
          DM<span className="text-[var(--accent-silver)]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href} // Usamos href como key porque el name ahora cambia con el idioma
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Botón Switcher de Idioma */}
          <button
            onClick={toggleLanguage}
            className="ml-2 px-3 py-1 rounded-md border border-white/10 text-[10px] font-bold text-zinc-400 hover:text-[var(--accent-silver)] hover:border-[var(--accent-silver)]/50 transition-all uppercase"
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
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* ... tu SVG ... */}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-zinc-400"
            >
              {link.name}
            </a>
          ))}
          {/* Switcher en móvil */}
          <button
            onClick={toggleLanguage}
            className="text-left text-lg font-medium text-[var(--accent-silver)]"
          >
            {i18n.language === "en" ? "Cambiar a Español" : "Switch to English"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
