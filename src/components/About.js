// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// components
import Who from './Who';
import What from './What';
import Projects from './Projects';
import AboutImg from '../img/about.jpg';
<<<<<<< Updated upstream
import WeAreImg from '../img/weare.jpg';
import WeDoImg from '../img/wedo.jpg';
import ProjectImg from '../img/projects.jpg';
import MdTrendingUp from 'react-icons/lib/md/trending-up'
import BackUp from 'react-icons/lib/md/backup'
=======
import MdTrendingUp from 'react-icons/lib/md/trending-up';
import BackUp from 'react-icons/lib/md/backup';

configureAnchors({offset: -40});
>>>>>>> Stashed changes

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'what'
        }
        this.switchContent = this.switchContent.bind(this);
    }
    switchContent(value) {
        console.log(value);
        this.setState({
            content: value
        });
    }
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="about-basic">
                        <div className="about-info">
                            <h3>OUR STORY</h3>
                            <p>WIMMA Lab is a concept based on the challenge centered learning. It is run as 2,5 months long project which students join as trainees for their bachelor degree programme. WIMMA Lab introduces students to different research and development challenges. Challenges are presented from companies, research programs and universities. At the start of the project, students form virtual companies. During the project students develop concepts, proof-of-concepts or production ready solutions.</p>
                        </div>
                        <div className="about-img">
                            <img src={AboutImg} alt={'about-img'} />
                        </div>
                        <ScrollableAnchor id={'categories'}><div style={{position: 'absolute', bottom: '100px'}}></div></ScrollableAnchor>
                    </div>

                    <div className="switch-icons">
<<<<<<< Updated upstream
                        <a onClick={() => this.switchContent('what')}><div className="switch-icon who-icon"><h6>WHAT?</h6></div></a>
                        <a onClick={() => this.switchContent('who')}><div className="switch-icon what-icon"><h6>WHO?</h6></div></a>
                        <a onClick={() => this.switchContent('projects')}><div className="switch-icon projects-icon"><h6>PROJECTS</h6></div></a>
=======
                        <a onClick={() => this.switchContent('what')} href="#categories"><div className="switch-icon"><h2>WHAT?</h2></div></a>
                        <a onClick={() => this.switchContent('who')} href="#categories"><div className="switch-icon"><h2>WHO?</h2></div></a>
                        <a onClick={() => this.switchContent('projects')} href="#categories"><div className="switch-icon"><h2>PROJECTS</h2></div></a>
>>>>>>> Stashed changes
                    </div>
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeave={false}>
                        {this.state.content === 'what' &&
                            <What />
                        }
                        {this.state.content === 'who' &&
                            <Who />
                        }
                        {this.state.content === 'projects' &&
                            <Projects />
                        }
                    </ReactCSSTransitionGroup>
                    <ul className="switch-dots">
                        <a onClick={() => this.switchContent('what')} href="#categories"><li>&bull;</li></a>
                        <a onClick={() => this.switchContent('who')} href="#categories"><li>&bull;</li></a>
                        <a onClick={() => this.switchContent('projects')} href="#categories"><li>&bull;</li></a>
                    </ul>
                    <div className="boxes">
                        <div className="visio">
                        <h3>Visio</h3>
                            <div className="p-italic">Our visio is to be universal learning method to any kind of students.</div>
                        </div>
                        <div className="missio">
                        <h3>Missio</h3>
                        <div className="p-italic">Our missio is to have two international WIMMA lab campukses in 2020.</div>
                        </div>
                        <div className="methods">
                            <h3>Our methods</h3>
                            <div className="method-icons">
                                <div className="method-icon">
                                <p className="icon-font"><MdTrendingUp/></p>
                                <p>Im trending</p>
                                </div>
                                <div className="method-icon">
                                <p className="icon-font"><BackUp/></p>
                                <p>Im back up</p>
                                </div>
                                <div className="method-icon">
                                <p className="icon-font"><BackUp/></p>
                                <p>Im back up</p>
                                </div>
                                <div className="method-icon">
                                <p className="icon-font"><BackUp/></p>
                                <p>Im IOT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-articles">
                        <h3>Here latest blog posts???</h3>
                    </div>
                </div>
            </section>
        );
    }
}
