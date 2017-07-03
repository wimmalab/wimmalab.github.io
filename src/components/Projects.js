// libs
import React from 'react';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-content">
                <h2>WIMMA Lab Projects</h2>
                <h3>Something about ongoing projects and shit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="projects-icons">
                    <a><div className="projects-icon"></div></a>
                    <a><div className="projects-icon"></div></a>
                    <a><div className="projects-icon"></div></a>
                    <a><div className="projects-icon"></div></a>
                </div>
            </div>
        );
    }
}
