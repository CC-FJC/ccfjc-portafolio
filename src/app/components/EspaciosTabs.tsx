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
      "https://picsum.photos/seed/3dprinter/400/300",
      "https://picsum.photos/seed/laser/400/300",
      "https://picsum.photos/seed/cnc/400/300",
      "https://picsum.photos/seed/vr/400/300",
      "https://picsum.photos/seed/arduino/400/300",
      "https://picsum.photos/seed/workspace/400/300",
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
      "https://picsum.photos/seed/auditorium/400/300",
      "https://picsum.photos/seed/streaming/400/300",
      "https://picsum.photos/seed/sound/400/300",
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
      "https://picsum.photos/seed/gallery/400/300",
      "https://picsum.photos/seed/art/400/300",
      "https://picsum.photos/seed/lighting/400/300",
    ],
  },
};

export default function EspaciosTabs() {
  const [active, setActive] = useState<keyof typeof tabs>("makerspace");

  return (
    <section id="espacios" className={styles.section}>
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
