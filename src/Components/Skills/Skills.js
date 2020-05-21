import React from "react";
import "./Skills.css";
import Division from "../Division/Division.js";
import Skill from "../Skill/Skill.js";
import SkillsData from "./Skills-data.js";

export default function Skills() {
  return (
    <div className="Skills">
      <h2 className="heading">Skills</h2>
      <Division />
      <div className="container">
          {SkillsData().map((skill) => (
            <Skill key={skill.id} name={skill.name} img={skill.img} />
          ))}
      </div>
    </div>
  );
}
