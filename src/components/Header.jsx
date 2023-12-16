// Header.jsx
import React from 'react';
import { FaUser, FaHome, FaFile ,FaNewspaper } from 'react-icons/fa';
import { BiSolidContact } from "react-icons/bi";

import "../style/header.css";

const A = ({ link, nombre, icono, onClick }) => {
  const handleClick = () => {
    onClick(link);
  };

  // Agrega un atributo href con un valor válido
  const href = `#${link}`;

  return (
    <a href={href} onClick={handleClick}>
      {icono} {nombre}
    </a>
  );
};

export const Header = ({ onLinkClick }) => {
  return (
    <header>
      <img src="./assets/img/logo.jpg" alt="" />
      <nav>
        <A link="inicio" icono={<FaHome />} nombre="Inicio" onClick={onLinkClick} />
        <A link="sobremi" icono={<FaUser />} nombre="Sobre mi" onClick={onLinkClick} />
        <A link="trabajos" icono={<FaFile />} nombre="Trabajos" onClick={onLinkClick} />
        <A link="contacto" icono={<BiSolidContact />} nombre="Contacto" onClick={onLinkClick} />
        <A link="news" icono={<FaNewspaper />} nombre="news" onClick={onLinkClick} />
      </nav>
    </header>
  );
};
