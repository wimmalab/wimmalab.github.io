// libs
import React from 'react';
// assets

export default class Landing extends React.Component {
    render() {
        return (
            <section className="landing">
                <div className="container">
                    <h1>Future of project-based learning is here.</h1>
                </div>
                <span className="arrow">
                    <a href="#about" style={(this.props.scrollSpy !== '') ? {opacity: 0, pointerEvents: 'none'} : {cursor: 'pointer'}}>
                        <i></i>
                    </a>
                </span>
            </section>
        );
    }
}
