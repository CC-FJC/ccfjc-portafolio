"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} data-axis="01">
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="Logo Centro de Ciencia Francisco José de Caldas"
            width={600}
            height={600}
            className={styles.logo}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Tu aliado para Innovar, Crear y{" "}
          <span className={styles.gradientText}>Prototipar.</span>
        </h1>
        <p className={styles.subtitle}>
          Conectamos el conocimiento científico con soluciones aplicadas,
          facilitando el paso de la idea al objeto funcional.
        </p>
      </div>
    </section>
  );
}
