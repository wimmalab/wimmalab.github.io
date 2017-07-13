// libs
import React from 'react';
import Contriboard from '../img/projects/contriboard.png';
import Freenest from '../img/projects/whitetext_freenest_logo_vertical_rgb.png';

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
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                </div>
                <h2>2014</h2>
                <div className="projects-icons">
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><div className ="hover-projects"><p>Contriboard</p></div></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                </div>
                <h2>2013</h2>
                <div className="projects-icons">
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                    <a><div className="projects-icon"><img src={Contriboard} alt="contriboard"/><p>Contriboard</p></div></a>
                </div>
                <h2>2012</h2>
                <div className="projects-icons">
                    <a href="http://freenest.org/about">
                        <div className="projects-icon"><img src={Freenest} alt="Freenest"/>
                            <div className ="hover-projects">
                                <h5>FreeNest is a team-oriented product development platform that is fast to deploy and easy to use.
                                </h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
