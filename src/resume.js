import React from "react";
import Main from './main';
import ResumeContainer from './components/resumecontainer';

const Resume = () => (
    <>
        <Main />;
        <div className="title-box">
                <h2 className="box-title">Resume</h2>
                <p>This is a resume section with something in it</p>    
        </div>
        <div className="contentbox" id="education">
                <h2 className="box-title">Education</h2>
                <p>
                    <p className="resume-name">Hunter College</p>
                    <p className="type">B.A. Computer Science</p>
                    <p className="date">2016-2019</p>
                </p>    
        </div>
        <div className="contentbox" id="experience">
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
                <p>
                    <p className="resume-name">Another Place</p>
                    <p className="type">intern</p>
                    <p className="date">2019 - Present</p>
                    <li>wow i did one thing</li>
                    <li>wow i did one thing</li>
                    <li>wow i did one thing</li>
                    <li>wow i did one thing</li>
                </p>
        </div>
        <div className="contentbox" id="skills">
                <h2 className="box-title">Skills</h2>
        </div>
        <div className="contentbox" id="certifications">
                <h2 className="box-title">Certifications</h2>
        </div>
    </>
);

export default Resume;