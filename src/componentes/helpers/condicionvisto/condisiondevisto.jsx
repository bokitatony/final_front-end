import React from 'react';
import './condicionvis.css';  // Asegúrate de que el archivo CSS esté bien vinculado

const StatusIcon = ({ status }) => {
  // Lógica de la condición
  if (status === 'no-recibido') {
    return <i className="bi bi-check-lg no-recibido"></i>;  // Clase personalizada
  } else if (status === 'visto') {
    return <i className="bi bi-check-all visto"></i>;  // Clase personalizada
  } else if (status === 'no-visto') {
    return <i className="bi bi-check-all no-visto"></i>;  // Clase personalizada
  }
  return null;
};

export default StatusIcon;
