import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="Project">
      <div className="overlay">
        <h4>{props.title}</h4>
        <button>See more</button>
        <div>
          {props.technologies.map((technology) => (
            <img
              key={technology}
              className="technologies"
              src={technology}
              alt=""
            />
          ))}
        </div>
      </div>
      <img className="project-image" src={props.img} alt="" />
    </div>
  );
}
