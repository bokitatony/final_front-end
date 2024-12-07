import React, { useState } from "react";

const Whatsapp_mensajemap = ({ contacto }) => {
  // Estado para manejar el input del mensaje y la lista de mensajes
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajes, setMensajes] = useState(contacto.mensajes);

  // Función para agregar el mensaje al chat
  const agregarMensaje = () => {
    if (nuevoMensaje.trim() === "") return; // Validar que no sea vacío

    const mensajeNuevo = {
      id: mensajes.length + 1, // Generar un ID único
      emisor: "Yo", // O el nombre del usuario actual
      texto: nuevoMensaje,
      hora: new Date().toLocaleTimeString(), // Hora actual
      status: "enviado",
    };

    setMensajes([...mensajes, mensajeNuevo]); // Agregar al array
    setNuevoMensaje(""); // Limpiar el input
  };

  return (
    <div className="mensaje-container">
      <h2>Mensajes de {contacto.nombre}</h2>
      <div>
        {mensajes.map((mensaje) => (
          <div key={mensaje.id}>
            <p>
              <strong>{mensaje.emisor}:</strong> {mensaje.texto}
            </p>
            <p>
              <i>{mensaje.hora}</i> - <span>{mensaje.status}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Input y botón para agregar mensajes */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)} // Actualizar el input
          onKeyDown={(e) => e.key === "Enter" && agregarMensaje()} // Enviar con Enter
        />
        <button onClick={agregarMensaje}>Enviar</button>
      </div>
    </div>
  );
};

export default Whatsapp_mensajemap;
