import Layout from "./layout";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </Layout>
  );
}

export default App;
