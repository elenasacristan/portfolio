import React, { useState, useEffect } from "react";
import Division from "../Division/Division.js";
import ProjectData from "../Portfolio/Projects-data.js";
import "./Details.css";
import { FaRegEye, FaGithub } from "react-icons/fa";

export default function Details({ match }) {
  const [project, setProject] = useState({});
  useEffect(() => {
    let projectSelected = ProjectData().filter(
      (project) => project.id === parseInt(match.params.idProject)
    );
    setProject(projectSelected[0]);
    console.log(projectSelected[0].technologies);
  }, []);
  return (
    <div className="Details">
      <h2 className="heading">{project.title}</h2>
      <Division />
      <div className="Details-container">
        <div className="Details-image">
          <img src={project.img} width="200" />
        </div>
        <div className="Details-body">
          <div className="Description">
            {project.description}
          </div>
          <div className="Details-icons-container">
            <FaRegEye className="icon" />
            <FaGithub className="icon" />
          </div>
        </div>
        <div>
          {/* {project.technologies.map((technology) => (
            <img
              key={technology}
              className="technologies"
              src={technology}
              alt=""
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}
