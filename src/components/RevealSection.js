'use strict';

var React = require('react');
var MotionReveal = require('./motion').MotionReveal;

/**
 * Scroll-reveal section powered by Framer Motion.
 */
function RevealSection(props) {
  return React.createElement(MotionReveal, {
    as: props.as || 'section',
    className: props.className
  }, props.children);
}

module.exports = RevealSection;
