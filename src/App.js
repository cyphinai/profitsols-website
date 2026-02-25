'use strict';

var React = require('react');
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Routes = require('react-router-dom').Routes;
var Route = require('react-router-dom').Route;
var HomePage = require('./pages/Home');
var MobileAppPage = require('./pages/MobileApp');
var WebsitePage = require('./pages/Website');
var UIUXPage = require('./pages/UIUX');
var WebAppPage = require('./pages/WebApp');

function App() {
  return React.createElement(BrowserRouter, null,
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(HomePage, null) }),
      React.createElement(Route, { path: '/mobile-app-development', element: React.createElement(MobileAppPage, null) }),
      React.createElement(Route, { path: '/website-development', element: React.createElement(WebsitePage, null) }),
      React.createElement(Route, { path: '/ui-ux-development', element: React.createElement(UIUXPage, null) }),
      React.createElement(Route, { path: '/web-app-development', element: React.createElement(WebAppPage, null) })
    )
  );
}

module.exports = App;
