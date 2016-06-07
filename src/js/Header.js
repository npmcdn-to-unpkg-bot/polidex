import React from 'react';
import { Link } from '../../node_modules/react-router/lib/index';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <header>

            <button className="open-menu menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Nav */}
            <nav>
              <ul>
                <li><Link to="/" activeClassName="active">Politicians</Link></li>
                <li><Link to="/map" activeClassName="active">Map</Link></li>
              </ul>
            </nav>

            <a className="logo" href="index.html" title="Polidex">
              <svg viewBox="0 0 32.8 32">
                <path className="st0" d="M31.1,30.3v-1.7h-3.2V18h3.6v-2.2h-1.4l0.3,0v-1L16.8,4.6v-2h1.3h1.3l-1.3,1h2.6v-2h-1.3v-1h-2.6V0h-0.6v4.4
          L2.4,14.7v1l0.3,0H1.3V18h3.6v10.6H1.6v1.7H0V32h32.8v-1.7H31.1z M16.4,8.8c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2
          c-1.2,0-2.2-1-2.2-2.2C14.2,9.8,15.2,8.8,16.4,8.8z M11.7,28.5H7.3V18h4.5V28.5z M18.6,28.5h-4.5V18h0h2.2h2.2V28.5z M25.5,28.5H21
          V18h4.5V28.5z" />
              </svg>
              Polidex
            </a>
          </header>
        )
    }
}
