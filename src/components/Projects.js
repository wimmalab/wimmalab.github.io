// libs
import React from 'react';
// assets
import Contriboard from '../img/projects/contriboard.png';
import Freenest from '../img/projects/whitetext_freenest_logo_vertical_rgb.png';
import Toolbar from '../img/projects/toolbar2014.png';
import Unity from '../img/projects/unity2014.png';
import Fbmt from '../img/projects/fbmt2014.PNG';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-content">
                <h2>WIMMA Lab Projects</h2>
                <hr />
                <p>WIMMA Lab has exist from 2012, and here has been done many different projects. </p>
                <h2>2017</h2>
                <div className="projects-icons">
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><div className ="hover-projects"><p>Contriboard</p></div></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><div className ="hover-projects"><p>Contriboard</p></div></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><div className ="hover-projects"><p>Contriboard</p></div></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><div className ="hover-projects"><p>Contriboard</p></div></div></a>
                </div>
                <h2>2016</h2>
                <div className="projects-icons">
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                </div>
                <h2>2015</h2>
                <div className="projects-icons">
                    <div className="projects-icon">
                        <img src={Freenest} alt="Freenest"/>
                        <a href="http://freenest.org/about">
                            <div className ="hover-projects">
                                <h5>FreeNest is a team-oriented product development platform that is fast to deploy and easy to use.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="projects-icon">
                        <img src={Freenest} alt="Freenest"/>
                        <a href="http://freenest.org/about">
                            <div className ="hover-projects">
                                <h5>FreeNest is a team-oriented product development platform that is fast to deploy and easy to use.
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
            <a href="https://n4sjamk.github.io/challenge-factory-2014.html">
                <h2>2014</h2>
            </a>
                <div className="projects-icons">
                <div className="projects-icon">
                    <img src={Toolbar} alt="Toolbar"/>
                    <a href="https://n4sjamk.github.io/challenge-factory-2014.html">
                        <div className ="hover-projects">
                            <h5>Collect and share sites and tools your team needs speeding up the working environment setup process.
                            </h5>
                        </div>
                    </a>
                </div>
                <div className="projects-icon">
                    <img src={Fbmt} alt="Fbmt"/>
                    <a href="https://n4sjamk.github.io/challenge-factory-2014.html">
                        <div className ="hover-projects">
                            <h5>Collect and share sites and tools your team needs speeding up the working environment setup process.
                            </h5>
                        </div>
                    </a>
                </div>
                <div className="projects-icon">
                    <img src={Unity} alt="Unity"/>
                    <a href="https://www.youtube.com/watch?v=jvpoDnsj280&feature=youtu.be">
                        <div className ="hover-projects">
                            <h5>Simulation of prototypes in a natural environment using Unity3D as the rendering engine.
                            </h5>
                        </div>
                    </a>
                </div>
                </div>
                <h2>2012 & 2013</h2>
                <div className="projects-icons">
                    <div className="projects-icon">
                        <img src={Freenest} alt="Freenest"/>
                        <a href="http://freenest.org/about">
                            <div className ="hover-projects">
                                <h5>FreeNest is a team-oriented product development platform that is fast to deploy and easy to use.</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
