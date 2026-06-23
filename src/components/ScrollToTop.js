'use strict';

var React = require('react');
var useState = React.useState;
var useEffect = React.useEffect;
var motion = require('./motion').motion;
var AnimatePresence = require('./motion').AnimatePresence;
var prefersReducedMotion = require('./motion').prefersReducedMotion;
require('./ScrollToTop.css');

function IconChevronUp() {
  return React.createElement('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.25',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'scroll-to-top__icon',
    'aria-hidden': true
  },
    React.createElement('polyline', { points: '18 15 12 9 6 15' })
  );
}

function ScrollToTop() {
  var _useState = useState(false);
  var visible = _useState[0];
  var setVisible = _useState[1];
  var reduced = prefersReducedMotion();

  useEffect(function() {
    var onScroll = function() {
      setVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return function() {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  var scrollUp = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return React.createElement(AnimatePresence, null,
    visible
      ? React.createElement(motion.button, {
          key: 'scroll-to-top',
          type: 'button',
          className: 'scroll-to-top scroll-to-top--visible',
          onClick: scrollUp,
          'aria-label': 'Back to top',
          initial: reduced ? false : { opacity: 0, y: 16, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: reduced ? undefined : { opacity: 0, y: 12, scale: 0.92 },
          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          whileHover: reduced ? undefined : { y: -3, scale: 1.03 },
          whileTap: reduced ? undefined : { scale: 0.96 }
        },
          IconChevronUp(),
          React.createElement('span', { className: 'scroll-to-top__label' }, 'Top')
        )
      : null
  );
}

module.exports = ScrollToTop;
