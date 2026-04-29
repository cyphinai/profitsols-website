'use strict';

require('./styles/cyber-global.css');

var React = require('react');
var ReactDOM = require('react-dom/client');
var App = require('./App');

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
