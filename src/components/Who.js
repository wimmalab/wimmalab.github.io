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
                        </div>
                    </div>
                </div>
                <div className="who-text">
                    <p>WIMMA Lab is organized by WIMMA coaches.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        );
    }
}
