// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// components
import Landing from './Landing';
import About from './About';
import ForYou from './ForYou';
import Companies from './Companies';
import Contact from './Contact';

export default class Page extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <ScrollableAnchor id={'page-top'}>
                    <Landing />
                </ScrollableAnchor>
                <ScrollableAnchor id={'about'}>
                    <About />
                </ScrollableAnchor>
                <ScrollableAnchor id={'for-you'}>
                    <ForYou />
                </ScrollableAnchor>
                <ScrollableAnchor id={'companies'}>
                    <Companies />
                </ScrollableAnchor>
                <ScrollableAnchor id={'contact'}>
                    <Contact />
                </ScrollableAnchor>
            </div>
        );
    }
}
