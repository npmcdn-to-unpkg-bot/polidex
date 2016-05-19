// Import CSS
import '../css/style.scss';

// Import React and JS
import WelcomeScreen from './WelcomeScreen';
import PoliticianPokedex from './PoliticianPokedex';
import React from 'react';
import ReactDOM from 'react-dom';

// Render!
ReactDOM.render(
  <WelcomeScreen />,
  document.getElementById('page-left')
);

ReactDOM.render(
  <PoliticianPokedex />,
  document.getElementById('page-main')
);
