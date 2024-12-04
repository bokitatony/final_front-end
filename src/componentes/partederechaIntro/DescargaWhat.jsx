import React from 'react'
import './descargawhasap.css'


const DescargaWhat = () => {
  return (
    <div className="descarga-container">
      <img src="/img/foto_WTS.png" alt="WhatsApp para Windows" className="whatsapp-img" />
      <h2>Descarga WhatsApp para Windows</h2>
      <p>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</p>
      <button>Descargar de Microsoft Store</button>
      <p><i className="bi bi-lock"></i> Tus mensajes personales están cifrados de extremo a extremo.</p>
    </div>
  );
};

export default DescargaWhat;