"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/Logo CCFJC + VPU + UCaldas.png" // Asegúrate de colocar tu logo en public/logo.png
            alt="Logo"
            width={600}
            height={100}
            priority
          />
        </div>

        {/* Links */}
        <nav className={styles.nav}>
          <a href="#inicio">Inicio</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#programas">Programas</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>

      {/* Línea divisoria */}
      <div className={styles.divider}></div>

      {/* Copy */}
      <div className={styles.copy}>
        <p>
          © {new Date().getFullYear()} Centro de Ciencia Francisco José de
          Caldas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
