import React, { Component } from "react";
import Main from './main';

class Projects extends Component {
    render() {
        return (
            <div>
                <Main />;
                <div className="contentbox">
                    <h2>PROJECTS TITLE</h2>
                    <p>PROJECTS CONTENT</p>
                    <ol>
                        <li>This thing</li>
                        <li>Django or something</li>
                    </ol>
                </div>

            </div>
        );
    }
}

export default Projects;