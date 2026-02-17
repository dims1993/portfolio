/* 
Monta layout

Ordena secciones

No contiene lógica visual
*/

import { useState, useEffect, useRef } from "react";

// ============================================
// DATOS — Aquí editas tu info y proyectos
// ============================================
const DATA = {
  name: "David Muñoz",
role: "Full Stack Developer (Junior)",
subtitle: "Building clean and scalable web applications.",
bio: [
  "I'm a Full Stack Developer based in Alicante, focused on building reliable backend systems and intuitive user interfaces.",
  "I enjoy working across the entire development process — from designing APIs and managing databases to crafting clean and user-friendly frontends."
],
  skills: [
    { name: "JavaScript", level: "Aprendiendo" },
    { name: "HTML / CSS", level: "Aprendiendo" },
    { name: "Python", level: "Aprendiendo" },
    { name: "MySQL", level: "Aprendiendo" },
    { name: "Node.js", level: "Aprendiendo" },
    { name: "React", level: "Aprendiendo" },
  ],
  projects: [
    {
      id: "001",
      title: "Proyecto 01",
      desc: "Descripción del proyecto. Qué hace, qué problema resuelve y qué aprendiste construyéndolo.",
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      github: "#",
    },
  ],
  contact: [
    { platform: "LinkedIn", handle: "David Muñoz Salinas", url: "https://linkedin.com" },
    { platform: "GitHub", handle: "@davidmunozsalinas", url: "https://github.com" },
    { platform: "Email", handle: "tu@email.com", url: "mailto:tu@email.com" },
  ],
};

// ============================================
// HOOK — Detecta cuando un elemento es visible
// ============================================
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ============================================
// COMPONENTES
// ============================================

function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) setActive(id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "Sobre mí", id: "about" },
    { href: "#projects", label: "Proyectos", id: "projects" },
    { href: "#contact", label: "Contacto", id: "contact" },
  ];

  return (
    <nav style={styles.nav}>
      <a href="#hero" style={styles.navLogo}>DM_</a>
      <ul style={styles.navLinks}>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              style={{ ...styles.navLink, color: active === link.id ? "var(--green)" : "var(--text-dim)" }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.heroGrid} />
      <div style={styles.heroGlow} />
      <p style={{ ...styles.heroTag, animation: "fadeUp 0.8s ease forwards 0.2s", opacity: 0 }}>
        {DATA.role}
      </p>
      <h1 style={{ ...styles.h1, animation: "fadeUp 0.8s ease forwards 0.4s", opacity: 0 }}>
        {DATA.name.split(" ")[0]}<br />
        <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--green)" }}>
          {DATA.name.split(" ")[1]}
        </em>
      </h1>
      <p style={{ ...styles.heroSubtitle, animation: "fadeUp 0.8s ease forwards 0.6s", opacity: 0 }}>
        {DATA.subtitle}
      </p>
      <p style={{ ...styles.heroDesc, animation: "fadeUp 0.8s ease forwards 0.8s", opacity: 0 }}>
        Desarrollador web apasionado por aprender haciendo. Combinando
        formación académica con proyectos reales, un commit a la vez.
      </p>
      <div style={{ ...styles.heroCta, animation: "fadeUp 0.8s ease forwards 1s", opacity: 0 }}>
        <a href="#projects" style={styles.btnPrimary}>Ver proyectos</a>
        <a href="#contact" style={styles.btnSecondary}>Contactar</a>
      </div>
      <div style={{ ...styles.statusBadge, animation: "fadeUp 0.8s ease forwards 1.2s", opacity: 0 }}>
        <div style={styles.statusDot} />
        Disponible para colaborar
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.skillItem,
        borderColor: hovered ? "var(--green-dim)" : "var(--border)",
        background: hovered ? "var(--green-glow)" : "var(--card)",
      }}
    >
      <div style={styles.skillName}>{skill.name}</div>
      <div style={styles.skillLevel}>{skill.level}</div>
    </div>
  );
}

