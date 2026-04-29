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
var PortfolioPage = require('./pages/portfolio/PortfolioPage');
var CaseStudyPage = require('./pages/portfolio/CaseStudyPage');
var CompanyPage = require('./pages/company/CompanyPage');
var ContactPage = require('./pages/contact/ContactPage');

function App() {
  return React.createElement(BrowserRouter, null,
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(HomePage, null) }),
      React.createElement(Route, { path: '/portfolio/:slug', element: React.createElement(CaseStudyPage, null) }),
      React.createElement(Route, { path: '/portfolio', element: React.createElement(PortfolioPage, null) }),
      React.createElement(Route, { path: '/company', element: React.createElement(CompanyPage, null) }),
      React.createElement(Route, { path: '/contact', element: React.createElement(ContactPage, null) }),
      React.createElement(Route, { path: '/mobile-app-development', element: React.createElement(MobileAppPage, null) }),
      React.createElement(Route, { path: '/website-development', element: React.createElement(WebsitePage, null) }),
      React.createElement(Route, { path: '/ui-ux-development', element: React.createElement(UIUXPage, null) }),
      React.createElement(Route, { path: '/web-app-development', element: React.createElement(WebAppPage, null) })
    )
  );
}

module.exports = App;
