// libs
import React from 'react';
// components
import { FaGithubSquare, FaLinkedinSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/lib/fa';
// assets
import LogoImg from '../img/logo/Wilogo.nav.png';

const styles = {
    accent2 : '#fc8f97',
    active : '0px -5px 0px #fc8f97 inset'
}

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideNavWidth: '0px'
        }
    }
    openSlideMenu() {
        this.setState({
            slideNavWidth: '100%'
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
                        <li><a style={(this.props.scrollSpy === 'about') ? {boxShadow: styles.active} : {}} href="#about">ABOUT</a></li>
                        <li><a style={(this.props.scrollSpy === 'for-you') ? {boxShadow: styles.active} : {}} href="#for-you">WIMMA FOR YOU</a></li>
                        <li><a style={(this.props.scrollSpy === 'companies') ? {boxShadow: styles.active} : {}} href="#companies">VIRTUAL COMPANIES</a></li>
                        <li><a style={(this.props.scrollSpy === 'contact') ? {boxShadow: styles.active} : {}} href="#contact">CONTACT</a></li>
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
                        <li><a onClick={() => this.closeSlideMenu()} style={(this.props.scrollSpy === 'about') ? {color: styles.accent2} : {}} href="#about">ABOUT</a></li>
                        <li><a onClick={() => this.closeSlideMenu()} style={(this.props.scrollSpy === 'for-you') ? {color: styles.accent2} : {}} href="#for-you">WIMMA FOR YOU</a></li>
                        <li><a onClick={() => this.closeSlideMenu()} style={(this.props.scrollSpy === 'companies') ? {color: styles.accent2} : {}} href="#companies">VIRTUAL COMPANIES</a></li>
                        <li><a onClick={() => this.closeSlideMenu()} style={(this.props.scrollSpy === 'contact') ? {color: styles.accent2} : {}} href="#contact">CONTACT</a></li>
                        <li><a href="https://wimmalab.github.io/blog/">BLOG</a></li>
                    </ul>
                    <ul className="social-media">
                        <li><a href="https://github.com/wimmalab"><FaGithubSquare /></a></li>
                        <li><a href="https://www.linkedin.com/company-beta/22308846/"><FaLinkedinSquare /></a></li>
                        <li><a href="https://www.facebook.com/wimmalab/"><FaFacebookSquare /></a></li>
                        <li><a href="https://twitter.com/wimmalab"><FaTwitterSquare /></a></li>
                        <li><a href="https://www.instagram.com/wimmalab/"><FaInstagram /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCe0Ssog7DURm_aTiPO2hUFw"><FaYoutubeSquare /></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
