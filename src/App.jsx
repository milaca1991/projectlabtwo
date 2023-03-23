import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Juego from "./Components/Juego";

function App() {
  return (
    <div className="App">
      <h1>Familiar game</h1>
      <h3>Let's test your knowledge in pronoun</h3>
      <h2>Number of cards:</h2>

      <Juego></Juego>
    </div>  
  );
}

export default App;
