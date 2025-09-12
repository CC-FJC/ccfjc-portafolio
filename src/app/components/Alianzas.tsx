"use client";

import styles from "./Alianzas.module.css";

const logos = [
  "https://picsum.photos/seed/aliado1/200/100",
  "https://picsum.photos/seed/aliado2/200/100",
  "https://picsum.photos/seed/aliado3/200/100",
  "https://picsum.photos/seed/aliado4/200/100",
  "https://picsum.photos/seed/aliado5/200/100",
  "https://picsum.photos/seed/aliado6/200/100",
];

export default function Alianzas() {
  return (
    <section id="alianzas" className={styles.section}>
      <h2 className={styles.sectionTitle}>Ecosistema y Alianzas</h2>
      <div className={styles.slider}>
        <div className={styles.track}>
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className={styles.slide}>
              <img src={logo} alt={`Aliado ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
