import React from "react";
import WhatsApp from "./screm/whatsapp/whatsapp";
import { Route, Routes } from "react-router-dom";
import Whatsapp_mensaje from "./componentes/whatsapp_mensjes/listaMensaje/listaMensaje2";







function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WhatsApp/>}/>
        <Route path="/workspace/:workspace_id" element={<Whatsapp_mensaje />} />
      </Routes>


    </div>
  );
}

export default App;
