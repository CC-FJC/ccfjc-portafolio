import Hero from "./components/Hero";
import ScrollCanvas from "./components/ScrollCanvas";
import Valores from "./components/Valores";
import EspaciosTabs from "./components/EspaciosTabs";
import SolucionesAccordion from "./components/SolucionesAccordion";
import Beneficios from "./components/Beneficios";
import Programas from "./components/Programas";
import Alianzas from "./components/Alianzas";
import Equipo from "./components/Equipo";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <>
      <ScrollCanvas />
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
      </main>
    </>
  );
}