"use client";

import styles from "./Beneficios.module.css";
import {
  FaShieldAlt,
  FaPiggyBank,
  FaChartLine,
  FaAward,
  FaStar,
} from "react-icons/fa";

const beneficios = [
  {
    icon: <FaShieldAlt />,
    title: "Credibilidad y Confianza",
    text: "Su proyecto cuenta con el respaldo de la máxima autoridad de CTeI en Colombia y de la Universidad de Caldas, fortaleciendo su imagen ante clientes, inversionistas y la comunidad.",
  },
  {
    icon: <FaPiggyBank />,
    title: "Beneficios Tributarios",
    text: "Las inversiones que su empresa realice en proyectos de I+D+i con nosotros pueden ser elegibles para deducciones y descuentos fiscales, optimizando su retorno de inversión.",
  },
  {
    icon: <FaChartLine />,
    title: "Acceso a Financiación",
    text: "Nos convertimos en su aliado estratégico para postular a convocatorias nacionales e internacionales de CTeI, aumentando drásticamente sus posibilidades de obtener recursos no reembolsables.",
  },
  {
    icon: <FaAward />,
    title: "Calidad Garantizada",
    text: "Nuestro reconocimiento certifica que nuestros procesos, metodologías y equipo cumplen con los más altos estándares de calidad, asegurando la rigurosidad y efectividad de nuestras intervenciones.",
  },
  {
    icon: <FaStar />,
    title: "Experiencia y Experticia",
    text: "Amplia experiencia trabajando con pequeña, mediana empresa y sector público en proyectos de innovación y desarrollo tecnológico de alto impacto.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className={styles.section}>
      <h2 className={styles.sectionTitle}>Beneficios de trabajar con nosotros</h2>
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
