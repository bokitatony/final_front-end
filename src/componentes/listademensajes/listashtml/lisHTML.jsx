import React from 'react';
import StatusIcon from '../../helpers/condicionvisto/condisiondevisto'; 
import './LisHTML.css';

const LisHTML = ({ mensajes, avatar, nombre, id }) => {
  return (
    <div className="workspace-item">
      <div className="container_contactos"> 
        <img src={avatar} alt="" />

        <div className="texto_mensaje">
          <h2>{nombre}</h2>
          {mensajes.length > 0 && (
            <div className="texto_inferior" key={mensajes[mensajes.length - 1].id}>
              <div className="mensaje_info">
                <StatusIcon status={mensajes[mensajes.length - 1].status} />
                <p>{mensajes[mensajes.length - 1].texto}</p>
              </div>
              <i className="hora">{mensajes[mensajes.length - 1].hora}</i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LisHTML;
