import React from "react";
import img1 from "../../assets/images/me22.jpg";


export default function About() {
    return (



        <div className='aboutme'>


            <div className="aboutmeinfo-float-right ">
                <h1 style={{ color: "#bde0fe" }}> About Me</h1>
                <p style={{ color: "#bde0fe" }}>
                    Welcome to my portfolio. My name is Karen. I am interested in web developement and want to create cool and in unique websites.
                    I am enrolled in the university of richmond coding bootcamp.
                </p>
            </div>
            <div className="aboutmepic">

                <img src={img1} alt="2 women in birthday hats" />

            </div>
        </div>
    )
}