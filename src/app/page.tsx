import Hero from "./components/Hero";
import FloatingNav from "./components/FloatingNav";
import ThreeBackground from "./components/ThreeBackground";
import Valores from "./components/Valores";
import EspaciosTabs from "./components/EspaciosTabs";
import SolucionesAccordion from "./components/SolucionesAccordion";
import Beneficios from "./components/Beneficios";
import Programas from "./components/Programas";
import Alianzas from "./components/Alianzas";
import Equipo from "./components/Equipo";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <FloatingNav />
      <main>
        <Hero />
        <Valores />
        <EspaciosTabs />
        <SolucionesAccordion />
        <Beneficios />
        <Programas />
        <Alianzas />
        <Equipo />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}