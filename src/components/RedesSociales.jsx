import React from 'react';
import { FaFacebook , FaInstagram , FaTwitterSquare} from "react-icons/fa";
import "../style/redessociales.css";

export const RedesSociales = () => {
  return (
    <div className="redes">
        <p>También me puedes contactar por mis <br /> <span>REDES SOCIALES</span>.</p>
        <div className="facebook">
            <FaFacebook/>
        </div>
        <div className="instagram">
            <FaInstagram/>
        </div>
        <div className="tuiter">
            <FaTwitterSquare/>
        </div>
    </div>
  );
};
