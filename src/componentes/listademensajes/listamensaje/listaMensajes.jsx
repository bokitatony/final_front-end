import React, { useState } from 'react';
import ListMap from '../listMap';
import contactos from '../../../data/data';
import DescargaWhat from '../../partederechaIntro/DescargaWhat';
import "./listamensaje.css";
import Whatsapp_mensaje from '../../whatsapp_mensaje/whatsapp_mensaje';
import Whatsapp_mensajemap from '../../whatsapp_mensaje/whatsapp_mensaje';


const ListaMensajes = () => {

  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);


  const manejarSeleccionContacto = (id) => {
    const contacto = contactos.find(contacto => contacto.id === id);
    setContactoSeleccionado(contacto);
  };

  return (
    <div className="conatiner_cntenido1">
      {/* Lista de contactos */}
      <ListMap contactos={contactos} onContactoSeleccionado={manejarSeleccionContacto} />
      
      <div className="color_white">
        {/* Si hay un contacto seleccionado, mostramos los mensajes */}
        {contactoSeleccionado ? (
          <Whatsapp_mensajemap contacto={contactoSeleccionado} />
        ) : (
          <DescargaWhat /> // Si no hay contacto seleccionado, mostramos el componente de descarga
        )}
      </div>
    </div>
  );
};

export default ListaMensajes;