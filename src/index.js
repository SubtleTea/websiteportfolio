import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main";
import "./index.css";

const App = () => {
    const buttonText = { text: 'Click me'};
    const labelText = 'Enter name:';

    function getTime() {
        return (new Date()).toLocaleTimeString()
    }


    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>

            <div id="child">
            <h3>{getTime()}</h3>
            </div>

            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            Sam
                        </a>
                        <div className="metadata">
                            <span className="date">
                                <h3>{getTime()}</h3>
                            </span>
                        </div>
                        <div className="text">
                            Comment
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

ReactDOM.render(<Main />, document.querySelector('#root'));