import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Juego from "./Components/Juego";
import preguntas from "./Components/questions";

function App() {
  return (
    <div className="App">
      <h1>English flashcards game</h1>
      <h3>Let's test your knowledge in verb tenses</h3>
      <h3>You'll have to guess the correct verb tense for each question</h3>
      <Juego></Juego>
    </div>  
  );
}

export default App;
