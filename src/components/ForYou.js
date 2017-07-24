// libs
import React from 'react';

export default class ForYou extends React.Component {
    render() {
        return (
            <section className="for-you">
                <div className="container">
                    <div className="for-students">
                        <div className="row">
                        <h2>Looking for an internship position?</h2>
                        <hr />
                        <p>This is what we offer for students:</p>
                            <ul>
                                <li className="list">Real challenges from companies and research programs</li>
                                <li className="list">Find your place in an agile project team and improve your professional skillset</li>
                                <li className="list">Earn up to 15 study credits</li>
                                <li className="list">Network with your possible future employer</li>
                            </ul>
                            <a href="https://asio.jamk.fi/pls/asio/asio_ectskuv1.kurssin_ks?ktun=TTVW0110&knro=&noclose=%20&lan=e" className="for-you-btn">APPLY NOW!</a>
                        </div>
                    </div>
                    <div className="for-employers">
                        <div className="row">
                        <h2>Hunting for talents?</h2>
                        <hr />
                        <p>This is what we offer our Wimma Lab partner companies:</p>
                            <ul>
                                <li className="list">Test bold ideas and build proof of concepts</li>
                                <li className="list">Find new talents from University students</li>
                                <li className="list">Fresh insights from students to reignite your business</li>
                                <li className="list">Share your passion to Technology with enthuastic audience</li>
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
