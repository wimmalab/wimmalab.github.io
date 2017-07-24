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
                <h2>Wimma Coaches</h2>
                <hr />
                <h5>We kickstart future talents</h5>
                <div className="team-container">
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Narsu} alt={'narsu'} />
                        </div>
                        <div className="team-text">
                            <h5>Marko "Narsu" Rintamäki</h5>
                            <p>Product Owner</p>
                            <p>Narsu has set the foundations for the concept and drives the Lab.</p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/narsuman/?ppe=1" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Laurimakinen} alt={'Lauri Mäkinen'} />
                        </div>
                        <div className="team-text">
                            <h5>Lauri Mäkinen</h5>
                            <p>Head Coach</p>
                            <p>Lauri has been a trainee and now head coach focusing on agile development and team-building.
                            </p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/lauri-m%C3%A4kinen-8aa6a311b/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Paavonelimarkka} alt={'paavo-nelimarkka'} />
                        </div>
                        <div className="team-text">
                            <h5>Paavo Nelimarkka</h5>
                            <p>Team Coach</p>
                            <p>Paavo is a former trainee and now lecturer at JAMK specialized in game-development.</p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/paavonelimarkka/?ppe=1" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Juhopekki} alt={'Juho Pekki'} />
                        </div>
                        <div className="team-text">
                            <h5>Juho Pekki</h5>
                            <p>Team Coach</p>
                            <p>Juho is bringing technical superpowers to the coaching team. Juho is fluent in container technologies and test automation.
                            </p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/juho-pekki-bb3801144/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Pasihyytiainen} alt={'Pasi Hyytiäinen'} />
                        </div>
                        <div className="team-text">
                            <h5>Pasi Hyytiäinen</h5>
                            <p>Team Coach</p>
                            <p>Pasi has seen the good and the bad of software development and helps students with his decades of experience.
                            </p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/pasihyytiainenfi/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
