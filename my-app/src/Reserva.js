import React, { useState } from "react";

const Reserva = () => {
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    personas: "1",
    nombre: "",
    email: "",
    telefono: "",
  });

  const [confirmacion, setConfirmacion] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmacion(true);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Reserva una Mesa</h2>
      {confirmacion ? (
        <div style={{ color: "green", marginTop: "1rem" }}>
          ✅ ¡Gracias! Tu mesa ha sido reservada.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <label>
            Fecha:
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Hora:
            <select
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una hora</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </label>
          <label>
            Número de personas:
            <select
              name="personas"
              value={formData.personas}
              onChange={handleChange}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
          </label>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono (opcional):
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            style={{ background: "#333", color: "#fff", padding: "0.5rem" }}
          >
            Confirmar reserva
          </button>
        </form>
      )}
    </div>
  );
};

export default Reserva;
