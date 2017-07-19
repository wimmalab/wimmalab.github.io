// libs
import React from 'react';



export default class Landing extends React.Component {
    render() {

        return (
            <section className="landing">
                <div className="container">
                <h1>It's time to Rock.</h1>
                </div>
                <span className="arrow">
                    <a href="#about" style={(this.props.scrollSpy !== '') ? {opacity: 0, pointerEvents: 'none'} : {cursor: 'pointer'}}>
                        <i>
                        </i>
                    </a>
                </span>
            </section>
        );
    }
}