function About() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" style={styles.sectionAlt}>
      <SectionHeader num="01" title="Sobre mí" />
      <div ref={ref} style={{ ...styles.aboutGrid, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>
        <div>
          {DATA.bio.map((p, i) => (
            <p key={i} style={styles.bioText}>{p}</p>
          ))}
        </div>
        <div style={styles.skillsGrid}>
          {DATA.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.projectCard,
        borderColor: hovered ? "var(--green-dim)" : "var(--border)",
        transform: visible ? (hovered ? "translateY(-4px)" : "translateY(0)") : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transition: `all 0.7s ease ${index * 0.1}s`,
      }}
    >
      <div style={{ ...styles.projectCardLine, transform: hovered ? "scaleX(1)" : "scaleX(0)" }} />
      <div style={styles.projectNum}>{project.id}</div>
      <h3 style={styles.projectTitle}>{project.title}</h3>
      <p style={styles.projectDesc}>{project.desc}</p>
      <div style={styles.projectTags}>
        {project.tags.map((tag) => (
          <span key={tag} style={styles.tag}>{tag}</span>
        ))}
      </div>
      <div style={styles.projectLinks}>
        <a href={project.demo} style={styles.projectLink}>Ver demo ↗</a>
        <a href={project.github} style={styles.projectLink}>GitHub ↗</a>
      </div>
    </div>
  );
}

