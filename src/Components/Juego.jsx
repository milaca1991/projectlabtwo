import React, { useState } from "react";
import preguntas from "./questions";

const Juego = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(false); 
    if (index === preguntas.length - 1) {
      setIndex(0);
    } else {
      setIndex(index+1) ;
    }
  }


  function backClick() {
    setIsFlipped(false); 
    if (index === 0) {
      setIndex(preguntas.length - 1);
    } else {
      setIndex(index - 1) ;
    }


  }

  
function flipCard() {
  setIsFlipped(!isFlipped);
  changeColor(listaPreguntas);

}



  function changeColor(listaPreguntas) {
    let color;

    switch (listaPreguntas.difficulty) {
      case "Low":
        color = "#d3cce3";
        break;

      case "medium":
        color = "#F3F9A7";
        break;

      case "High":
        color = "#FF416C";
        break;

      default:
        color = "#D3CBB8";
    }



    return (
    <div className="styleCard" style={{ backgroundColor: color }} onClick={() => flipCard(listaPreguntas)}>
    {isFlipped ? listaPreguntas.answer : listaPreguntas.question}
    {listaPreguntas.picture ? <img src={listaPreguntas.picture} alt="" className="imgQuestions"/>:<></>}
  </div>)

  }


  let listaPreguntas = preguntas[index];

  return (
    <div>
      <h3>
        Number of cards: ({index + 1} of {preguntas.length})
      </h3>


      {changeColor(listaPreguntas)} 


      <h3>Difficulty: {listaPreguntas.difficulty}</h3>
   
      <button className="button-27" onClick={backClick}>
        {" "}
        back
      </button>
      <button className="button-27" onClick={handleClick}>
        {" "}
        Next
      </button>
    </div>
  );
};

export default Juego;
