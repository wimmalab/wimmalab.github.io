// libs
import React from 'react';
// assets
import Laurimakinen from "../img/profile/Lauri_makinen.jpg";
import Narsu from "../img/profile/Marko_rintamaki.jpg";
import Paavonelimarkka from "../img/profile/Paavo_nelimarkka.jpg";
import Pasihyytiainen from "../img/profile/Pasi_hyytiainen.jpg";
import Juhopekki from "../img/profile/Juho_pekki.jpg";
// components
import LinkedIn from 'react-icons/lib/fa/linkedin-square';

export default class Who extends React.Component {
    render() {
        return (
            <div className="who-content">
                <h2>Our Team</h2>
                <hr />
                <div className="team-container">
                    <div className="team-member">
                        <div className="team-img">
                            <img src={Pasihyytiainen} alt={'Pasi Hyytiäinen'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Pasi Hyytiäinen</h4>
                            <p>Team Coach</p>
                            <p>Pasi has seen the good and the bad of software development and helps students with his decades of experience.
                            </p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-img">
                            <img src={Laurimakinen} alt={'Lauri Mäkinen'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Lauri Mäkinen</h4>
                            <p>Head Coach</p>
                            <p>Lauri has also been a trainee and now head coach focusing on agile development and team-building
                            </p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-img">
                            <img src={Paavonelimarkka} alt={'paavo-nelimarkka'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Paavo Nelimarkka</h4>
                            <p>Team Coach</p>
                            <p>Paavo is a former trainee and now lecturer at JAMK specialized in game-development
                            </p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-img">
                            <img src={Juhopekki} alt={'Juho Pekki'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Juho Pekki</h4>
                            <p>Team Coach</p>
                            <p>Juho is bringing technical superpowers to the coaching team. Juho is fluent in container technologies and test automation
                            </p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-img">
                            <img src={Narsu} alt={'narsu'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Marko "Narsu" Rintamäki</h4>
                            <p>Product Owner</p>
                            <p>Narsu has set the foundations for the concept and drives the Lab
                            </p>
                        </div>
                    </div>
                </div>
                <div className="who-text">
                </div>
            </div>
        );
    }
}
