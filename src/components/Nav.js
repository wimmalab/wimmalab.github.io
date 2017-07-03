import React from 'react';
import LogoImg from '../img/logo/WI.turqbox.png';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideNavWidth: '0px'
        }
    }
    openSlideMenu() {
        this.setState({
            slideNavWidth: '250px'
        });
    }
    closeSlideMenu() {
        this.setState({
            slideNavWidth: '0px'
        });
    }
    render() {
        return (
            <div>
                <nav className="navbar">
                    <a href="#page-top" className="brand-link"><img src={LogoImg} alt={LogoImg} /></a>
                    <span className="open-slide">
                        <a onClick={() => this.openSlideMenu()}>
                            <svg width="30" height="30">
                                <path d="M0,3 30,3" strokeWidth="4" />
                                <path d="M0,15 30,15" strokeWidth="4" />
                                <path d="M0,27 30,27" strokeWidth="4" />
                            </svg>
                        </a>
                    </span>
                    <ul className="navbar-nav">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#for-you">WIMMA for you</a></li>
                        <li><a href="#companies">vCOMPANIES</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="https://wimmalab.github.io/blog/" className="blog-link">BLOG</a></li>
                    </ul>

                </nav>
                <div id="side-nav" className="side-nav" style={{width: this.state.slideNavWidth}}>
                    <a onClick={() => this.closeSlideMenu()} className="btn-close">
                        <svg width="30" height="30">
                            <path d="M1,28 29,2" strokeWidth="4" />
                            <path d="M1,2 29,28" strokeWidth="4" />
                        </svg>
                    </a>
                    <ul>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#for-you">WIMMA for you</a></li>
                        <li><a href="#companies">vCOMPANIES</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="https://wimmalab.github.io/blog/">BLOG</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
