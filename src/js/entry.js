// Import CSS
import '../css/style.scss';

// Import React and JS
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, RouteHandler, Route, IndexRedirect, IndexRoute, Link, hashHistory, browserHistory } from '../../node_modules/react-router/lib/index';

// Pages
import Page from './Page';
import ElectorateMap from './ElectorateMap';
import PoliticianPokedex from './PoliticianPokedex';
import PoliticianPopup from './PoliticianPopup';

const NotFound = () => <h1>Page Not Found</h1>;

// Render!
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Page}>
            <IndexRedirect to="politicians" />
            <Route path="politicians" component={PoliticianPokedex} />
            <Route path="map" component={ElectorateMap} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('page'));

// :polId"
