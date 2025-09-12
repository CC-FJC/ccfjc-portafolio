"use client";

import { useState } from "react";
import styles from "./Contacto.module.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Consulta enviada:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ nombre: "", email: "", servicio: "", mensaje: "" });
  };

  return (
    <section id="contacto" className={styles.section}>
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
          <button type="submit" className={styles.btn}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
