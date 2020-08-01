import React from "react";
import {
    NavLink
} from "react-router-dom";

import Sidebar from './components/sidebar';

const Main = () => (
    <>
        <Sidebar />
        <div>
            <ul className="header">
                <li><NavLink to="/" exact activeClassName='active'>Home</NavLink></li>
                <li><NavLink to="/about" exact activeClassName='active'>About</NavLink></li>
                <li><NavLink to="/projects" activeClassName='active'>Projects</NavLink></li>
                <li><NavLink to="/contact" activeClassName='active'>Contact Me</NavLink></li>
            </ul>
        </div>   
    </>
);

export default Main;