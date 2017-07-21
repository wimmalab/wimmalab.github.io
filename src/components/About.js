// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// components
import Who from './Who';
import What from './What';
import Projects from './Projects';
// assets
import AboutImg from '../img/contact.us.jpg';

import Cogwheel from '../img/cogwheelicon.svg';
import { FaCogs, FaGroup, FaQuestion } from 'react-icons/lib/fa/';


// offset anchor for better scrolling into view
configureAnchors({offset: -40});
// for inline styling
const styles = {
    accent2: '#fc8f97',
    scaleUp: 'scale(1.2)'
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
                           <p>
                           WIMMA Lab runs as a 2,5-month project, which students participate as trainees.
                           During the project, students form "virtual company" teams and solve challenges. Challenges are given by companies, research programs and universities. Students develop proof-of-concepts and even production ready solutions.
                          </p>
                       </div>
                       <div className="about-img">
                       <img src={AboutImg} alt="Borhan&Juho"></img>
                       </div>
                       <ScrollableAnchor id={'categories'}><div style={{position: 'absolute', bottom: '100px'}}></div></ScrollableAnchor>
                   </div>
                   <div className="switch-icons">
                       <a onClick={() => this.switchContent('what')} href="#categories">
                           <div className="switch-icon">
                                <div className="about-icons" style={(this.state.content === 'what') ? {transform: styles.scaleUp, color: styles.accent2} : {} }><FaQuestion /></div>
                               <h5 style={(this.state.content === 'what') ? {transform: styles.scaleUp, color: styles.accent2} : {} }>WHAT?</h5>
                           </div>
                       </a>
                       <a onClick={() => this.switchContent('who')} href="#categories">
                           <div className="switch-icon ">
                           <div className="about-icons" style={(this.state.content === 'who') ? {transform: styles.scaleUp, color: styles.accent2} : {} }   ><FaGroup /></div>
                               <h5 style={(this.state.content === 'who') ? {transform: styles.scaleUp, color: styles.accent2} : {} }>WHO?</h5>
                           </div>
                       </a>
                       <a onClick={() => this.switchContent('projects')} href="#categories">
                           <div className="switch-icon ">
                           <div className="about-icons" style={(this.state.content === 'projects') ? {transform: styles.scaleUp, color: styles.accent2} : {} }><FaCogs /></div>
                               <h5 style={(this.state.content === 'projects') ? {transform: styles.scaleUp, color: styles.accent2} : {} }>PROJECTS</h5>
                           </div>
                       </a>
                   </div>
                   </div>
                   <div className="background-wrapper">
                       <div className="content-container">
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
                       <ul className="switch-lower">
                           <a onClick={() => this.switchContent('what')} href="#categories" style={(this.state.content === 'what') ? {color: styles.accent2} : {}}><li>What?</li></a>
                           <a onClick={() => this.switchContent('who')} href="#categories" style={(this.state.content === 'who') ? {color: styles.accent2} : {}}><li>Who?</li></a>
                           <a onClick={() => this.switchContent('projects')} href="#categories" style={(this.state.content === 'projects') ? {color: styles.accent2} : {}}><li>Projects</li></a>
                       </ul>
                       <span className="arrow">
                      <a href="#for-you" style={(this.props.scrollSpy !== 'about') ? {opacity: 0, pointerEvents: 'none'} : {cursor: 'pointer'}}>
                         <i></i>
                      </a>
                   </span>
                   </div>
               </div>
           </section>
       );
   }
}
