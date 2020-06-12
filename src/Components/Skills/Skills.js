import React, { useEffect } from "react";
import "./Skills.css";
import Division from "../Division/Division.js";
import Skill from "../Skill/Skill.js";
import SkillsData from "./Skills-data.js";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills({ id }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Skills" id={id}>
      <h2 className="heading">Skills</h2>
      <Division />
      <div className="categories-container">
        <div className="container" data-aos="fade-up">
          <h3>Front End</h3>
          <div className="container-skills">
            {SkillsData()
              .filter((skill) => skill.type === "front")
              .map((skill) => (
                <Skill key={skill.id} name={skill.name} img={skill.img} />
              ))}
          </div>
        </div>

        <div className="container" data-aos="fade-up">
          <h3>Back End & Databases</h3>
          <div className="container-skills">
            {SkillsData()
              .filter((skill) => skill.type === "back")
              .map((skill) => (
                <Skill key={skill.id} name={skill.name} img={skill.img} />
              ))}
          </div>
        </div>

        <div className="container" data-aos="fade-up">
          <h3>Other technologies</h3>
          <div className="container-skills">
            {SkillsData()
              .filter((skill) => skill.type === "other")
              .map((skill) => (
                <Skill key={skill.id} name={skill.name} img={skill.img} />
              ))}
          </div>
        </div>

        <div className="container" data-aos="fade-up">
          <h3>Languages</h3>
          <div className="container-skills">
            {SkillsData()
              .filter((skill) => skill.type === "lan")
              .map((skill) => (
                <Skill key={skill.id} name={skill.name} img={skill.img} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
