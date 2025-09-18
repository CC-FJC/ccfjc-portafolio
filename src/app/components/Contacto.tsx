"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

  // 🔹 Escuchamos los clics en "Cotizar" del acordeón
  useEffect(() => {
    const listener = (e: any) => {
      setFormData((prev) => ({ ...prev, servicio: e.detail }));
    };
    document.addEventListener("cotizarServicio", listener);
    return () => document.removeEventListener("cotizarServicio", listener);
  }, []);

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.background}></div>
      <h2 className={styles.sectionTitle}>Contacto</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Centro de Ciencia Francisco José de Caldas</h3>
          <p>
            Carrera 28D entre, Cl. 66 #y 67<br />
            Manizales, Colombia
          </p>
          <p>
            <strong>Email:</strong> centrodeciencia@ucaldas.edu.co
          </p>
          <p>
            <strong>Teléfono:</strong> +57 333 2823909
          </p>
          <div className={styles.logoContainer}>
            <Image
              src="/Logo CCFJC + VPU + UCaldas.png"
              alt="Logo Centro de Ciencia"
              width={180}
              height={180}
              priority
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
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
