import React, { useState } from "react";
import preguntas from "./questions";

const Juego = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
      if (index === preguntas.length -1) {

  setIndex(0);}
  else{
    setIndex(index + 1);
  }
}
function backClick() {
  if (index === 0) {
    setIndex(preguntas.length - 1);
  } else {
    setIndex(index - 1);
  }
}
  let listaPreguntas = preguntas[index];

  return (
    <div>
      <h3>
        number of cards: ({index + 1} of {preguntas.length})
      </h3>
      <div className="styleCard"onClick={() => setIsFlipped(!isFlipped)}>
        <h2 >
        {isFlipped ? listaPreguntas.answer : listaPreguntas.question}
        </h2>
      </div>
      <h3>{listaPreguntas.difficulty}</h3>
      <button onClick={backClick}> back</button>
      <button onClick={handleClick}> Next</button>
    </div>
  );
};

export default Juego;