// libs
import React from 'react';
//img
import Laurimakinen from "../img/profile/Lauri_makinen.jpg";
import Narsu from "../img/profile/Marko_rintamaki.jpg";
import Paavonelimarkka from "../img/profile/Paavo_nelimarkka.jpg";
//icons
import LinkedIn from 'react-icons/lib/fa/linkedin-square';

export default class Who extends React.Component {
    render() {
        return (
            <div className="who-content">
                <h2>Our Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <img src={Laurimakinen} alt={'lauri-makinen'} />
                        <div className="team-text">
                            <h4>Lauri Mäkinen</h4>
                            <p>Head Coach</p>
                        </div>
                        <h5><LinkedIn/></h5>
                    </div>
                    <div className="team-member">
                        <img src={Narsu} alt={'narsu'} />
                        <div className="team-text">
                            <h4>Marko "Narsu" Rintamäki</h4>
                            <p>Product Owner</p>
                        </div>
                        <h5><LinkedIn/></h5>
                    </div>
                    <div className="team-member">
                        <img src={Paavonelimarkka} alt={'paavo-nelimarkka'} />
                        <div className="team-text">
                            <h4>Paavo Nelimarkka</h4>
                            <p>Team Coach</p>
                        </div>
                        <h5><LinkedIn/></h5>
                    </div>
                </div>
                <div className="who-text">
                    <h3>Above hover element doesnt work propeply</h3>
                    <p>WIMMA Lab is organized by WIMMA coaches.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        );
    }
}
