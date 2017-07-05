// libs
import React from 'react';

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
              Add fontawesome and icons here! :)
                </div>
            </section>
        );
    }
}
