"use client";

import styles from "./Alianzas.module.css";

const logos = [
  "1 Logo_del_Ministerio_de_Ciencias_-_Colombia_2022-2026.png",
  "2 LOGO GOBER PRIMERO LA GENTE 2020-01.png",
  "3 logo-dark.png",
  "4 Logo_CHEC_grupo_EPM.png",
  "5 buen-cafe-cl.png",
  "6 Banco de la republica.png",
  "7 Logo-Festival-Internacional-de-la-Imagen-negro.png",
  "8 Logo_de_la_Comisión_Económica_para_América_Latina_y_el_Caribe.svg.png",
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
