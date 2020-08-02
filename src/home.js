import React from "react";
import Main from './main';

const Home = () => (
    <>
        <Main />;
        <div className="contentbox">
            <h2>This is a website built from scratch using React</h2>
            <p>It is a work in progress. Hopefully it will be hosted on GCP or something at some point.</p>
        </div>
        <div className="contentbox">
            <h2>I am Ariel Lim or something</h2>
            <p>If you want to see my resume, you can do so by selecting the option at the top!</p>
        </div>
    </>
);

export default Home;