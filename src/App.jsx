import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Juego from "./Components/Juego";
import preguntas from "./Components/questions";

function App() {
  return (
    <div className="App">
      <h1>Familiar game</h1>
      <h3>Let's test your knowledge in pronoun</h3>
      <Juego></Juego>
    </div>  
  );
}

export default App;
