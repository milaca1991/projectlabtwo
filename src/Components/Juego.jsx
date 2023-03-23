import React from "react";
import preguntas from "./questions";
import { useState } from 'react';

const Juego = () => {
  //funciona que inicializa el array en 0


    const [index, setIndex] = useState(0);
    

    function handleClick  ()  {
      setIndex(index+1) ;
    };
  

  let listaPreguntas = preguntas[index];

  return (
    <div>
      <h2>{listaPreguntas.question}</h2>
      <h3>{listaPreguntas.difficulty}</h3>
      <button onClick={handleClick}> Next</button>
    </div>
  );
};

export default Juego;
