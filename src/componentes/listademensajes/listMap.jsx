import React from "react";
import LisHTML from "./listashtml/lisHTML";

const ListMap = ({ contactos, onContactoSeleccionado }) => {
  return (
    <div>
      {contactos.map(contacto => (
        <LisHTML
          key={contacto.id}
          nombre={contacto.nombre}
          mensajes={contacto.mensajes}
          avatar={contacto.avatar}
          id={contacto.id}
          onSeleccionar={() => onContactoSeleccionado(contacto.id)} // Agregamos la función de selección
        />
      ))}
    </div>
  );
};

export default ListMap;
