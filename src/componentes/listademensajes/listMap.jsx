// ListMap.js
import React from "react";
import LisHTML from "./listashtml/lisHTML";


const ListMap = ({ contactos }) => {
  return (
    <div>
      {contactos.map(contacto => (
        <LisHTML
          key={contacto.id} // Es importante que tengas una key única
          nombre={contacto.nombre}
          mensajes={contacto.mensajes} // Asegúrate de pasar mensajes
          avatar={contacto.avatar}
          id={contacto.id}
        />
      ))}
    </div>
  );
};

export default ListMap;
