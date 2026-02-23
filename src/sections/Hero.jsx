import DATA from "../data/webData";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-section">
      {/* Background effects */}
      <div className="hero-grid" />
      <div className="hero-glow" />

      {/* Role */}
      <p className="hero-tag fade-up" style={{ animationDelay: "0.2s" }}>
        {DATA.role}
      </p>

      {/* Name */}
      <h1 className="mt-4 text-6xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
        {DATA.name.split(" ")[0]} <br />
        <em className="italic font-light text-[var(--accent-silver)]">
          {DATA.name.split(" ")[1]}
        </em>
      </h1>

      {/* Stack */}
      <p className="hero-subtitle fade-up" style={{ animationDelay: "0.6s" }}>
        {t("hero.subtitle")}
      </p>

      {/* Description */}
      <p className="hero-desc fade-up" style={{ animationDelay: "0.8s" }}>
        {t("hero.description")}
      </p>

      {/* CTA */}
      <div className="hero-cta fade-up" style={{ animationDelay: "1s" }}>
        <a href="#projects" className="btn-primary">
          {t("hero.btn_projects")}
        </a>
        <a href="#contact" className="btn-secondary">
          {t("hero.btn_contact")}
        </a>
      </div>

      {/* Availability */}
      <div className="status-badge fade-up" style={{ animationDelay: "1.2s" }}>
        <div className="status-dot" />
        {t("hero.availability")}
      </div>
    </section>
  );
}

export default Hero;
