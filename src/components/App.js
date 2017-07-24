// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Waypoint from 'react-waypoint';
// components
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import ForYou from './ForYou';
import Companies from './Companies';
import Contact from './Contact';

configureAnchors({scrollDuration: 400});

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollSpy: ''
        }
    }
    handleWaypointEnter = (value) => {
        this.setState({
            scrollSpy: value
        });
    }
    render() {
        return (
            <div className="wrapper">
                <Nav scrollSpy={this.state.scrollSpy} />
                <ScrollableAnchor id={'page-top'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <Landing scrollSpy={this.state.scrollSpy} />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'about'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('about')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <About scrollSpy={this.state.scrollSpy} />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'for-you'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('for-you')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <ForYou scrollSpy={this.state.scrollSpy} />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'companies'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('companies')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <Companies scrollSpy={this.state.scrollSpy} />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'contact'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('contact')} bottomOffset={'45%'}>
                    <div>
                        <Contact />
                    </div>
                </Waypoint>
                <Waypoint onEnter={() => this.handleWaypointEnter('contact')} />
            </div>
        );
    }
}
