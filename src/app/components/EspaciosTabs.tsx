"use client";

import { useEffect, useRef } from "react";
import styles from "./EspaciosTabs.module.css";

/* Los espacios se recorren con el scroll y el movimiento (titulos, fotos
   y bloques) se calcula por posicion: funciona en cualquier navegador */

const espacios: Record<
  string,
  { title: string; items: string[]; images: string[] }
> = {
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

const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

export default function EspaciosTabs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const spaces = Array.from(
      section.querySelectorAll<HTMLElement>(`.${styles.space}`)
    );
    const titles = Array.from(
      section.querySelectorAll<HTMLElement>(`.${styles.spaceTitle}`)
    );
    const photos = Array.from(
      section.querySelectorAll<HTMLElement>(`.${styles.photo}`)
    );

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* progreso de entrada de un elemento: 0 cuando su borde superior toca
       el borde inferior del viewport, 1 cuando llevan ~35% del alto dentro */
    const prog = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const span = window.innerHeight * 0.35 + r.height * 0.5;
      return Math.min(1, Math.max(0, (window.innerHeight - r.top) / span));
    };

    let raf = 0;
    const update = () => {
      if (reduced) {
        spaces.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        titles.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        photos.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        return;
      }

      // bloques: fade + rise leve
      spaces.forEach((el) => {
        const p = easeOut(prog(el));
        el.style.opacity = String(p);
        el.style.transform = `translateY(${(1 - p) * 24}px)`;
      });

      // titulos: deslizamiento horizontal desde la izquierda
      titles.forEach((el) => {
        const p = easeOut(prog(el));
        el.style.opacity = String(p);
        el.style.transform = `translateX(${(1 - p) * -40}px)`;
      });

      // fotos: variantes de subida (grande, pares, con inclinacion)
      photos.forEach((el, i) => {
        const p = easeOut(prog(el));
        const ty = i === 0 ? 56 : i % 2 === 1 ? 44 : 64;
        const sc = i === 0 ? 0.96 : i % 2 === 1 ? 0.97 : 0.96;
        const rot = i === 0 || i % 2 === 1 ? 0 : -1;
        el.style.opacity = String(p);
        el.style.transform = `translateY(${(1 - p) * ty}px) rotate(${rot * (1 - p)}deg) scale(${sc + (1 - sc) * p})`;
      });

      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="espacios" ref={sectionRef} className={styles.section} data-axis="03">
      <h2 className={styles.sectionTitle}>Nuestros Espacios y Laboratorio</h2>
      <div className={styles.spaces}>
        {Object.entries(espacios).map(([key, s]) => (
          <div key={key} className={styles.space} data-space={key}>
            <h3 className={styles.spaceTitle}>{s.title}</h3>
            <ul className={styles.items}>
              {s.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className={styles.masonry}>
              {s.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${s.title} ${i + 1}`}
                  className={styles.photo}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
