const DATA = {
  name: "David Muñoz",
  role: "Full Stack Developer",
  subtitle: "JavaScript • React • Node • Python",
  socials: [
    { name: "GitHub", url: "https://github.com/dims1993", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/david-muñoz-salinas-735b0b133",
      icon: "linkedin",
    },
  ],
  projects: [
    {
      id: 1,
      key: "project1", // Usaremos esto para traducir
      stack: {
        backend: ["Python", "Django", "PostgreSQL"],
        frontend: ["React", "Tailwind CSS"],
      },
      github: "https://github.com/dims1993/project-one",
      demo: "https://demo-link.com",
      image:
        "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1587&auto=format&fit=crop",
    },
    {
      id: 2,
      key: "project2",
      stack: {
        backend: ["Node.js", "Express"],
        frontend: ["React", "Chart.js", "Tailwind"],
      },
      github: "https://github.com/dims1993/project-two",
      demo: "https://demo-link.com",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    },
  ],
  skills: {
    frontend: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
    tools: ["Git", "Vite", "Figma", "Postman"],
  },
};

export default DATA;
