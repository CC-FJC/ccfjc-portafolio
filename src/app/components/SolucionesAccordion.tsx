"use client";

import { useState } from "react";
import styles from "./SolucionesAccordion.module.css";
import {
  FaLightbulb,
  FaCogs,
  FaChalkboardTeacher,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";

const soluciones = [
  {
    icon: <FaLightbulb />,
    title: "Consultoría estratégica en innovación y ASC",
    content:
      "Consultoría para el diseño de estrategias y la implementación de procesos de innovación I+D+i.",
  },
  {
    icon: <FaCogs />,
    title: "Desarrollo y prototipado tecnológico",
    content:
      "Prototipado digital y físico, desarrollo de experiencias inmersivas, soluciones con inteligencia artificial.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Diseño y transferencia de conocimiento",
    content:
      "Diseño de experiencias de aprendizaje, e-learning, asesoría técnica especializada.",
  },
  {
    icon: <FaBullhorn />,
    title: "Comunicación y divulgación de desarrollos",
    content:
      "Estrategia de comunicación, producción de contenidos digitales, streaming, diseño gráfico y editorial.",
  },
  {
    icon: <FaUsers />,
    title: "Laboratorios de participación ciudadana",
    content:
      "Clubes de ciencia, talleres de co-creación, programación de divulgación abierta al público.",
  },
];

export default function SolucionesAccordion() {
  const [active, setActive] = useState<number | null>(null);

  const handleCotizar = (title: string) => {
    const input = document.getElementById(
      "servicio-a-consultar"
    ) as HTMLInputElement | null;
    const contactoSection = document.getElementById("contacto");

    if (input) {
      input.value = title;
    }
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="soluciones" className={styles.section}>
      <h2 className={styles.sectionTitle}>Portafolio de Soluciones</h2>
      <div className={styles.accordion}>
        {soluciones.map((s, i) => (
          <div
            key={i}
            className={`${styles.item} ${active === i ? styles.active : ""}`}
          >
            <button
              className={styles.header}
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className={styles.title}>
                {s.icon} {s.title}
              </span>
            </button>
            <div
              className={styles.content}
              style={{
                maxHeight: active === i ? "400px" : "0",
              }}
            >
              <div className={styles.inner}>
                <p>{s.content}</p>
                <button
                  className={styles.cotizarBtn}
                  onClick={() => handleCotizar(s.title)}
                >
                  Cotizar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
