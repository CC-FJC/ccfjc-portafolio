"use client";

import styles from "./Equipo.module.css";

const equipo = [
  {
    nombre: "Dr. Héctor Yovanny Betancur Santa",
    rol: "Director (Doctor en Música)",
    destacado: true,
    foto: "https://i.ibb.co/mVXHv2s6/Yovanny.png",
  },
  {
    nombre: "Dra. Sandra Lince",
    rol: "Asesora Líder (PhD en Educación)",
    destacado: false,
    foto: "https://picsum.photos/seed/maria/300/300",
  },
  {
    nombre: "Dr. Mauricio Arbeláez",
    rol: "Asesora Líder (Dra. en Diseño y Creación)",
    destacado: false,
    foto: "https://picsum.photos/seed/carlos/300/300",
  },
  {
    nombre: "Dra. Carmenza Gallego",
    rol: "Asesora Líder (Dra. en Diseño y Creación)",
    destacado: false,
    foto: "https://picsum.photos/seed/carlos/300/300",
  },
  {
    nombre: "Dra. Carolina Salguero",
    rol: "Asesora (Dra. en Diseño y Creación)",
    destacado: false,
    foto: "https://picsum.photos/seed/ana/300/300",
  },
  {
    nombre: "Juana Valentina Bustos",
    rol: "Comunicación de la ciencia",
    destacado: false,
    foto: "https://i.ibb.co/vxscYNGP/juana.png",
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
  return (
    <section id="equipo" className={styles.section}>
      <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
      <div className={styles.grid}>
        {equipo.map((persona, i) => (
          <div
            key={i}
            className={`${styles.card} ${
              persona.destacado ? styles.destacado : ""
            }`}
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
