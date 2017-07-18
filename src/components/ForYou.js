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
                            Cry no more! This is what we can offer to you:</p>
                        </div>
                        <div className="row">
                            <ul>
                                <li>- Opportunity to feel important</li>
                                <li>- Get shit done (or at least participate)</li>
                                <li>- Get up to 15 points off your practice quota</li>
                                <li>- Possibly get connected with some people in worklife from your field</li>
                            </ul>
                            <a href="" className="for-you-btn">APPLY NOW!</a>
                        </div>
                    </div>
                    <div className="for-employers">
                        <div className="row">
                            <h2>For Employers</h2>
                            <hr />
                            <p>As you well know, students are a great resource as future employees. You have a stellar opportunity to meet future talents
                            (or simply decent employees) here at WIMMA. Students who are hungry to get a foothold in worklife in their respective fields.
                            Why not get connected? See what we're doing here and maybe benefit?</p>
                        </div>
                        <div className="row">
                            <ul>
                                <li>- Get connected with future assets to your company</li>
                                <li>- Free slave labor (if you want to be a "challenge giver")</li>
                                <li>- Some other spectacular benefits we are not disclosing at this stage</li>
                                <li>- And more!</li>
                            </ul>
                            <a href="" className="for-you-btn">FIND OUT MORE!</a>
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
