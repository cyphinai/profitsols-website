'use strict';

var React = require('react');
var useState = React.useState;
var Link = require('react-router-dom').Link;
var useLocation = require('react-router-dom').useLocation;
require('./SharedHeader.css');

var SERVICES = [
  { label: 'Mobile App Development', path: '/mobile-app-development' },
  { label: 'Website Development', path: '/website-development' },
  { label: 'UI/UX Development', path: '/ui-ux-development' },
  { label: 'Web App Development', path: '/web-app-development' }
];

function LogoIcon() {
  return React.createElement(
    'svg',
    {
      className: 'logo-icon logo-icon--cyber',
      viewBox: '0 0 64 64',
      width: '40',
      height: '40',
      role: 'img',
      'aria-label': 'ProfitSols'
    },
    React.createElement(
      'defs',
      null,
      React.createElement(
        'filter',
        { id: 'pGlow', x: '-40%', y: '-40%', width: '180%', height: '180%' },
        React.createElement('feGaussianBlur', { stdDeviation: '2.6', result: 'blur' }),
        React.createElement(
          'feColorMatrix',
          {
            in: 'blur',
            type: 'matrix',
            values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -6',
            result: 'glow'
          }
        ),
        React.createElement('feMerge', null,
          React.createElement('feMergeNode', { in: 'glow' }),
          React.createElement('feMergeNode', { in: 'SourceGraphic' })
        )
      ),
      React.createElement(
        'clipPath',
        { id: 'pClip' },
        React.createElement('path', {
          d: 'M22 10h14c9 0 16 6.7 16 15.2S45 40.3 36 40.3H30V54H22V10Zm8 7.4v15.6h6c4.5 0 8-3.3 8-7.8s-3.5-7.8-8-7.8h-6Z'
        })
      ),
      React.createElement(
        'linearGradient',
        { id: 'scanGrad', x1: '0', y1: '0', x2: '1', y2: '0' },
        React.createElement('stop', { offset: '0%', stopColor: '#00CBF0', stopOpacity: '0' }),
        React.createElement('stop', { offset: '50%', stopColor: '#00CBF0', stopOpacity: '0.55' }),
        React.createElement('stop', { offset: '100%', stopColor: '#00CBF0', stopOpacity: '0' })
      )
    ),
    React.createElement(
      'g',
      { className: 'p-mark', filter: 'url(#pGlow)' },
      React.createElement(
        'g',
        { clipPath: 'url(#pClip)' },
        React.createElement('rect', { x: '0', y: '0', width: '32', height: '32', fill: '#D4AD39' }),
        React.createElement('rect', { x: '32', y: '0', width: '32', height: '32', fill: '#EE2C65' }),
        React.createElement('rect', { x: '0', y: '32', width: '32', height: '32', fill: '#00407F' }),
        React.createElement('rect', { x: '32', y: '32', width: '32', height: '32', fill: '#00CBF0' })
      ),
      React.createElement('path', {
        className: 'p-outline',
        d: 'M22 10h14c9 0 16 6.7 16 15.2S45 40.3 36 40.3H30V54H22V10Zm8 7.4v15.6h6c4.5 0 8-3.3 8-7.8s-3.5-7.8-8-7.8h-6Z',
        fill: 'none',
        stroke: 'rgba(255,255,255,0.75)',
        strokeWidth: '1.4',
        strokeLinejoin: 'round'
      })
    ),
    React.createElement('rect', { className: 'scanline', x: '10', y: '8', width: '44', height: '4', rx: '2', fill: 'url(#scanGrad)' }),
    React.createElement(
      'g',
      { className: 'circuit-layer', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { className: 'circuit circuit--a', d: 'M12 20h10l4 4h8', stroke: '#00CBF0', strokeWidth: '1.2' }),
      React.createElement('path', { className: 'circuit circuit--b', d: 'M52 26h-8l-4 4H26', stroke: '#EE2C65', strokeWidth: '1.2' }),
      React.createElement('path', { className: 'circuit circuit--c', d: 'M14 44h12l4-4h10', stroke: '#D4AD39', strokeWidth: '1.2' }),
      React.createElement('path', { className: 'circuit circuit--d', d: 'M50 44h-10l-4 4H24', stroke: '#00CBF0', strokeWidth: '1.2' }),
      React.createElement('rect', { className: 'node', x: '10.5', y: '19', width: '3', height: '3', rx: '0.6', fill: '#00CBF0', stroke: 'none' }),
      React.createElement('rect', { className: 'node', x: '50.5', y: '25', width: '3', height: '3', rx: '0.6', fill: '#EE2C65', stroke: 'none' }),
      React.createElement('rect', { className: 'node', x: '12.5', y: '43', width: '3', height: '3', rx: '0.6', fill: '#D4AD39', stroke: 'none' })
    )
  );
}

