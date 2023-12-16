// App.js
import React, { useState } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');

  const handleLinkClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <Header onLinkClick={handleLinkClick} />
      <Main currentSection={currentSection} />
      <Footer />
    </>
  );
}

export default App;
