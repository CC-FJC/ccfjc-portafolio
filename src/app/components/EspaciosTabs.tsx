import styles from "./EspaciosTabs.module.css";

/* Los espacios se recorren con el scroll: cada uno es un bloque con
   su titulo-tag, sus items en chips y una galeria masonry asimetrica */

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
      "./Auditorio(3).png",
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
  return (
    <section id="espacios" className={styles.section} data-axis="03">
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
