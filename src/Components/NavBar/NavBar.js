import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="logo">
        <span>REPLACE with LOGO</span>
      </div>
      {/* <Router> */}
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
          <li>
            <Link to="/Download">Download my CV</Link>
          </li>
        </ul>
      {/* </Router> */}
    </nav>
  );
}
