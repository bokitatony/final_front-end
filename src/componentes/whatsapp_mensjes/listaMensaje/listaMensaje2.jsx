import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import contactos from "../../../data/data"; 
import ListaMensajes from "../../listademensajes/listamensaje/listaMensajes";


const Whatsapp_mensaje = () => {
  const { workspace_id } = useParams(); 
  const navigate = useNavigate(); 


  const contacto = contactos.find((contacto) => contacto.id === parseInt(workspace_id));


  if (!contacto) {
    navigate("/");
    return null;
  }

  return (
    <div className="conatiner_cntenido1">

      <ListaMensajes /> 
      
      <div className="color_white">
  
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