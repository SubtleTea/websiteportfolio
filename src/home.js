import React from "react";
import Main from './main';

const Home = () => (
    <>
        <Main />;
        <div className="title-box">
            <h2>Hey, I am Ariel Lim</h2>
            <p>I am a software engineer specializing in full-stack development</p>
        </div>
        <div className="contentbox">
            <h2>This is a website built from scratch using React</h2>
            <p>It is a work in progress. It uses React, HTML, and CSS for its front end and will use Node.js, Express.js, and Postgres for its back end. Hopefully it will be hosted on GCP or something at some point.</p>
        </div>

    </>
);

export default Home;