// libs
import React from 'react';
import { FaGithubSquare, FaLinkedinSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/lib/fa';

export default class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <div className="contact-container">
                        <div className="left-side">
                            <h3>Marko "Narsu" Rintamäki</h3>
                            <p>marko.rintamaki@jamk.fi</p>
                            <h3>Lauri Mäkinen</h3>
                            <p>lauri.makinen@jamk.fi</p>
                        </div>
                        <hr />
                        <div className="right-side">
                            <p>Campus Dynamo</p>
                            <p>Piippukatu 2,
                            40100 Jyväskylä
                            Finland</p>
                            <p>wimmalab@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
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
