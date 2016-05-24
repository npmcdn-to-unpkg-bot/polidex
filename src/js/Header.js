import React from 'react';

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

            <a className="logo" href="index.html" title="Polidex">
              Polidex
            </a>
          </header>
        )
    }
}
