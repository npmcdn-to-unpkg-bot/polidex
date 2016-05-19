// Import React and HelloText class
import React from 'react';
import ElectorateMap from './mapviews/electorates';

// Create class called WelcomeScreen that extends the base React Component class
export default class WelcomeScreen extends React.Component {
    constructor() {
        super();
    }

    menuClick(e) {
        console.log('Click');
    }

    render() {
        return (
            <section className="home-menu">

                <a className="house" href="#" style={{backgroundImage: 'url(../../img/content/houseofreps.jpg)'}} onClick={ this.menuClick.bind(this) }>
                  <div className="overlay">
                    <div className="title">House of Representatives</div>
                  </div>
                </a>
                <a className="senate" href="#" style={{backgroundImage: 'url(../../img/content/senate.jpg)'}} onClick={ this.menuClick.bind(this) }>
                  <div className="overlay">
                    <div className="title">Senate</div>
                  </div>
                </a>
                <a className="electorates" href="#" style={{backgroundImage: 'url(../../img/content/electorates.jpg)'}} onClick={ this.menuClick.bind(this) }>
                  <div className="overlay">
                    <div className="title">Electorates</div>
                  </div>
                </a>
                <a className="states" href="#" style={{backgroundImage: 'url(../../img/content/states.jpg)'}} onClick={ this.menuClick.bind(this) }>
                  <div className="overlay">
                    <div className="title">States</div>
                  </div>
                </a>

            </section>
        )
    }
}
