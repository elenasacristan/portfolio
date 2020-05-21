import React from "react";
import "./App.css";
import "./Components/NavBar/NavBar.js";
import NavBar from "./Components/NavBar/NavBar.js";
import About from "./Components/About/About.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
    </div>
  );
}

export default App;
