import React from "react";
import "./NavBar.css";
import { FaCode } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <nav className="NavBar" id="navbar">
      <div className="logo">
        <span>
          <Link to="about" smooth={true} offset={-60} duration={600}>
            <FaCode className="logo-icon" color="#ffc355" size="3.2rem" />
          </Link>
        </span>
      </div>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
