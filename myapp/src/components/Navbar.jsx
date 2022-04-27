import React from "react";
// import myLogo from "myapp\src\assets\images\kr logo.png";
// import { FaBars, FaTimes } from 'react-icons';

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" href="home"><img src="{logo}" alt="logo"  ></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="Home">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="aboutme"> About Me</a>
      </li>
     <li className="nav-item"> 
      <a className="nav-link" href="contact"> Contact</a>
     </li>
     <li className="nav-item"> 
      <a className="nav-link" href="resume"> Resume </a>
     </li>
    </ul>
    </div>
</nav>
)
}

export default Navbar