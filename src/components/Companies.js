// libs
import React from 'react';
import PengWinM from '../img/companies/pengWin_hero.png';

export default class Companies extends React.Component {
    render() {
        return (
            <section className="companies">
                <div className="container"><img src={PengWinM} alt={PengWinM} /></div>
            </section>
        );
    }
}
