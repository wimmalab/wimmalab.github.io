// libs
import React from 'react';

export default class Landing extends React.Component {
    render() {
        return (
            <section className="landing">
                <div className="container"><h1>Join Wimma</h1></div>
                <span className="arrow-down">
                    <a href="#about" style={(this.props.scrollSpy !== '') ? {opacity: 0, pointerEvents: 'none'} : {}}>
                        <svg width="40" height="40">
                            <path d="M1,0 19,40" strokeWidth="4" />
                            <path d="M19,40 39,0" strokeWidth="4" />
                        </svg>
                    </a>
                </span>
            </section>
        );
    }
}
