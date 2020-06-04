import React, { useState, useEffect } from "react";
import Division from "../Division/Division.js";
import Project from "../Project/Project.js";
import ProjectData from "../Portfolio/Projects-data.js";

export default function Portfolio({ id, match }) {
  const [project, setProject] = useState({});
  useEffect(() => {
    let projectSelected = ProjectData().filter(
      (project) => project.id === parseInt(match.params.idProject)
    );
    setProject(projectSelected[0]);
    console.log(projectSelected[0].technologies)
  }, []);
  return (
    <div className="Portfolio" id={id}>
      <h2 className="heading">{project.title}</h2>
      <Division />
      <div className="container">
        <img src={project.img} width="200" />
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <br />
        <p>Link website</p> <p>Link github</p>
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

// technologies: [Html, Css, JavaScript, React, Nodejs, Express],
// url: "https://kodflix-ess.herokuapp.com/",
// github: "https://github.com/elenasacristan/kodflix",
// img: Kodflix,
