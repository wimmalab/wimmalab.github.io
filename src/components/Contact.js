// libs
import React from 'react';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Facebook from 'react-icons/lib/fa/facebook-square';

export default class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                <h2>Contact</h2>
                <div className="contact-container">
                <div className="leftside">
                <h3>Marko "Narsu" Rintamäki</h3>
                <p>
                marko.rintamaki@jamk.fi
                </p>
                <h3>Lauri Mäkinen</h3>
                <p>
                lauri.makinen@jamk.fi
                </p>
                </div>
                <div className="rightside">
                <p>Campus Dynamo</p>
                <p>
                Piippukatu 2,
                40100 Jyväskylä
                Finland</p>
                <p>wimmalab@gmail.com</p>
                </div>
                </div>
                </div>
                <div className="footer">
                How about Google maps on ahead?
                <h3><LinkedIn/></h3>
                <h3><Facebook/></h3>
                </div>
            </section>
        );
    }
}
