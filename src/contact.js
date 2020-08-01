import React, { Component } from "react";
import Main from './main';

class Contact extends Component {
    render() {
        return (
            <div>
                <Main />;
                <div className="contentbox">
                    <h2>CONTACT ME</h2>
                    <p>Contact me at <a href="www.google.com">here</a></p>
                </div>
            </div>
        );
    }
}

export default Contact;