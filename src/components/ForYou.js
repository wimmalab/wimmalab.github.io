// libs
import React from 'react';

export default class ForYou extends React.Component {
    render() {
        return (
            <section className="for-you">
                <div className="container">
                    <div className="for-students">
                        <div className="row">
                            <h2>For Students</h2>
                            <hr />
                            <p>You're not a lazy ass who wants to just chill during summer times and yet you failed to get a real jarb?
                            Cry no more! This is what we can offer to you:
                            <br/>OBS! This text may need some improve... Do you have any ideas?</p>
                        </div>
                        <div className="row">
                            <ul>
                                <li className="list">Real challenges from companies and research programs</li>
                                <li className="list">Find your place in a agile project team and improve your professional skillset</li>
                                <li className="list">Earn up to 15 study credits</li>
                                <li className="list">Network with your future employer</li>
                            </ul>
                            <a href="#contact" className="for-you-btn">APPLY NOW!</a>
                        </div>
                    </div>
                    <div className="for-employers">
                        <div className="row">
                            <h2>For Companies</h2>
                            <hr />
                            <p>As you well know, students are a great resource as future employees. You have a stellar opportunity to meet future talents
                            (or simply decent employees) here at WIMMA. Students who are hungry to get a foothold in worklife in their respective fields.
                            Why not get connected? See what we're doing here and maybe benefit?
                            <br/>OBS! This text may need some improve.. Do you have any ideas? </p>
                        </div>
                        <div className="row">
                            <ul>
                                <li className="list">Test bold ideas and build proof of concepts</li>
                                <li className="list">Find new talents from University students</li>
                                <li className="list">Fresh insights from students to reignite your business</li>
                            </ul>
                            <a href="#contact" className="for-you-btn">FIND OUT MORE!</a>
                        </div>
                    </div>
                </div>
                <span className="arrow">
                    <a href="#companies" style={(this.props.scrollSpy !== 'for-you') ? {opacity: 0, pointerEvents: 'none'} : {cursor: 'pointer'}}>
                    <i>
                    </i>
                </a>
                </span>
            </section>
        );
    }
}
