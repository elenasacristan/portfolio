import React from "react";
import "./NavBar.css";
import { FaCode } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  return (
    <nav className="NavBar" id="navbar">
      <div className="logo">
        <span>
          <Link smooth to="#about">
            <FaCode className="logo-icon" color="#ffc355" size="3.2rem" />
          </Link>
        </span>
      </div>
      <ul>
        <li>
          <Link smooth to="#about">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="#portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link smooth to="#skills">
            Skills
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
