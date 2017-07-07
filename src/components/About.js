// libs
import React from 'react';
// components
import Who from './Who';
import What from './What';
import Projects from './Projects';
import AboutImg from '../img/about.jpg';

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
                    <div className="about-container">
                        <div className="about-info">
                            <h2>OUR STORY</h2>
                            <p>WIMMA Lab is a concept based on the challenge centered learning. It is run as 2,5 months long project which students join as trainees for their bachelor degree programme. WIMMA Lab introduces students to different research and development challenges. Challenges are presented from companies, research programs and universities. At the start of the project, students form virtual companies. During the project students develop concepts, proof-of-concepts or production ready solutions.</p>
                        </div>
                        <div className="about-img">
                            <img src={AboutImg} alt={'about-img'} />
                        </div>
                    </div>
                    <div className="switch-icons">
                        <a onClick={() => this.switchContent('what')}><div className="switch-icon"><h2>WHAT?</h2></div></a>
                        <a onClick={() => this.switchContent('who')}><div className="switch-icon"><h2>WHO?</h2></div></a>
                        <a onClick={() => this.switchContent('projects')}><div className="switch-icon"><h2>PROJECTS</h2></div></a>
                    </div>
                    {this.state.content === 'what' &&
                        <What />
                    }
                    {this.state.content === 'who' &&
                        <Who />
                    }
                    {this.state.content === 'projects' &&
                        <Projects />
                    }
                    <div className="boxes">
                    <div className="missio">
                    <p>I am missio</p>
                    </div>
                    <div className="visio">
                    <p>I am visio</p>
                    </div>
                    <div className="methods">
                    <p>I am methods</p>
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
