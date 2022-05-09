import React from "react";
// import myLogo from "myapp\src\assets\images\kr logo.png";
// import { FaBars, FaTimes } from 'react-icons';
import {FontAwesomeIcon, fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Logo from "../assets/images/kr logo.png";


const Navbar = ( {currentPage, handlePageChange}) => {
  return (
   
    
    <ul className="navbar navbar-expand-lg nav-tabs customNav ">
      
       <div className="titlename" >
       <h1> Karen Richardson </h1>
       </div>
    <li className="nav-item">
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        About
      </a>
    </li>

   
    <li className="nav-item">
      <a
        href="#Projects"
        onClick={() => handlePageChange('Projects')}
        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
      >
        Projects
      </a>
    </li>
    <li className="nav-item">
      <a
      href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
        Resume
      </a>

    </li>
    <li className="nav-item">
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </a>
    </li>
  </ul>
);


  }
export default Navbar;