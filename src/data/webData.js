const DATA = {
  name: "David Muñoz",
  role: "Full Stack Developer",
  subtitle: "JavaScript • React • Node • Python",
  description:
    "Fullstack Developer with a solid foundation in Python and the JavaScript ecosystem. Capable of building everything from robust APIs and server-side logic to dynamic, scalable user interfaces.",
  socials: [
    { name: "GitHub", url: "https://github.com/dims1993", icon: "github" },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/david-muñoz-salinas-735b0b133",
      icon: "linkedin",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Ejemplo a modelar 1",
      description:
        "Fullstack application built with Python and Django. Features a RESTful API, JWT authentication, and a PostgreSQL database for real-time tracking.",
      stack: {
        backend: ["Python", "Django", "PostgreSQL"],
        frontend: ["React", "Tailwind CSS"],
      },
      github: "https://github.com/dims1993/project-one",
      demo: "https://demo-link.com",
      image:
        "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Ejemplo a modelar 2",
      description:
        "A high-performance dashboard focused on data visualization. Optimized for speed and responsiveness using asynchronous JavaScript and modern CSS architectures.",
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
    soft: ["Resolución de problemas", "Trabajo en equipo", "Adaptabilidad"],
  },
  availability: "Available to colab",
};

export default DATA;
