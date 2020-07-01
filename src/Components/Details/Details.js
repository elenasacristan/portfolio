import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import Division from "../Division/Division.js";
import ProjectData from "../Portfolio/Projects-data.js";
import "./Details.css";
import { FaRegEye, FaGithub, FaArrowAltCircleLeft } from "react-icons/fa";
import { NavHashLink as Link } from "react-router-hash-link";

function initializeAnalytics(project) {
  ReactGA.initialize("UA-171425151-1", {gaOptions: {
    siteSpeedSampleRate: 100
  }});
  ReactGA.pageview('/' + project)
}


export default function Details({ match }) {
  const [project, setProject] = useState({});
  const [text, setText] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  initializeAnalytics(match.params.idProject);

  useEffect(() => {
    let projectSelected = ProjectData().filter(
      (project) => project.title === match.params.idProject
    );
    setProject(projectSelected[0]);
    setText(projectSelected[0].description.split("(newline)"));
    setTechnologies(projectSelected[0].technologies);
  }, [match.params.idProject]);
  return (
    <div className="Details">
      <h2 className="heading">{project.title}</h2>
      <Division />
      <div className="Details-technologies-container">
        <div>
          {technologies.map((technology) => (
            <img
              key={technology}
              className="technologies"
              src={technology}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="Details-container">
        <div className="Details-image">
          <img src={project.img} alt={project.name} width="200" />
        </div>
        <div className="Details-body">
          <div className="Description">
            {text.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="Details-icons-container">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <FaRegEye className="icon" />{" "}
            </a>

            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
      <Link className="back-button" to="/#portfolio">
        <FaArrowAltCircleLeft className="icon" /> See all projects
      </Link>
    </div>
  );
}
