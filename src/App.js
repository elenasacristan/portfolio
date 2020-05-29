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
      <About id="about" />
      <div data-aos="fade-right">
        <Portfolio id="portfolio" />
      </div>
      <Skills id="skills" />
      <div data-aos="fade-left">
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
