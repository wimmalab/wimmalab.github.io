// libs
import React from 'react';
// assets
import Contriboard from '../img/projects/contriboard.png';
import Freenest from '../img/projects/whitetext_freenest_logo_vertical_rgb.png';
import Toolbar from '../img/projects/toolbar2014.png';
import Unity from '../img/projects/unity2014.png';
import Fbmt from '../img/projects/fbmt2014.PNG';
import Jarmo from '../img/projects/jarmo2015.png';
import Noise from '../img/projects/noise2015.png';
import Kumos from '../img/projects/kumos2016.png';
import Overflow from '../img/projects/overflow2016.png';
import IoTitude from '../img/projects/iotitude2016.png';
import PengWinGame from '../img/projects/PengWinGame.png';
import PengWinMedia from '../img/projects/PengWinMedia.png';
import MystiCons from '../img/projects/mysticons2017.png';


export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-content">
                <h2>WIMMA Lab Projects</h2>
                <hr />
                <div className="projects-wrapper">
                <div className="projects">
                    <div className="project projects-year">
                        <a href="#">
                            <h3>2017 - WIMMA Lab</h3>
                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <div className="icon">
                                <img src={Overflow} alt="Overflow"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Overflow builds a Software Defined Network to Challenge Factory 2016.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://iotitude.gitlab.io" target="_blank">
                            <div className="icon">
                                <img src={IoTitude} alt="IoTitude"/>
                            </div>
                            <div className ="projects-text">
                                <h5> With our service you can maintain and monitor your pipe network and collect accurate data from water flow to water levels and much more!
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <div className="icon">
                                <img src={PengWinGame} alt="PengWinGame"/>
                            </div>
                            <div className ="projects-text">
                                <h5>#wine #game #mobile #unity #pixelart
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <div className="icon">
                                <img src={PengWinMedia} alt="PengWinMedia"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Media production, web-design solutions, graphics and more.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <div className="icon">
                                <img src={MystiCons} alt="MystiCons"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Mystical hagravens of the Dynamo tower.
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="projects">
                    <div className="project projects-year">
                        <a href="https://n4sjamk.github.io/challenge-factory-2016.html">
                            <h3>2016 - Challenge Factory</h3>
                        </a>
                    </div>
                    <div className="project">
                        <a href="http://kumos.github.io/" target="_blank">
                            <div className="icon">
                                <img src={Kumos} alt="Kumos"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Kumos is all about the Cloud. We aim to provide YOU the best Cloud you have ever had.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://overflowjamk.github.io/" target="_blank">
                            <div className="icon">
                                <img src={Overflow} alt="Overflow"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Overflow builds a Software Defined Network to Challenge Factory 2016.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://iotitude.github.io/" target="_blank">
                            <div className="icon">
                                <img src={IoTitude} alt="IoTitude"/>
                            </div>
                            <div className ="projects-text">
                                <h5> With our service you can maintain and monitor your pipe network and collect accurate data from water flow to water levels and much more!
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="projects">
                    <div className="project projects-year">
                        <a href="https://n4sjamk.github.io/challenge-factory-2015.html">
                            <h3>2015 - Challenge Factory</h3>
                        </a>
                    </div>
                    <div className="project">
                        <a href="http://n4sjamk.github.io/contriboard/" target="_blank">
                            <div className="icon">
                                <img src={Contriboard} alt="contriboard"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Think about the person writing down the various handwritten tickets! With Contriboard your ideas will be in digital form from the beginnig to the end of the storm session.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://n4sjamk.github.io/jarmo/" target="_blank">
                            <div className="icon">
                                <img src={Jarmo} alt="Jarmo"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Jarmo is a simple system for application health monitoring.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://n4sjamk.github.io/challenge-factory-2015.html" target="_blank">
                            <div className="icon">
                                <img src={Noise} alt="Noise"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Simulate different network conditions
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="projects">
                    <div className="project projects-year">
                        <a href="https://n4sjamk.github.io/challenge-factory-2014.html">
                            <h3>2014 - Summer Factory </h3>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://n4sjamk.github.io/challenge-factory-2014.html" target="_blank">
                            <div className="icon">
                                <img src={Toolbar} alt="Toolbar"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Collect and share sites and tools your team needs speeding up the working environment setup process.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://n4sjamk.github.io/challenge-factory-2014.html" target="_blank">
                            <div className="icon">
                                <img src={Fbmt} alt="Fbmt"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Collect and share sites and tools your team needs speeding up the working environment setup process.
                                </h5>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://www.youtube.com/watch?v=jvpoDnsj280&feature=youtu.be" target="_blank">
                            <div className="icon">
                                <img src={Unity} alt="Unity"/>
                            </div>
                            <div className ="projects-text">
                                <h5>Simulation of prototypes in a natural environment using Unity3D as the rendering engine.
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="projects">
                    <div className="project projects-year">
                        <h3>2012 & 2013 - Summer Factory</h3>
                    </div>
                    <div className="project">
                        <a href="http://freenest.org/about" target="_blank">
                            <div className="icon">
                                <img src={Freenest} alt="Freenest"/>
                            </div>
                            <div className ="projects-text">
                                <h5>FreeNest is a team-oriented product development platform that is fast to deploy and easy to use.</h5>
                            </div>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
