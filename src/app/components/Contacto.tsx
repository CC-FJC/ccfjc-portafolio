"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Contacto.module.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Mensaje enviado con éxito. Te contactaremos pronto.");
        setFormData({ nombre: "", email: "", servicio: "", mensaje: "" });
      } else {
        setStatus("❌ Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Escuchamos los clics en "Cotizar" del acordeón con tipado seguro
  useEffect(() => {
    const listener = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setFormData((prev) => ({ ...prev, servicio: customEvent.detail }));
    };

    document.addEventListener("cotizarServicio", listener as EventListener);
    return () =>
      document.removeEventListener("cotizarServicio", listener as EventListener);
  }, []);

  return (
    <section id="contacto" className={styles.section} data-axis="09" data-sheet>
      <div className={styles.background}></div>
      <h2 className={styles.sectionTitle}>Contacto</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Centro de Ciencia Francisco José de Caldas</h3>
          <p className={styles.contactRow}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>
              <strong>Ubicación:</strong> Carrera 28D entre, Cl. 66 #y 67<br />
              Manizales, Colombia
            </span>
          </p>
          <p className={styles.contactRow}>
            <FaEnvelope className={styles.icon} />
            <span>
              <strong>Email:</strong> centrodeciencia@ucaldas.edu.co
            </span>
          </p>
          <p className={styles.contactRow}>
            <FaPhone className={styles.icon} />
            <span>
              <strong>Teléfono:</strong> +57 333 2823909
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.formTitle}>
            Escríbenos para consultar y cotizar servicios
          </h3>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            id="servicio-a-consultar"
            type="text"
            name="servicio"
            placeholder="Servicio a consultar"
            value={formData.servicio}
            onChange={handleChange}
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
