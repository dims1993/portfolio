import Layout from "./layout";
import Hero from "../sections/Hero"; // Asegúrate de que la ruta sea correcta
import Projects from "../sections/Projects"; // Importamos la nueva sección

function App() {
  return (
    <Layout>
      <Hero />
      <Projects /> {/* <--- Ahora sí aparecerán debajo del Hero */}
    </Layout>
  );
}

export default App;
