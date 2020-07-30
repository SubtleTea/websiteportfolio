import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>ARIEL LIM</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact Me</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;