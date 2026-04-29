'use strict';

var React = require('react');
var useId = React.useId;

/**
 * Large hero vector decoration (aligned with case study pages).
 */
function DecoHeroVectors() {
  var uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  var g1 = 'chg1-' + uid;
  var g2 = 'chg2-' + uid;
  return React.createElement('svg', {
    className: 'cyber-deco cyber-deco--hero',
    viewBox: '0 0 600 320',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true
  },
    React.createElement('defs', null,
      React.createElement('linearGradient', { id: g1, x1: '0', y1: '0', x2: '1', y2: '1' },
        React.createElement('stop', { offset: '0%', stopColor: '#00cbf0', stopOpacity: '0.45' }),
        React.createElement('stop', { offset: '100%', stopColor: '#ee2c65', stopOpacity: '0.22' })
      ),
      React.createElement('linearGradient', { id: g2, x1: '1', y1: '0', x2: '0', y2: '1' },
        React.createElement('stop', { offset: '0%', stopColor: '#d4ad39', stopOpacity: '0.38' }),
        React.createElement('stop', { offset: '100%', stopColor: '#00407f', stopOpacity: '0.32' })
      )
    ),
    React.createElement('path', {
      d: 'M420 40h120v180H420z',
      fill: 'none',
      stroke: 'url(#' + g1 + ')',
      strokeWidth: '1.5',
      opacity: '0.85'
    }),
    React.createElement('path', {
      d: 'M460 80h40v100h-40z',
      fill: 'rgba(0,203,240,0.06)',
      stroke: 'rgba(0,203,240,0.32)',
      strokeWidth: '1'
    }),
    React.createElement('circle', { cx: '120', cy: '200', r: '72', fill: 'url(#' + g2 + ')', opacity: '0.32' }),
    React.createElement('path', {
      d: 'M40 120 L180 100 L200 220 L60 260 Z',
      fill: 'none',
      stroke: 'rgba(238,44,101,0.4)',
      strokeWidth: '1.2'
    }),
    React.createElement('path', {
      d: 'M280 200h8v8h-8v8h-8v-8h-8v-8h8v-8h8v8z',
      fill: '#00cbf0',
      opacity: '0.45'
    }),
    React.createElement('path', {
      d: 'M320 60l20 20-20 20-20-20 20-20z',
      fill: 'none',
      stroke: '#d4ad39',
      strokeWidth: '1.5',
      opacity: '0.65'
    })
  );
}

/** Corner / section mesh accent */
function DecoSectionMesh() {
  return React.createElement('svg', {
    className: 'cyber-deco cyber-deco--mesh',
    viewBox: '0 0 200 200',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true
  },
    React.createElement('path', {
      d: 'M20 20h160v2H20zm0 40h120v2H20zm0 80h160v2H20z',
      fill: 'rgba(0,203,240,0.22)'
    }),
    React.createElement('circle', { cx: '170', cy: '50', r: '6', fill: '#ee2c65', opacity: '0.65' }),
    React.createElement('circle', { cx: '40', cy: '150', r: '4', fill: '#00cbf0', opacity: '0.75' })
  );
}

/** Floating orbs for contact / company hero */
function DecoFloatingOrbs() {
  return React.createElement('div', { className: 'cyber-deco-orbs', 'aria-hidden': true },
    React.createElement('span', { className: 'cyber-deco-orb cyber-deco-orb--1' }),
    React.createElement('span', { className: 'cyber-deco-orb cyber-deco-orb--2' }),
    React.createElement('span', { className: 'cyber-deco-orb cyber-deco-orb--3' })
  );
}

module.exports = {
  DecoHeroVectors: DecoHeroVectors,
  DecoSectionMesh: DecoSectionMesh,
  DecoFloatingOrbs: DecoFloatingOrbs
};
