import React from "react";
import "./Portfolio.css";
import Division from "../Division/Division.js";
import Project from "../Project/Project.js";
import ProjectData from "./Projects-data.js";

export default function Portfolio({id}) {
  return (
    <div className="Portfolio" id={id}>
      <h2 className="heading">Portfolio</h2>
      <Division />
      <div className="container">
        {ProjectData().map((project) => (
          <Project
            key={project.id}
            img={project.img}
            title={project.title}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
