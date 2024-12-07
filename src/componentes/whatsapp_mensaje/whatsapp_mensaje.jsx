import React, { useState } from "react";

const Whatsapp_mensajemap = ({ contacto }) => {

  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajes, setMensajes] = useState(contacto.mensajes);


  const agregarMensaje = () => {
    if (nuevoMensaje.trim() === "") return; 
    const mensajeNuevo = {
      id: mensajes.length + 1, 
      emisor: "Yo", 
      texto: nuevoMensaje,
      hora: new Date().toLocaleTimeString(), 
      status: "enviado",
    };

    setMensajes([...mensajes, mensajeNuevo]); 
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
