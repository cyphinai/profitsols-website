'use strict';

var React = require('react');
var useEffect = React.useEffect;
var useLocation = require('react-router-dom').useLocation;
var Outlet = require('react-router-dom').Outlet;
var motion = require('./motion').motion;
var AnimatePresence = require('./motion').AnimatePresence;
var prefersReducedMotion = require('./motion').prefersReducedMotion;
var ScrollToTop = require('./ScrollToTop');

function PageTransitionLayout() {
  var location = useLocation();
  var reduced = prefersReducedMotion();

  useEffect(function() {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return React.createElement(React.Fragment, null,
    React.createElement(AnimatePresence, { mode: 'wait' },
      React.createElement(motion.div, {
        key: location.pathname,
        initial: reduced ? false : { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: reduced ? undefined : { opacity: 0, y: -10 },
        transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
        style: { width: '100%' }
      },
        React.createElement(Outlet, null)
      )
    ),
    React.createElement(ScrollToTop, null)
  );
}

module.exports = PageTransitionLayout;
