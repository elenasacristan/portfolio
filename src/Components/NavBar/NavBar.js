import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="logo">
        <span>REPLACE with LOGO</span>
      </div>
      <ul>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Download my CV</li>
      </ul>
    </nav>
  );
}
