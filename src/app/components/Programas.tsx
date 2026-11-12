"use client";

import styles from "./Programas.module.css";

const programas = [
  {
    title: "Programas de Formación",
    text: "Talleres, cursos y seminarios en innovación, ciencia y tecnología.",
  },
  {
    title: "Acompañamiento a Proyectos",
    text: "Asesoría personalizada para desarrollar proyectos desde la idea hasta el prototipo.",
  },
  {
    title: "Programas Empresariales",
    text: "Capacitación y consultoría en procesos de innovación abierta para empresas.",
  },
];

export default function Programas() {
  return (
    <section id="programas" className={styles.section} data-axis="06">
      <h2 className={styles.sectionTitle}>Programas</h2>
      <div className={styles.grid}>
        {programas.map((p, i) => (
          <div key={i} className={styles.card}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
