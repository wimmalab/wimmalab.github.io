// libs
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// assets
import PengWinM from '../img/companies/pengWin_hero.png';
import Overflow from '../img/companies/overflow_hero_2.png';
import Mysticons from '../img/companies/mysticons_hero.png';
import Iotitude from '../img/companies/iotitude.hero.png';

export default class Companies extends React.Component {
    render() {
        return (
            <section className="companies">
                <div className="container">
                    <h2> Virtual Companies</h2>
                    <hr />
                    <h5>2017 Wimma companies</h5>
                    <div className="companies-container">
                        <div className="company-icon">
                            <a href="#"><img className="company-img" src={PengWinM} alt={'pengWin_hero'} />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h1>PengWin Media</h1>
                                        <p>Web-Design | Graphics | Web-Development</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="#"><img className="company-img" src={Overflow} alt={'overflow_hero_2'} />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h1>Overflow</h1>
                                        <p>SDN | Cloud Services</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="#"><img className="company-img" src={Mysticons} alt={'mysticons_hero'} />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h1>Mysticons</h1>
                                        <p>Data-analyzers | Iot-Scouts | AI-Scouts</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="#">
                                <img className="company-img"src={Iotitude} alt={'iotitude.hero'} />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h1>Iotitude</h1>
                                        <p>Iot-products</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="company-icon">
                            <a href="#">
                                <img className="company-img"src={PengWinM} alt={'pengiwiing.hero'} />
                                <div className="company-overlay">
                                    <div className="company-text">
                                        <h1>PengWin Game</h1>
                                        <p>Game production</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeave={false}>
                    {this.props.scrollSpy === 'contact' &&
                        <span className="arrow">
                            <a href="#page-top">
                                <svg width="40" height="40">
                                    <path d="M1,40 20,0" strokeWidth="4" />
                                    <path d="M20,0 39,40" strokeWidth="4" />
                                </svg>
                            </a>
                        </span>
                    }
                    {this.props.scrollSpy !== 'contact' &&
                        <span className="arrow">
                            <a href="#contact">
                                <svg width="40" height="40">
                                    <path d="M1,0 20,40" strokeWidth="4" />
                                    <path d="M20,40 39,0" strokeWidth="4" />
                                </svg>
                            </a>
                        </span>
                    }
                </ReactCSSTransitionGroup>
            </section>
        );
    }
}