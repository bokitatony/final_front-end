import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Para navegar y obtener el id
import contactos from "../../../data/data"; // O donde tengas los datos
import ListaMensajes from "../../listademensajes/listamensaje/listaMensajes";


const Whatsapp_mensaje = () => {
  const { workspace_id } = useParams(); // Extraemos el id del contacto de la URL
  const navigate = useNavigate(); // Para navegar entre rutas

  // Buscar el contacto por id
  const contacto = contactos.find((contacto) => contacto.id === parseInt(workspace_id));

  // Si no encontramos el contacto, redirigimos a la página principal
  if (!contacto) {
    navigate("/"); // Redirige si no existe el contacto
    return null;
  }

  return (
    <div className="conatiner_cntenido1">
      {/* Lista de contactos */}
      <ListaMensajes /> {/* La lista de contactos sigue siendo visible */}
      
      <div className="color_white">
        {/* Mostramos el chat del contacto seleccionado */}
        <div className="mensaje-container">
          <h2>Mensajes de {contacto.nombre}</h2>
          <div>
            {contacto.mensajes.map((mensaje) => (
              <div key={mensaje.id}>
                <p><strong>{mensaje.emisor}:</strong> {mensaje.texto}</p>
                <p><i>{mensaje.hora}</i> - <span>{mensaje.status}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp_mensaje;