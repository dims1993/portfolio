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
      image: "/image-project-1.webp",
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
      image: "/image-project-2.webp",
    },
  ],
  skills: {
    frontend: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
    tools: ["Git", "Vite", "Figma", "Postman"],
  },
};

export default DATA;
