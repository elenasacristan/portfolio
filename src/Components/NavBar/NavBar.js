import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./logo.svg";
import { FaCode, FaAlignJustify } from "react-icons/fa";
import { NavHashLink as Link } from "react-router-hash-link";

import { GiPuzzle } from "react-icons/gi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="NavBar">
        <div className="logo">
          <span>
            <Link smooth to="#about" activeClassName="selected">
              {/* <GiPuzzle className="logo-icon" color="#ffc355" size="3.2rem" /> */}
              <img src={Logo} alt="logo"/>
            </Link>
          </span>
        </div>
        <div className="NavBar-continer-button-menu">
          <button className="NavBar-button" onClick={() => setIsOpen(!isOpen)}>
            <FaAlignJustify className="hamburger" />
          </button>
          <div className={`NavBar-box ${isOpen ? "is-open" : ""}`}>
            <div className="NavBar-box-link" onClick={() =>setIsOpen(false)}>
              <Link smooth to="#about">
                About
              </Link>
            </div>
            <div className="NavBar-box-link" onClick={() =>setIsOpen(false)}>
              <Link smooth to="#portfolio">
                Portfolio
              </Link>
            </div>
            <div className="NavBar-box-link" onClick={() =>setIsOpen(false)}>
              <Link smooth to="#skills">
                Skills
              </Link>
            </div>
            <div className="NavBar-box-link" onClick={() =>setIsOpen(false)}>
              <Link smooth to="#contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}