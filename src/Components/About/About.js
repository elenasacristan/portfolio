import React from "react";
import profile from "../../images/profile.jpg";
import "./About.css";
import Division from "../Division/Division.js"

export default function About() {
  return (
    <main className="About">
      <div className="About-container">
        <div className="About-profile">
          <img src={profile} alt="profile" />
        </div>
        <div className="About-title">
          <h1>
            Hi! I'm <span className="capital">Elena Sacristan</span>
          </h1>
          <Division/>
          <h3>Full-Stack Software Developer</h3>
        </div>
      </div>
      <div className="About-me">
        <h4>A bit about me...</h4>
        <p>
          After 10 years in technical roles within the Market Research Industry,
          I am now looking for a career change where I can follow my passion for
          web development.
        </p>
        <p>
          I have recently received my First Class Honours Diploma in Software
          Development with Code Institute. During the course I specialised in
          HTML, CSS, JavaScript and Python, using Django and Flask frameworks.
        </p>
        <p>
          Whilst getting more involved in the Web Development community I have
          realised the importance of learning about React, Nodejs, Express and
          Agile so I am now taking part in a Bootcamp at Kodiri to develop my
          skills in these technologies. This Bootcamp will finish on the 26th
          June and I can't wait to start using everything I have learnt in my
          next role.
        </p>
      </div>
    </main>
  );
}
