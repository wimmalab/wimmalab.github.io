// libs
import React from 'react';
// components
import { FaGithubSquare, FaLinkedinSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/lib/fa';
// assets
import ContactUs from '../img/contact.us.jpg';
import WimmaLogo from '../img/logo/WIMMA.blackcircle.png';

export default class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <hr />
                    <div className="contact-container">
                        <div className="left-side">
                            <h3>Marko "Narsu" Rintamäki</h3>
                            <p>marko.rintamaki@jamk.fi</p>
                            <br/>
                            <h3>Lauri Mäkinen</h3>
                            <p>lauri.makinen@jamk.fi</p>
                            <br />
                            <h3>Campus Dynamo</h3>
                            <h3>Piippukatu 2</h3>
                            <h3>40100 Jyväskylä Finland</h3>
                            <p>wimmalab@gmail.com</p>
                        </div>
                        <div className="right-side">
                            <img src={ContactUs} alt="ContactUs"></img>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href="#page-top"><img className="wimmalogo" src={WimmaLogo} alt='logo'></img></a>
                    <h5>You can also find us here</h5>
                    <div className="social-links">
                        <span><a href=""><FaGithubSquare /></a></span>
                        <span><a href=""><FaLinkedinSquare /></a></span>
                        <span><a href=""><FaFacebookSquare /></a></span>
                        <span><a href=""><FaTwitterSquare /></a></span>
                        <span><a href=""><FaInstagram /></a></span>
                        <span><a href=""><FaYoutubeSquare /></a></span>
                    </div>
                </div>
            </section>
        );
    }
}
