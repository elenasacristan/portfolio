import React from "react";
import "./NavBar.css";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="logo">
        <span>
          <Link to="/">
            <FaCode className="logo-icon" color="#ffc355" size="3.2rem" />
          </Link>
        </span>
      </div>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
