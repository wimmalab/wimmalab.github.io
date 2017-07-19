// libs
import React from 'react';
// components
import MdTrendingUp from 'react-icons/lib/md/trending-up';
import Comment from 'react-icons/lib/go/comment-discussion';
import Calendar from 'react-icons/lib/go/calendar';
import Beer from 'react-icons/lib/go/beer';

export default class What extends React.Component {
    render() {
        return (
            <div className="what-content">
                <h2>What is WIMMA?</h2>
                <hr />
                <h3>WIMMA Lab - learning without lectures </h3>
                <p>Our students solve challenges and deliver prototypes in fast moving teams while learning the dynamics of team work and value of collaboration.</p>
                <h3>Unique opportunity to learn</h3>
                <p>
                At WIMMA Lab students gain experience on project-based teamwork in multi-functional teams. Students are guided to build culture and rules that enable their team to succeed.</p>
                <h3>We teach to execute</h3>
                <p>WIMMA Lab is all about building from idea to execution. Virtual companies are coached to deliver a working demo each sprint. However, the goal is not to build quick and dirty demos, but solutions that can be tested in a production environment.</p>
                <div className="boxes">
                    <div className="visio">
                        <h3>Vision</h3>
                        <h5>Our vision is to be universal learning method to any kind of students.</h5>
                    </div>
                    <div className="missio">
                        <h3>Mission</h3>
                        <h5>Our mission is to have two international WIMMA lab campuses in 2020.</h5>
                    </div>
                    <div className="methods">
                        <h3>Our methods</h3>
                        <div className="method-icons">
                            <div className="method-icon">
                                <p className="icon-font"><MdTrendingUp/></p>
                                <h5>Fast development</h5>
                            </div>
                            <div className="method-icon">
                                <p className="icon-font"><Comment/></p>
                                <h5>Daily Scrum meetings</h5>
                            </div>
                            <div className="method-icon">
                                <p className="icon-font"><Calendar/></p>
                                <h5>6 sprints</h5>
                            </div>

                            <div className="method-icon">
                                <p className="icon-font"><Beer/></p>
                                <h5>Getting together</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
