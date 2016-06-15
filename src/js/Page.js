import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from '../../node_modules/react-router/lib/index';

import Header from './Header';
import OffCanvas from './OffCanvas';

import PoliticianPokedex from './PoliticianPokedex';

export default class Page extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        children: React.PropTypes.node
    };

    render() {
        return (
          <div>
            <OffCanvas />

            <div className="site-overlay"></div>

            <div id="container">
              <div className="app overtop clearfix">

                <Header />

                <div className="page-main" id="page-main">
                    {this.props.children}
                </div>

              </div>
            </div>
          </div>
        )
    }
}
