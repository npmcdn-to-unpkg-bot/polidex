import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import PoliticianPokedex from './PoliticianPokedex';
import Header from './Header';
import OffCanvas from './OffCanvas';

export default class AusMap extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>
            <OffCanvas />

            <div className="site-overlay"></div>

            <div id="container">
              <div className="app clearfix">

                <Header />

                <div className="page-main" id="page-main">


                </div>

              </div>
            </div>
          </div>
        )
    }
}
