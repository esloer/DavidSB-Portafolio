import { useState } from "react";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import "../style/cardTrabajos.css";

const datos = [
  { id: 1, titulo: "Instagram", imagen: "instagram", descripcion: "Pequeño proyecto simulando un like en Instagram.", tecnologias: [<FaReact />, <FaCss3Alt />] },
  { id: 2, titulo: "Casas", imagen: "casas", descripcion: "Página de alquilar de viviendas.", tecnologias: [<FaReact />, <FaCss3Alt />] },
  { id: 3, titulo: "Netflix", imagen: "netflix.jpg", descripcion: "Una nueva interfaz para netflix.", tecnologias: [<FaReact />, <FaCss3Alt />] },
  { id: 4, titulo: "Tours", imagen: "tour", descripcion: "Página dedicada para que veas los lugares más emblemáticos del mundo.", tecnologias: [<FaReact />, <FaCss3Alt />] }
];

export const CardTrabajos = () => {
  const [ocultar, setOcultar] = useState(Array(datos.length).fill("ocultar"));

  function cambiar(index) {
    setOcultar(prevState => {
      const newState = [...prevState];
      newState[index] = newState[index] === "ocultar" ? "tecnologias" : "ocultar";
      return newState;
    });
  }

  return (
    <>
      {datos.map((contenido, index) => (
        <div className='card' key={contenido.id} onClick={() => cambiar(index)}>
          <div className={ocultar[index]}>
            <h3> {contenido.titulo} </h3>
            <p>{contenido.descripcion}</p>
            {contenido.tecnologias}
          </div>
        </div>
      ))}
    </>
  );
};
