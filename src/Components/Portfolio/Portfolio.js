import React, { useEffect } from "react";
import "./Portfolio.css";
import Division from "../Division/Division.js";
import Project from "../Project/Project.js";
import ProjectData from "./Projects-data.js";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Portfolio({ id }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Portfolio" id={id}>
      <h2 className="heading">Portfolio</h2>
      <Division />
      <div className="container" >
        {ProjectData().map((project) => (
          <div data-aos="flip-right" className="wrapper-animation">
          <Project
            key={project.id}
            img={project.img}
            title={project.title}
            technologies={project.technologies}
          />
          </div>
        ))}
      </div>
    </div>
  );
}
