import React from 'react';
import "../style/tabla.css";

const datos = [
    { id: 1, titulo:"Cumpleaños" , nombre: '08/02/1986' },
    { id: 2, titulo:"Teléfono" ,nombre: '+34556774326' },
    { id: 3, titulo:"Email" ,nombre: 'DS@diseñoStyle.com' },
    { id: 4, titulo:"Website" ,nombre: 'www.example.com' },
    { id: 5, titulo:"direccion" ,nombre: 'Mallorca' },
  ];
  
  export  const Tabla = () => {
    return (
      <div>
        <h3 className='titulo'>Datos personales</h3>
        <table className="tabla">
            <thead>
            <tr>
                <th>INFO</th>
                <th>RESPUESTA</th>
            </tr>
            </thead>
            <tbody>
            {datos.map((fila) => (
                <tr key={fila.id}>
                <td>{fila.titulo}</td>
                <td>{fila.nombre}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
  };
  