function PlaceholderCard({ index }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        ...styles.projectCard,
        ...styles.placeholder,
        opacity: visible ? 0.4 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.7s ease ${index * 0.1}s`,
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: 16, opacity: 0.5 }}>{"{ }"}</div>
      <div style={styles.placeholderText}>Próximo proyecto</div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ ...styles.section, maxWidth: 1400, margin: "0 auto" }}>
      <SectionHeader num="02" title="Proyectos" />
      <div style={styles.projectsGrid}>
        {DATA.projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
        <PlaceholderCard index={DATA.projects.length} />
        <PlaceholderCard index={DATA.projects.length + 1} />
      </div>
    </section>
  );
}

function ContactItem({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.contactItem,
        borderColor: hovered ? "var(--green-dim)" : "var(--border)",
        background: hovered ? "var(--green-glow)" : "var(--card)",
        paddingLeft: hovered ? 32 : 24,
      }}
    >
      <div>
        <div style={styles.contactPlatform}>{item.platform}</div>
        <div style={styles.contactHandle}>{item.handle}</div>
      </div>
      <span style={{ ...styles.contactArrow, transform: hovered ? "translateX(6px)" : "translateX(0)" }}>→</span>
    </a>
  );
}

function Contact() {
  const { ref, visible } = useReveal();
  return (
    <section id="contact" style={styles.sectionAlt}>
      <SectionHeader num="03" title="Contacto" />
      <div
        ref={ref}
        style={{ maxWidth: 640, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}
      >
        <p style={styles.contactIntro}>
          ¿Tienes un proyecto en mente, quieres colaborar o simplemente conectar?
          Encuéntrame en cualquiera de estas plataformas.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {DATA.contact.map((item) => (
            <ContactItem key={item.platform} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ num, title }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        ...styles.sectionHeader,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.6s ease",
      }}
    >
      <span style={styles.sectionNum}>{num}</span>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionLine} />
    </div>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <span style={styles.footerCopy}>© 2026 David Muñoz</span>
      <span style={styles.footerBuilt}>
        Construido con <span style={{ color: "var(--green)" }}>React</span>
      </span>
    </footer>
  );
}

// ============================================
// APP PRINCIPAL
// ============================================
export default function App() {
  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Fraunces:ital,wght@0,300;0,700;0,900;1,300&display=swap');
        :root {
          --bg: #080c0a; --bg2: #0d1410; --bg3: #111a14;
          --green: #39ff8f; --green-dim: #1a7a42; --green-glow: rgba(57,255,143,0.08);
          --text: #c8d9cc; --text-dim: #5a7060; --text-bright: #eaf5ed;
          --border: #1c2e20; --card: #0e1812;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); }
        a { text-decoration: none; }
        li { list-style: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(57,255,143,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(57,255,143,0); }
        }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// ============================================
// ESTILOS
// ============================================
const styles = {
  root: { background: "var(--bg)", color: "var(--text)", fontFamily: "'DM Mono', monospace", fontSize: 14, lineHeight: 1.7 },
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(to bottom, rgba(8,12,10,0.95), transparent)", backdropFilter: "blur(8px)" },
  navLogo: { fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--green)" },
  navLinks: { display: "flex", gap: 32 },
  navLink: { fontSize: "0.75rem", letterSpacing: 2, textTransform: "uppercase", transition: "color 0.2s" },
  hero: { minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)", opacity: 0.4, pointerEvents: "none" },
  heroGlow: { position: "absolute", top: "20%", right: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(57,255,143,0.06) 0%, transparent 70%)", pointerEvents: "none" },
  heroTag: { fontSize: "0.7rem", letterSpacing: 4, textTransform: "uppercase", color: "var(--green)", marginBottom: 24 },
  h1: { fontFamily: "'Fraunces', serif", fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 900, lineHeight: 0.95, letterSpacing: -3, color: "var(--text-bright)", marginBottom: 8 },
  heroSubtitle: { fontFamily: "'Fraunces', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, fontStyle: "italic", color: "var(--text-dim)", marginBottom: 48 },
  heroDesc: { maxWidth: 480, fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.8, marginBottom: 48 },
  heroCta: { display: "flex", gap: 16, flexWrap: "wrap" },
  btnPrimary: { background: "var(--green)", color: "var(--bg)", padding: "12px 28px", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", fontWeight: 500, letterSpacing: 1, display: "inline-block", transition: "all 0.2s" },
  btnSecondary: { border: "1px solid var(--border)", color: "var(--text-dim)", padding: "12px 28px", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: 1, display: "inline-block", transition: "all 0.2s" },
  statusBadge: { position: "absolute", bottom: 48, right: 48, display: "flex", alignItems: "center", gap: 10, fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: 1 },
  statusDot: { width: 8, height: 8, background: "var(--green)", borderRadius: "50%", animation: "pulse 2s ease infinite" },
  section: { padding: "100px 48px" },
  sectionAlt: { padding: "100px 48px", background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" },
  sectionHeader: { display: "flex", alignItems: "baseline", gap: 16, marginBottom: 64 },
  sectionNum: { fontSize: "0.65rem", color: "var(--green)", letterSpacing: 3, opacity: 0.6 },
  sectionTitle: { fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--text-bright)", letterSpacing: -1 },
  sectionLine: { flex: 1, height: 1, background: "var(--border)", marginLeft: 16 },
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" },
  bioText: { color: "var(--text)", lineHeight: 1.9, marginBottom: 20, fontSize: "0.88rem" },
  skillsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  skillItem: { border: "1px solid var(--border)", padding: 16, background: "var(--card)", transition: "all 0.2s", cursor: "default" },
  skillName: { fontSize: "0.72rem", color: "var(--green)", letterSpacing: 1, marginBottom: 4 },
  skillLevel: { fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: 2, textTransform: "uppercase" },
  projectsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 2 },
  projectCard: { background: "var(--card)", border: "1px solid var(--border)", padding: 36, position: "relative", overflow: "hidden", cursor: "pointer" },
  projectCardLine: { position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--green), transparent)", transition: "transform 0.4s" },
  projectNum: { fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: 3, marginBottom: 20 },
  projectTitle: { fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text-bright)", marginBottom: 12, letterSpacing: -0.5 },
  projectDesc: { fontSize: "0.8rem", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 },
  projectTags: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 },
  tag: { fontSize: "0.62rem", letterSpacing: 1.5, textTransform: "uppercase", color: "var(--green)", border: "1px solid var(--green-dim)", padding: "3px 10px" },
  projectLinks: { display: "flex", gap: 16 },
  projectLink: { fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: 1, transition: "color 0.2s" },
  placeholder: { borderStyle: "dashed", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 280, cursor: "default" },
  placeholderText: { fontSize: "0.75rem", color: "var(--text-dim)", letterSpacing: 2, textTransform: "uppercase" },
  contactIntro: { fontSize: "0.88rem", color: "var(--text-dim)", lineHeight: 1.9, marginBottom: 48 },
  contactItem: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", border: "1px solid var(--border)", background: "var(--card)", marginBottom: 0, transition: "all 0.2s", cursor: "pointer" },
  contactPlatform: { fontSize: "0.65rem", letterSpacing: 3, textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 4 },
  contactHandle: { fontFamily: "'Fraunces', serif", fontSize: "1rem", fontStyle: "italic", color: "var(--text-bright)" },
  contactArrow: { color: "var(--green)", fontSize: "1.2rem", transition: "transform 0.2s" },
  footer: { padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)" },
  footerCopy: { fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: 2 },
  footerBuilt: { fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: 1 },
};
