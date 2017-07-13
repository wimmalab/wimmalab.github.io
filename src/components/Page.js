// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { removeHash } from 'react-scrollable-anchor';
// components
import Landing from './Landing';
import About from './About';
import ForYou from './ForYou';
import Companies from './Companies';
import Contact from './Contact';

configureAnchors({scrollDuration: 400});
removeHash();

export default class Page extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <ScrollableAnchor id={'page-top'}><div></div></ScrollableAnchor>
                <Landing />
                <ScrollableAnchor id={'about'}><div></div></ScrollableAnchor>
                <About />
                <ScrollableAnchor id={'for-you'}><div></div></ScrollableAnchor>
                <ForYou />
                <ScrollableAnchor id={'companies'}><div></div></ScrollableAnchor>
                <Companies />
                <ScrollableAnchor id={'contact'}><div></div></ScrollableAnchor>
                <Contact />
            </div>
        );
    }
}
