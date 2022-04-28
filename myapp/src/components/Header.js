import React from "react";
import background from "../assets/images/cb479679965428ec22e87e97f810f75f.jpg";
import '../App.css';


function Header() {
  return (
    <div className='header-wrapper' style={{backgroundImage: `url(${background})`}}>
        <div className='main-info'> 
        <h1> web developement boo </h1>
        <h1> hey </h1>
        </div>
    </div>
  )
}

export default Header;