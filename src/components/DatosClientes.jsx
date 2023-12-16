import React from 'react';
import { FaUser , FaPhoneAlt , FaEnvelope , FaAt  , FaPaperPlane } from "react-icons/fa";
import "../style/datosClientes.css";

export const DatosClientes = () => {
  return (
    <div className="solicitud">
      <input type="text" placeholder="Tú nombre" /><FaUser className='fa-user'/>
      <input type="text" placeholder="Número de móvil" /><FaPhoneAlt  className='fa-phone'/>
      <input type="text" placeholder="Correo electrónico" /><FaAt  className='fa-at'/>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Mensaje"
      /><FaEnvelope className='fa-envelope'/> <button>Enviar</button><FaPaperPlane className='fa-paper-plane'/>
    </div>
  );
};
