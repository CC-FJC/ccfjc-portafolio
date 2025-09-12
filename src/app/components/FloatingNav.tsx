"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingNav.module.css";

const items = [
  { id: "hero", label: "Inicio" },
  { id: "valores", label: "02" },
  { id: "espacios", label: "03" },
  { id: "soluciones", label: "04" },
  { id: "beneficios", label: "05" },
  { id: "programas", label: "06" },
  { id: "alianzas", label: "07" },
  { id: "equipo", label: "08" },
  { id: "contacto", label: "09" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 200) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ejecutar al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${styles.item} ${
            activeSection === item.id ? styles.active : ""
          }`}
        >
          <span className={styles.label}>{item.label}</span>
          <a href={`#${item.id}`} />
        </div>
      ))}
    </nav>
  );
}