function IconFileText() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg icon-sm' },
    React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
    React.createElement('polyline', { points: '14 2 14 8 20 8' }),
    React.createElement('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
    React.createElement('line', { x1: '16', y1: '17', x2: '8', y2: '17' }),
    React.createElement('polyline', { points: '10 9 9 9 8 9' })
  );
}

function IconChevronDown() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: '14', height: '14', className: 'nav-dropdown-chevron' },
    React.createElement('polyline', { points: '6 9 12 15 18 9' })
  );
}

function SharedHeader() {
  var location = useLocation();
  var path = location.pathname || '';
  var currentService = SERVICES.find(function(s) { return s.path === path; });
  var servicesLabel = currentService ? currentService.label : 'Services';
  var onServicePage = !!currentService;
  var isHome = path === '/' || path === '';

  var _useState = useState(false);
  var menuOpen = _useState[0];
  var setMenuOpen = _useState[1];
  var _useState2 = useState(false);
  var servicesOpen = _useState2[0];
  var setServicesOpen = _useState2[1];

  var closeAll = function() {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return React.createElement('header', { className: 'header header--cyber' },
    React.createElement('div', { className: 'header-bg' }),
    React.createElement('div', { className: 'header-accent' }),
    React.createElement('div', { className: 'header-inner header-inner--cyber' },
      React.createElement(Link, {
        to: '/',
        className: 'logo logo--cyber' + (isHome ? ' logo--cyber-active' : ''),
        onClick: closeAll,
        'aria-current': isHome ? 'page' : undefined
      },
        React.createElement(LogoIcon, null),
        React.createElement('span', { className: 'logo-text logo-text--cyber' }, 'ProfitSols')
      ),
      React.createElement('button', {
        className: 'nav-toggle nav-toggle--cyber',
        'aria-label': 'Toggle menu',
        onClick: function() { setMenuOpen(!menuOpen); setServicesOpen(false); }
      },
        React.createElement('span', { className: 'nav-toggle-bar' }),
        React.createElement('span', { className: 'nav-toggle-bar' }),
        React.createElement('span', { className: 'nav-toggle-bar' })
      ),
      React.createElement('nav', { className: 'nav nav--cyber' + (menuOpen ? ' nav-open' : '') },
        React.createElement('div', {
          className: 'nav-dropdown' + (servicesOpen ? ' open' : ''),
          onMouseEnter: function() { setServicesOpen(true); },
          onMouseLeave: function() { setServicesOpen(false); }
        },
          React.createElement('button', {
            type: 'button',
            className: 'nav-dropdown-trigger nav-link nav-link--cyber' + (onServicePage ? ' nav-link--active' : ''),
            'aria-expanded': servicesOpen,
            'aria-haspopup': 'true',
            onClick: function() { setServicesOpen(!servicesOpen); }
          },
            servicesLabel,
            React.createElement(IconChevronDown, null)
          ),
          React.createElement('div', { className: 'nav-dropdown-menu' + (servicesOpen ? ' open' : '') },
            SERVICES.map(function(s, i) {
              var active = path === s.path;
              return React.createElement(Link, {
                key: i,
                to: s.path,
                className: 'nav-dropdown-item nav-dropdown-item--cyber' + (active ? ' nav-dropdown-item--active' : ''),
                onClick: closeAll,
                'aria-current': active ? 'page' : undefined
              }, s.label);
            })
          )
        ),
        React.createElement(Link, {
          to: '/portfolio',
          className: 'nav-link nav-link--cyber' + (path === '/portfolio' || path.indexOf('/portfolio/') === 0 ? ' nav-link--active' : ''),
          onClick: closeAll,
          'aria-current': path === '/portfolio' || path.indexOf('/portfolio/') === 0 ? 'page' : undefined
        }, 'Portfolio'),
        React.createElement(Link, {
          to: '/company',
          className: 'nav-link nav-link--cyber' + (path === '/company' ? ' nav-link--active' : ''),
          onClick: closeAll,
          'aria-current': path === '/company' ? 'page' : undefined
        }, 'Company'),
        React.createElement(Link, {
          to: '/contact',
          className: 'nav-link nav-link--cyber' + (path === '/contact' ? ' nav-link--active' : ''),
          onClick: closeAll,
          'aria-current': path === '/contact' ? 'page' : undefined
        }, 'Contact')
      ),
      React.createElement('div', { className: 'header-actions header-actions--cyber' },
        React.createElement(Link, {
          to: '/contact',
          className: 'btn-quote btn-quote--cyber' + (path === '/contact' ? ' btn-quote--cyber-active' : ''),
          onClick: closeAll
        },
          React.createElement(IconFileText, null),
          'Get a Quote'
        )
      )
    )
  );
}

module.exports = SharedHeader;
