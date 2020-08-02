import React from "react";
import Main from './main';
import KiddyKode from './kiddykode.png';
import KiddyKodeGif from './kiddykodegif.gif';

import Collaborate from './collaborate.png';

const Projects = () => (
    <>
        <Main />;
        <div className="title-box">
                <h2 className="box-title">Projects</h2>
                <p>This is a repository for the projects I am able to get pictures of</p>
        </div>
        <div className="contentbox">
                <h2 className="box-title">Hunter Collaborate</h2>
                <p className="date"><a href="https://github.com/HunterCollab/Core_CollabService">Back End</a></p>
                <p className="date"><a href="https://github.com/SubtleTea/Core_Web">Front End (Web)</a></p>
                <p className="date"><a href="https://github.com/SubtleTea/Core_Android">Front End (Android)</a></p>
                <img src={Collaborate} alt="" />
                <p className="projects-description">Education-based social media platform meant to highlight user skills and encourage users to form collaborations to make projects to enhance their portfolios.</p>
                <p>Python, Flask, JavaScript, TypeScript, Angular, HTML, CSS, Java</p>
        </div>
        <div className="contentbox">
                <h2 className="box-title">KiddyKode</h2>
                <img src={KiddyKodeGif} alt="" />
                <p className="date"><a href="https://github.com/SubtleTea/KiddyKode">Web</a></p>
                <p className="projects-description">Colorful webgame meant to familiarize young children with coding commands. Users control a mouse and attempt to navigate to a piece of cheese. Hosted on https://agile-reef-60707.herokuapp.com/</p>
                <p>JavaScript, Node.js, Express.js, HTML, CSS</p>
        </div>
        <div className="contentbox">
                <h2 className="box-title">Django To-Do</h2>
                <p className="projects-description">Work in progress. Probably a basic To-Do app to prove capability.</p>
                <p>Python, Django, MongoDb</p>
        </div>
    </>
);

export default Projects;