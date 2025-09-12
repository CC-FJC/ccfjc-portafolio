"use client";

import styles from "./Beneficios.module.css";
import { FaBolt, FaNetworkWired, FaUsers, FaLightbulb } from "react-icons/fa";

const beneficios = [
  {
    icon: <FaBolt />,
    title: "Agilidad",
    text: "Procesos rápidos de ideación, prototipado y experimentación.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Red de aliados",
    text: "Conectamos con universidades, empresas y centros de investigación.",
  },
  {
    icon: <FaUsers />,
    title: "Trabajo en equipo",
    text: "Espacios colaborativos para co-crear y resolver desafíos.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovación",
    text: "Soluciones creativas que conectan ciencia y sociedad.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className={styles.section}>
      <h2 className={styles.sectionTitle}>Beneficios</h2>
      <div className={styles.grid}>
        {beneficios.map((b, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <div className={styles.icon}>{b.icon}</div>
                <h3>{b.title}</h3>
              </div>
              <div className={styles.back}>
                <p>{b.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
