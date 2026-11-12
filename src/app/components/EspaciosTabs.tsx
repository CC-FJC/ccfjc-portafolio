"use client";

import { useState } from "react";
import styles from "./EspaciosTabs.module.css";

const tabs = {
  makerspace: {
    title: "MakerSpace",
    items: [
      "Impresoras 3D",
      "Ruteadora CNC",
      "Cortadora láser semi industrial",
      "Sistemas de realidad virtual",
      "Sistemas de cómputo de altas capacidades",
      "Kits de microcontroladores",
      "Herramientas de corte y construcción",
    ],
    images: [
      "./Generated-Image-September-16,-2025---9_34PM.png",
      "./Maker.png",
      "./Maker-2.png",
    ],
  },
  auditorio: {
    title: "Auditorio",
    items: [
      "Sistemas para transmisión de streaming",
      "3 cámaras de video HD",
      "Sistemas de transmisión de HDMI",
      "Sistema de conexión cruzada híbrida",
      "Sistema de sonido con 32 canales y capacidades de grabación",
      "Proyección de alta calidad",
    ],
    images: [
      "./_DSC1960.png",
      "./Auditorio-(1).png",
      "./Auditorio-(2).png",
      "./Auditorio(3).png"

    ],
  },
  exposicion: {
    title: "Salas de Exposición",
    items: [
      "2 salas de exposición",
      "Sistemas de iluminación especializado",
      "Herramientas de montaje especializado",
    ],
    images: [
      "./Exposiciones.png",
      "./Exposiciones_2.png",
      "./ExposicionesAlterna.png",
    ],
  },
};

export default function EspaciosTabs() {
  const [active, setActive] = useState<keyof typeof tabs>("makerspace");

  return (
    <section id="espacios" className={styles.section} data-axis="03">
      <h2 className={styles.sectionTitle}>Nuestros Espacios y Laboratorio</h2>
      <div className={styles.tabsNav}>
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={`${styles.tabButton} ${
              active === key ? styles.active : ""
            }`}
            onClick={() => setActive(key as keyof typeof tabs)}
          >
            {tabs[key as keyof typeof tabs].title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        <div className={styles.labContent}>
          <div className={styles.labDescription}>
            <ul>
              {tabs[active].items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.labGallery}>
            {tabs[active].images.map((img, i) => (
              <img key={i} src={img} alt={`${tabs[active].title} ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
