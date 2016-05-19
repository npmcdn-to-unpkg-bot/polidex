// Import React and HelloText class
import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import PoliticianPokedex from './PoliticianPokedex';

// Create class called WelcomeScreen that extends the base React Component class
export default class Page extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>
            <nav className="pushy pushy-left">
              <ul>
                <li className="pushy-link"><a href="#">About</a></li>
                <li><a href="#">Credits</a></li>
              </ul>
            </nav>

            <div className="site-overlay"></div>

            <div id="container">
              <div className="app clearfix">

                <header>

                  <button className="open-menu menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>

                  <a className="logo" href="index.html" title="Polidex">
                    <svg viewBox="0 0 197.2 32">
                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t.st0{fill:#FFFFFF;}\n\t\t\t\t\t\t" }} />
                      <g>
                        <path className="st0" d="M0,0.5h11.6c7,0,11.6,3.7,11.6,9.8v0.1c0,6.7-5.6,10.1-12.2,10.1H3.5v10.9H0V0.5z M11.1,17.4
                              c5.1,0,8.5-2.7,8.5-6.8v-0.1c0-4.4-3.3-6.7-8.3-6.7H3.5v13.6H11.1z" />
                        <path className="st0" d="M28.2,16.1L28.2,16.1C28.2,7.5,34.6,0,44,0s15.7,7.4,15.7,15.9V16c0,8.5-6.4,16-15.8,16S28.2,24.6,28.2,16.1z
                               M56.1,16.1L56.1,16.1C56.1,9,51,3.2,43.9,3.2S31.8,8.9,31.8,15.9V16c0,7,5.1,12.8,12.2,12.8S56.1,23.1,56.1,16.1z" />
                        <path className="st0" d="M67.1,0.5h3.5v27.7H88v3.2H67.1V0.5z" />
                        <path className="st0" d="M94.8,0.5h3.5v30.9h-3.5V0.5z" />
                        <path className="st0" d="M107.4,0.5h10.7c9.7,0,16.4,6.7,16.4,15.4V16c0,8.7-6.7,15.5-16.4,15.5h-10.7V0.5z M110.9,3.8v24.5h7.2
                              c7.8,0,12.8-5.3,12.8-12.2V16c0-6.9-5-12.2-12.8-12.2H110.9z" />
                        <path className="st0" d="M142,0.5h22.4v3.2h-18.9v10.6h16.9v3.2h-16.9v10.8h19.1v3.2H142V0.5z" />
                        <path className="st0" d="M196.8,0.5l-11.4,15.2l11.8,15.8h-4.2l-9.9-13.3l-9.9,13.3h-4l11.8-15.8L169.7,0.5h4.1l9.5,12.7l9.5-12.7
                              H196.8z" />
                      </g>
                    </svg>
                  </a>
                </header>

                <div className="page-main" id="page-main">
                  <PoliticianPokedex />
                </div>

                <div className="page-left" id="page-left">
                  <WelcomeScreen />
                </div>

                <div className="page-right" id="page-right">

                </div>

              </div>
            </div>
          </div>
        )
    }
}
