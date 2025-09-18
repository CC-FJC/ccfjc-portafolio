"use client";

import { useState } from "react";
import styles from "./SolucionesAccordion.module.css";
import {
  FaLightbulb,
  FaCogs,
  FaChalkboardTeacher,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";

const soluciones = [
  {
    icon: <FaLightbulb />,
    title: "Consultoría estratégica en innovación y ASC",
    content: (
      <>
        <p>
          <strong>Modelo de negocio:</strong> Venta de Servicios. Ideal para
          organizaciones que necesitan un plan de acción, no solo una
          herramienta.
        </p>
        <ul>
          <li>
            <strong>Consultoría para el diseño de estrategias de ASC:</strong>{" "}
            Analizamos sus necesidades y co-diseñamos una estrategia integral de
            Apropiación Social del Conocimiento para sus proyectos, cumpliendo
            con los requisitos de convocatorias (Minciencias, SGR) y maximizando
            el impacto social.
          </li>
          <li>
            <strong>
              Consultoría para la implementación de procesos de innovación
              I+D+i:
            </strong>{" "}
            Le ayudamos a integrar la innovación en su cultura organizacional,
            diseñando laboratorios de innovación internos (públicos o
            corporativos) y definiendo hojas de ruta tecnológicas.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaCogs />,
    title: "Desarrollo y prototipado tecnológico",
    content: (
      <>
        <p>
          <strong>Modelo de negocio:</strong> Venta de Servicios. Materializamos
          sus ideas con tecnología de punta.
        </p>
        <ul>
          <li>
            <strong>Prototipado digital y físico:</strong> Soluciones para
            prototipos de arranque, pruebas de concepto, productos mínimos
            viables (MVP). Desarrollo Web/App, Modelado 3D, CAD, Diseño de
            circuitos, Impresión 3D, Corte láser, Maquinado CNC.
          </li>
          <li>
            <strong>Desarrollo de experiencias inmersivas:</strong> Creamos
            productos de Realidad Virtual (VR) y Realidad Aumentada (AR),
            Recorridos Virtuales 360°, y Videomapping para capacitación,
            marketing o experiencias de usuario.
          </li>
          <li>
            <strong>Soluciones con inteligencia artificial:</strong> Desarrollo
            de chatbots, entrenamiento de modelos de IA generativa (imágenes,
            texto) y diseño de estrategias para implementar IA en sus procesos.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Diseño y transferencia de conocimiento",
    content: (
      <>
        <p>
          <strong>Modelo de negocio:</strong> Venta de Servicios / Subsidiado.
          Soportamos sus procesos de formación y gestión del conocimiento.
        </p>
        <ul>
          <li>
            <strong>Diseño de experiencias de aprendizaje (UX/UI):</strong>{" "}
            Diseñamos interfaces y plataformas educativas intuitivas y
            efectivas, centradas en el usuario.
          </li>
          <li>
            <strong>E-learning y documentación web:</strong> Estructuramos y
            producimos cursos virtuales (MOOCs), webinars y plataformas de
            web-documentación para transferir conocimiento de manera escalable.
          </li>
          <li>
            <strong>Asesoría técnica especializada:</strong> Sesiones puntuales
            y enfocadas para resolver dudas técnicas sobre software, hardware o
            metodologías específicas.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaBullhorn />,
    title: "Comunicación y divulgación de desarrollos",
    content: (
      <>
        <p>
          <strong>Modelo de negocio:</strong> Venta de Servicios. Traducimos su
          conocimiento en formatos atractivos y de alto alcance.
        </p>
        <ul>
          <li>Estrategia de comunicación estratégica.</li>
          <li>
            Producción de contenidos digitales: video, podcast, fotografía 360°.
          </li>
          <li>Streaming profesional para eventos.</li>
          <li>Diseño gráfico y editorial para la ciencia.</li>
          <li>
            Producción sonora: radio, podcast, cuñas, audiolibro.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaUsers />,
    title: "Laboratorios de participación ciudadana",
    content: (
      <>
        <p>
          <strong>Modelo de negocio:</strong> Gratuito / Subsidiado. Espacios
          abiertos para la comunidad y entidades públicas.
        </p>
        <ul>
          <li>
            <strong>Clubes de ciencia ciudadanos (STEAM):</strong> Programa para
            niños, niñas y jóvenes que fomenta vocaciones científicas.
          </li>
          <li>
            <strong>Talleres de co-creación y laboratorios ciudadanos:</strong>{" "}
            Espacios abiertos a la comunidad para resolver retos locales. Ideal
            para alianzas con el sector público y ONGs.
          </li>
          <li>
            <strong>Programación de divulgación:</strong> Charlas, exposiciones
            y eventos de nuestra agenda permanente, abiertos a todo público.
          </li>
        </ul>
      </>
    ),
  },
];

export default function SolucionesAccordion() {
  const [active, setActive] = useState<number | null>(null);

  const handleCotizar = (title: string) => {
    // 🔹 Dispara un evento que Contacto.tsx escucha
    document.dispatchEvent(new CustomEvent("cotizarServicio", { detail: title }));

    // 🔹 Hace scroll al formulario
    const contactoSection = document.getElementById("contacto");
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="soluciones" className={styles.section}>
      {/* Fondo Grid Sphere */}
      <div className={styles.background}></div>

      <h2 className={styles.sectionTitle}>Portafolio de Soluciones</h2>
      <div className={styles.accordion}>
        {soluciones.map((s, i) => (
          <div
            key={i}
            className={`${styles.item} ${active === i ? styles.active : ""}`}
          >
            <button
              className={styles.header}
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className={styles.title}>
                {s.icon} {s.title}
              </span>
              <span>{active === i ? "✖" : "+"}</span>
            </button>
            <div
              className={styles.content}
              style={{
                maxHeight: active === i ? "1000px" : "0",
              }}
            >
              <div className={styles.inner}>
                {s.content}
                <button
                  className={styles.cotizarBtn}
                  onClick={() => handleCotizar(s.title)}
                >
                  Cotizar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
