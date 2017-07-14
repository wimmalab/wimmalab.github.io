// libs
import React from 'react';
// components
import MdTrendingUp from 'react-icons/lib/md/trending-up'
import BackUp from 'react-icons/lib/md/backup'

export default class What extends React.Component {
    render() {
        return (
            <div className="what-content">
                <h2>What is WIMMA?</h2>
                <hr />
                <h3>Unique opportunity to learn</h3>
                <p>During WIMMA Lab students gain experience on project-based teamwork in work life-like environment.
                Students are guided to find their own place on a team and together build culture and rules for their team.</p>
                <h3>We teach to execute</h3>
                <p>WIMMA Lab is all about building from idea to execution. Virtual companies are coached to deliver a working demo each sprint. However, the goal is not to build quick and dirty demos, but solutions that are production ready and can stand the test of time.</p>
                <div className="boxes">
                    <div className="visio">
                        <h3>Vision</h3>
                        <div className="p-italic">Our visio is to be universal learning method to any kind of students.</div>
                    </div>
                    <div className="missio">
                        <h3>Mission</h3>
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
            </div>
        );
    }
}
