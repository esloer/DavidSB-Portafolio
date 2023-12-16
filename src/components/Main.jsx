// Main.jsx
import React from 'react';
import "../style/main.css";
import { Presentacion } from "./Presentacion";
import { SobreMi } from "./SobreMi";
import { Contacto } from "./Contacto";
import { Trabajos } from "./Trabajos";
import { News } from './news';

export const Main = ({ currentSection }) => {
  return (
    <main>
      {currentSection === 'inicio' && <Presentacion />}
      {currentSection === 'sobremi' && <SobreMi />}
      {currentSection === 'trabajos' && <Trabajos/>}
      {currentSection === 'contacto' && <Contacto />}
      {currentSection === 'news' && <News />}
    </main>
  );
};
