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
                        <div className="team-header">
                            <img src={Pasihyytiainen} alt={'Pasi Hyytiäinen'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Pasi Hyytiäinen</h4>
                            <p>Team Coach</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Laurimakinen} alt={'Lauri Mäkinen'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Lauri Mäkinen</h4>
                            <p>Head Coach</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Paavonelimarkka} alt={'paavo-nelimarkka'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Paavo Nelimarkka</h4>
                            <p>Team Coach</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Juhopekki} alt={'Juho Pekki'} />
                            <span className="team-icon"><LinkedIn/></span>
                        </div>
                        <div className="team-text">
                            <h4>Juho Pekki</h4>
                            <p>Team Coach</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
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
                </div>
            </div>
        );
    }
}
