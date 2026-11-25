import Image from "next/image";
import styles from "./Logos.module.css";

/* Seccion final: logos institucionales centrados, sin etiqueta de eje */

export default function Logos() {
  return (
    <section className={styles.section} aria-label="Logos institucionales">
      <div className={styles.container}>
        <Image
          src="/Logo CCFJC + VPU + UCaldas.png"
          alt="Logos institucionales: Universidad de Caldas, Vicerrectoría de Proyección Universitaria y Centro de Ciencia Francisco José de Caldas"
          width={640}
          height={106}
          className={styles.logo}
        />
      </div>
    </section>
  );
}
