// libs
import React from 'react';
// assets
import PengWinM from '../img/companies/media-hero.png';
import Overflow from '../img/companies/overflow-hero.png';
import Mysticons from '../img/companies/mysticons-hero.png';
import Iotitude from '../img/companies/iotitude-hero.png';
import PengWinG from '../img/companies/game-hero.png';
import { FaArrowCircleRight } from 'react-icons/lib/fa/';

export default class Companies extends React.Component {
    render() {
        return (
            <section className="companies">
                <div className="container">
                    <h2> Virtual Companies</h2>
                    <hr />
                    <h5>2017 Wimma companies</h5>
                    <div className="companies-container">
                        <div className="company-icon pengwin-media">
                            <a href="https://wimmalab.github.io/pengwinmedia">
                                <img className="company-img" src={PengWinM} alt='pengWin_hero' />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h4>PengWin Media</h4>
                                        <p>Web-Design | Graphics | Web-Development | Video editing | UX-Design | Social Media</p>
                                        <div className="readmorecompany"><FaArrowCircleRight /></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="https://wimmalab.github.io/overflow">
                                <img className="company-img" src={Overflow} alt='overflow_hero_2'/>
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h4>Overflow</h4>
                                        <p>Network Solutions | Software Defined Networks | Cloud Services</p>
                                        <div className="readmorecompany"><FaArrowCircleRight /></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="https://wimmalab.github.io/mysticons">
                                <img className="company-img" src={Mysticons} alt='mysticons_hero' />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h4>Mysticons</h4>
                                        <p>Data-analyzing | Iot-Scouts | AI-Scouts</p>
                                        <div className="readmorecompany"><FaArrowCircleRight /></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="https://wimmalab.github.io/iotitude">
                                <img className="company-img"src={Iotitude} alt='iotitude.hero' />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h4>Iotitude</h4>
                                        <p>Internet Of Things | Full Stack Development</p>
                                        <div className="readmorecompany"><FaArrowCircleRight /></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="https://wimmalab.github.io/pengwingame">
                                <img className="company-img"src={PengWinG} alt='pengiwiing.hero' />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h4>PengWin Game</h4>
                                        <p>Game production</p>
                                        <div className="readmorecompany"><FaArrowCircleRight /></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span className="arrow">
                    <a href="#contact">
                        <i></i>
                    </a>
                </span>
            </section>
        );
    }
}
