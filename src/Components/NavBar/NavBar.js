import React, { useState } from "react";
import "./NavBar.css";
import { FaCode, FaAlignJustify } from "react-icons/fa";
import { NavHashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="NavBar">
        <div className="logo">
          <span>
            <Link smooth to="#about" activeClassName="selected">
              <FaCode className="logo-icon" color="#ffc355" size="3.2rem" />
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

// export default function NavBar() {
//   return (
//     <nav className="NavBar" id="navbar">
//       <div className="logo">
//         <span>
//           <Link smooth to="#about">
//             <FaCode className="logo-icon" color="#ffc355" size="3.2rem" />
//           </Link>
//         </span>
//       </div>
//       <ul>
//         <li>
//           <Link smooth to="#about">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link smooth to="#portfolio">
//             Portfolio
//           </Link>
//         </li>
//         <li>
//           <Link smooth to="#skills">
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link smooth to="#contact">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
