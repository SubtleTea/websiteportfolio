import React, { Component } from "react";
import {
    Route,
    BrowserRouter,
    NavLink
} from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>ARIEL LIM</h1>
                    <ul className="header">
                        <li><NavLink to="/" exact activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to="/projects" activeClassName='active'>Projects</NavLink></li>
                        <li><NavLink to="/contact" activeClassName='active'>Contact Me</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;