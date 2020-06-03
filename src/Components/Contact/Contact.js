import React from "react";
import { FaLinkedinIn, FaRegEnvelope, FaGithub } from "react-icons/fa";
import Division from "../Division/Division.js";
import "./Contact.css";

export default function Contact({ id }) {
  return (
    <div className="Contact" id={id}>
      <h2 className="heading">Let's connect!</h2>
      <Division />
      <div className="container" target="_blank" rel="noopener noreferrer">
        <a href="https://www.linkedin.com/in/elena-sacristan-sacristan/">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="mailto:elena_sacristan@yahoo.com" target="_blank" rel="noopener noreferrer">

          <FaRegEnvelope className="icon email" size="5rem"/>
        </a>
        <a href="https://github.com/elenasacristan" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
}
