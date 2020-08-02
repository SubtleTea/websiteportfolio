import React from "react";
import Main from './main';

const About = () => (
    <>
        <Main />;
        <div className="contentbox">
                <h2 className="box-title">Education</h2>
                <p>
                    <p className="resume-name">Hunter College</p>
                    <p className="type">B.A. Computer Science</p>
                    <p className="date">2016-2019</p>
                </p>    
        </div>
        <div className="contentbox">
                <h2 className="box-title">Experience</h2>
                <p>
                    <p className="resume-name">Bozbozboz</p>
                    <p className="type">Application Developer</p>
                    <p className="date">2019 - Present</p>
                    <li>wow i did one thing</li>
                    <li>wow i did one thing</li>
                    <li>wow i did one thing</li>
                    <li>wow i did one thing</li>
                </p>
        </div>
    </>
);

export default About;