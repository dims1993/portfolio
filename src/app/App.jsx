import Layout from "./layout";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Stack from "../sections/Stack";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </Layout>

      {/* Scripts no visuales */}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
