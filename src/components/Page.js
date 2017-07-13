// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { removeHash } from 'react-scrollable-anchor';
import Waypoint from 'react-waypoint';
// components
import Landing from './Landing';
import About from './About';
import ForYou from './ForYou';
import Companies from './Companies';
import Contact from './Contact';

configureAnchors({scrollDuration: 400});

export default class Page extends React.Component {
    handleWaypointEnter(value) {
        console.log(value);
    }
    handleWaypointLeave(value) {
        console.log(value);
    }
    render() {
        return (
            <div className="wrapper">
                <ScrollableAnchor id={'page-top'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('landing')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <Landing />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'about'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('about')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <About />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'for-you'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('for-you')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <ForYou />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'companies'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('companies')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <Companies />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'contact'}><div></div></ScrollableAnchor>
                <Contact />
                <Waypoint onEnter={() => this.handleWaypointEnter('contact')} />
            </div>
        );
    }
}

/*
<Waypoint onEnter={() => this.handleWaypointEnter('landing')} threshold={0} >
    <div>
        <Landing />
    </div>
</Waypoint>
<ScrollableAnchor id={'about'}><div></div></ScrollableAnchor>
<Waypoint onEnter={() => this.handleWaypointEnter('about')} threshold={-100}>
    <div>
        <About />
    </div>
</Waypoint>
<ScrollableAnchor id={'for-you'}><div></div></ScrollableAnchor>
<Waypoint onEnter={() => this.handleWaypointEnter('for-you')} threshold={50}>
    <div>
        <ForYou id="for-you" />
    </div>
</Waypoint>
<ScrollableAnchor id={'companies'}><div></div></ScrollableAnchor>
<Waypoint onEnter={() => this.handleWaypointEnter('companies')} threshold={50}>
    <div>
        <Companies />
    </div>
</Waypoint>
<ScrollableAnchor id={'contact'}><div></div></ScrollableAnchor>
<Waypoint onEnter={() => this.handleWaypointEnter('contact')} threshold={50}>
    <div>
        <Contact />
    </div>
</Waypoint>
*/
