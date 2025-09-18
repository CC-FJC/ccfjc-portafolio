"use client";

import { useState } from "react";
import styles from "./Equipo.module.css";

const equipoData = [
  {
    nombre: "Dr. Héctor Yovanny Betancur Santa",
    rol: "Director (Doctor en Música)",
    destacado: false,
    foto: "https://i.ibb.co/mVXHv2s6/Yovanny.png",
  },
  {
    nombre: "Dra. Sandra Lince",
    rol: "Asesora Líder (PhD en Educación)",
    destacado: false,
    foto: "https://i.ibb.co/DPtvmxRJ/Sandra.png",
  },
  {
    nombre: "Dr. Mauricio Arbeláez",
    rol: "Asesor Líder (Dr. en Diseño y Creación)",
    destacado: false,
    foto: "https://i.ibb.co/gZLdqW6c/Mauricio.png",
  },
  {
    nombre: "Dra. Carmenza Gallego",
    rol: "Asesora Líder (Dra. en Diseño y Creación)",
    destacado: false,
    foto: "https://i.ibb.co/chFq4fgq/Carmenza.png",
  },
  {
    nombre: "Dra. Carolina Salguero",
    rol: "Asesora (Dra. en Diseño y Creación)",
    destacado: false,
    foto: "https://i.ibb.co/nJ66WQD/Carolina.png",
  },
  {
    nombre: "Juana Valentina Bustos",
    rol: "Comunicación de la ciencia",
    destacado: false,
    foto: "https://i.ibb.co/0y99x5ch/juana.png",
  },
  {
    nombre: "Susana Alvarán",
    rol: "Gestora de participación ciudadana",
    destacado: false,
    foto: "https://i.ibb.co/Hk8PC26/Susana.png",
  },
  {
    nombre: "Mateo Quintero",
    rol: "Mediación, prototipado y transferencia",
    destacado: false,
    foto: "https://i.ibb.co/4RssqBqw/Mateo.png",
  },
  {
    nombre: "Daniel Castillo",
    rol: "Mediación, prototipado y transferencia",
    destacado: false,
    foto: "https://i.ibb.co/sY9kgW9/Daniel.png",
  },
];

export default function Equipo() {
  const [equipo, setEquipo] = useState(equipoData);

  const handleMouseEnter = (index: number) => {
    setEquipo((prev) =>
      prev.map((p, i) => ({
        ...p,
        destacado: i === index,
      }))
    );
  };

  const handleMouseLeave = () => {
    setEquipo(equipoData);
  };

  return (
    <section id="equipo" className={styles.section}>
      {/* Fondo Grid Orb */}
      <div className={styles.background}></div>

      <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
      <div className={styles.grid}>
        {equipo.map((persona, i) => (
          <div
            key={i}
            className={`${styles.card} ${
              persona.destacado ? styles.destacado : ""
            }`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={persona.foto} alt={persona.nombre} />
            <h3>{persona.nombre}</h3>
            <p>{persona.rol}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
