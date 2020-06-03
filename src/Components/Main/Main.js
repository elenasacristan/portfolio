import React from "react";
import NavBar from "../NavBar/NavBar.js";
import About from "../About/About.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Skills from "../Skills/Skills.js";
import Contact from "../Contact/Contact.js";

export default function Main() {
  return (
    <>
      <NavBar />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Contact id="contact" />
    </>
  );
}
