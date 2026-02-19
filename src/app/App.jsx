import Layout from "./layout";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
