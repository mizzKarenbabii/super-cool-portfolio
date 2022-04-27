import React from "react";

import { FaBars, FaTimes } from 'react-icons';

const Navbar = () => {
    return (
        <div className="text w-full h-[80px] flex justify-between items-center px-4 bg-[#219ebc] text-gray-300">
            {/* menu */}
            
                <ul className="hidden md:flex" >
                <li> About Me</li>
                <li> Projects</li>
                <li> Resume</li>
                <li> Contact </li>
                <li> Home</li>
                </ul>
            

            {/* hamburger menu */}
            <div className="hidden">
                {/* <FaBars /> */}
            </div>

            <div>
                <ul >
                <li> About Me</li>
                <li> Projects</li>
                <li> Resume</li>
                <li> Contact </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar