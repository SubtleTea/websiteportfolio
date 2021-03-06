import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./home";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";
import NotFound from "./notfound";
import "./index.css";

import { BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));