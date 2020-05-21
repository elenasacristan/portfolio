import React from "react";
import project from "../../images/project.png";
import "./Portfolio.css";
import Division from "../Division/Division.js";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h2 className="heading">Portfolio</h2>
      <Division />
      <div className="container">
        <div className="project">
          <img src={project} alt="" />
        </div>
        <div className="project">
          <img src={project} alt="" />
        </div>
        <div className="project">
          <img src={project} alt="" />
        </div>
        <div className="project">
          <img src={project} alt="" />
        </div>
      </div>
    </div>
  );
}
