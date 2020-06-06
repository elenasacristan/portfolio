import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./logo.svg";
import {  FaAlignJustify } from "react-icons/fa";
import { NavHashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="NavBar">
      <div className="logo">
        <span>
          <Link smooth to="#about" activeClassName="selected">
            <img src={Logo} alt="logo" />
          </Link>
        </span>
      </div>
      <div className="NavBar-continer-button-menu">
        <button className="NavBar-button" onClick={() => setIsOpen(!isOpen)}>
          <FaAlignJustify className="hamburger" />
        </button>
        <div className={`NavBar-box ${isOpen ? "is-open" : ""}`}>
          <Link smooth to="#about">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              About
            </div>
          </Link>
          <Link smooth to="#portfolio">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Portfolio
            </div>
          </Link>
          <Link smooth to="#skills">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Skills
            </div>
          </Link>
          <Link smooth to="#contact">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
