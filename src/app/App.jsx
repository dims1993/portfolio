import Layout from "./layout";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Projects />
    </Layout>
  );
}

export default App;
