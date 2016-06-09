import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from '../../node_modules/react-router/lib/index';

import PoliticianPokedex from './PoliticianPokedex';
import Header from './Header';
import OffCanvas from './OffCanvas';
import AusMap from './AusMap';

export default class Page extends React.Component {
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
                    <PoliticianPokedex />
                </div>

              </div>
            </div>
          </div>
        )
    }
}
