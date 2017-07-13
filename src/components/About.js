// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// components
// components
import Who from './Who';
import What from './What';
import Projects from './Projects';
import AboutImg from '../img/about.jpg';
import WeAreImg from '../img/weare.jpg';
import WeDoImg from '../img/wedo.jpg';
import ProjectImg from '../img/projects.jpg';

// offset anchor for better scrolling into view
configureAnchors({offset: -40});
// for inline styling
const styles = {
    accent2: "#fc8f97",
    scaleUp: "scale(1.4)"
}

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
                       <a onClick={() => this.switchContent('what')} href="#categories">
                           <div className="switch-icon">
                               <h6 style={(this.state.content === 'what') ? {transform: styles.scaleUp, color: styles.accent2} : {} }>WHAT?</h6>
                           </div>
                       </a>
                       <a onClick={() => this.switchContent('who')} href="#categories">
                           <div className="switch-icon">
                               <h6 style={(this.state.content === 'who') ? {transform: styles.scaleUp, color: styles.accent2} : {} }>WHO?</h6>
                           </div>
                       </a>
                       <a onClick={() => this.switchContent('projects')} href="#categories">
                           <div className="switch-icon">
                               <h6 style={(this.state.content === 'projects') ? {transform: styles.scaleUp, color: styles.accent2} : {} }>PROJECTS</h6>
                           </div>
                       </a>
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
                       <a onClick={() => this.switchContent('what')} href="#categories" style={(this.state.content === 'what') ? {color: styles.accent2} : {}}><li>&bull;</li></a>
                       <a onClick={() => this.switchContent('who')} href="#categories" style={(this.state.content === 'who') ? {color: styles.accent2} : {}}><li>&bull;</li></a>
                       <a onClick={() => this.switchContent('projects')} href="#categories" style={(this.state.content === 'projects') ? {color: styles.accent2} : {}}><li>&bull;</li></a>
                   </ul>
                   <div className="latest-articles">
                       <h3>Here latest blog posts???</h3>
                   </div>
               </div>
           </section>
       );
   }
}
