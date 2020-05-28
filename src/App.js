import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.js";
import About from "./Components/About/About.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Skills from "./Components/Skills/Skills.js";
import Contact from "./Components/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <NavBar />
        <About
          id="about"
        />
        <Portfolio
          id="portfolio"
        />
        <Skills
          id="skills"
        />
        <Contact
          id="contact"
        />
    </div>
  );
}

export default App;
