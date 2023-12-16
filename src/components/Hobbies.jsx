import React from 'react';
import { FaDog ,  FaMusic , FaDice , FaHiking  } from "react-icons/fa";
import "../style/hobbies.css";


  
  export  const Hobbies = () => {
    return (
      <div>
        <h3 className='titulo'>Mis hobbys</h3> 
        <div className='contenedorGrid'>
                <div>
                    <FaDog/><p>Animales</p>
                </div>
                <div>
                    <FaMusic/> <p>musica</p>
                </div>
                <div>
                    <FaDice/> <p>juegos</p>
                </div>
                <div>
                    <FaHiking/> <p>Senderismo</p>
                </div>
        </div>
      </div>
    );
  };
  

