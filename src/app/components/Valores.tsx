"use client";

import styles from "./Valores.module.css";
import { FaCodeBranch, FaGraduationCap, FaHandshake, FaBrain, FaUniversalAccess } from "react-icons/fa";

const valores = [
  {
    icon: <FaCodeBranch />,
    title: "Código abierto (Open Source)",
    text: "Creemos en el acceso libre y compartido al conocimiento, software, hardware y recursos digitales. Apostamos por la transparencia, la adaptación local y la mejora colectiva.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Educación",
    text: "Entendemos la educación como un proceso transformador, colaborativo y creativo, que articula saberes diversos para generar impacto social.",
  },
  {
    icon: <FaHandshake />,
    title: "Colaboración",
    text: "Trabajamos en red, desde el respeto y el diálogo, para construir soluciones colectivas e innovadoras a desafíos sociales, científicos y educativos.",
  },
  {
    icon: <FaBrain />,
    title: "Co-creación y diálogo de saberes",
    text: "Diseñamos procesos participativos que integran conocimientos científicos, locales y ancestrales, generando respuestas sostenibles.",
  },
  {
    icon: <FaUniversalAccess />,
    title: "Democratización",
    text: "Promovemos el acceso equitativo a la tecnología, la ciencia y la educación, eliminando barreras y fortaleciendo la participación de todas las personas.",
  },
];

export default function Valores() {
  return (
    <section id="valores" className={styles.section} data-axis="02">
      <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
      <div className={styles.grid}>
        {valores.map((v, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
