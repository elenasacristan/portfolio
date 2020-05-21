import React from "react";
import profile from "../../images/profile.jpg";
import "./About.css";
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <main className="About">
      <div className="container">
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <div className="title">
          <h1>Hi! I'm Elena Sacristan</h1>
          <div className="division">
            <div className="line"></div>
            <FaStar className="icon" color="#ffc355" size="3rem" />
            <div className="line"></div>
          </div>
          <h3>Full-Stack Software Developer</h3>
        </div>
      </div>
    </main>
  );
}
