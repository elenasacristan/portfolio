import React from "react";
import "./Skill.css";

export default function Skill(prop) {
  return (
    <li className="Skill">
      <div>
        <h4>{prop.name}</h4>
      </div>
      <div>
        <img src={prop.img} alt={prop.name} />
      </div>
      
    </li>
  );
}
