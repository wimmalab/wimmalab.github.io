// libs
import React from 'react';

export default class ForYou extends React.Component {
    render() {
        return (
            <section className="for-you">
                <div className="container">Wimma for you content here</div>
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
