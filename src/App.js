'use strict';

var React = require('react');
var Suspense = React.Suspense;
var lazy = React.lazy;
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Routes = require('react-router-dom').Routes;
var Route = require('react-router-dom').Route;

function lazyCjs(importer) {
  return lazy(function() {
    return importer().then(function(mod) {
      var resolved = (mod && (mod.default || mod)) || mod;
      return { default: resolved };
    });
  });
}

// Keep the home route eager to improve LCP/first paint.
var HomePage = require('./pages/Home');
var MobileAppPage = lazyCjs(function() { return import('./pages/MobileApp'); });
var WebsitePage = lazyCjs(function() { return import('./pages/Website'); });
var UIUXPage = lazyCjs(function() { return import('./pages/UIUX'); });
var WebAppPage = lazyCjs(function() { return import('./pages/WebApp'); });
var PortfolioPage = lazyCjs(function() { return import('./pages/portfolio/PortfolioPage'); });
var CaseStudyPage = lazyCjs(function() { return import('./pages/portfolio/CaseStudyPage'); });
var CompanyPage = lazyCjs(function() { return import('./pages/company/CompanyPage'); });
var ContactPage = lazyCjs(function() { return import('./pages/contact/ContactPage'); });

function App() {
  return React.createElement(BrowserRouter, null,
    React.createElement(Suspense, { fallback: null },
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
    )
  );
}

module.exports = App;
