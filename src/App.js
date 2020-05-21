import React from "react";
import "./App.css";
import "./Components/NavBar/NavBar.js";
import NavBar from "./Components/NavBar/NavBar.js";
import About from "./Components/About/About.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Skills from "./Components/Skills/Skills.js";
import Contact from "./Components/Contact/Contact.js";
import Download from "./Components/Download/Download.js";


function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Download/>
    </div>
  );
}

export default App;
