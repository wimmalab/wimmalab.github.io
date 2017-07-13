// libs
import React from 'react';
// components
import Who from './Who';
import What from './What';
import Projects from './Projects';
import AboutImg from '../img/about.jpg';
import WeAreImg from '../img/weare.jpg';
import WeDoImg from '../img/wedo.jpg';
import ProjectImg from '../img/projects.jpg';


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
                    </div>
                    <div className="switch-icons">
                        <a onClick={() => this.switchContent('what')}><div className="switch-icon who-icon"><h6>WHAT?</h6></div></a>
                        <a onClick={() => this.switchContent('who')}><div className="switch-icon what-icon"><h6>WHO?</h6></div></a>
                        <a onClick={() => this.switchContent('projects')}><div className="switch-icon projects-icon"><h6>PROJECTS</h6></div></a>
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
                    <div className="latest-articles">
                        <h3>Here latest blog posts???</h3>
                    </div>
                </div>
            </section>
        );
    }
}
