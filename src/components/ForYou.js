// libs
import React from 'react';

export default class ForYou extends React.Component {
    render() {
        return (
            <section className="for-you">
                <div className="container">Wimma for you content here</div>
                <span className="arrow">
                    <a href="#companies" style={(this.props.scrollSpy !== 'for-you') ? {opacity: 0, pointerEvents: 'none'} : {cursor: 'pointer'}}>
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
