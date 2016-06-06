// Import CSS
import '../css/style.scss';

// Import React and JS
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from '../../node_modules/react-router/lib/index';

// Pages
import Page from './Page';
import AusMap from './AusMap';

// Render!
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Page} />
    <Route path="/map" component={AusMap} />
  </Router>
), document.getElementById('page'));
