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

/** Brand P mark (matches public/logo-p-gold.svg): rounded path, aurora gradient mint → violet → magenta → coral */
var LOGO_P_PATH =
  'M318.00 405.20 Q303.60 416.00 287.01 409.02 L141.59 347.88 Q125.00 340.90 136.86 327.36 L139.94 323.84 Q151.80 310.30 169.80 310.17 L324.30 309.03 Q342.30 308.90 356.68 298.07 L374.12 284.93 Q388.50 274.10 384.91 256.46 L380.19 233.34 Q376.60 215.70 360.82 207.04 L298.58 172.86 Q282.80 164.20 281.31 146.26 L279.79 127.84 Q278.30 109.90 295.78 114.19 L408.22 141.81 Q425.70 146.10 431.87 163.01 L461.13 243.29 Q467.30 260.20 464.50 277.98 L464.20 279.92 Q461.40 297.70 447.00 308.50 Z M226.30 267.10 Q214.30 267.10 210.27 255.80 L158.39 110.28 Q154.80 100.20 154.80 89.50 L154.80 88.60 Q154.80 77.90 162.62 70.59 L181.74 52.70 Q190.50 44.50 194.01 55.98 L234.59 188.82 Q238.10 200.30 246.87 208.49 L253.65 214.81 Q262.00 222.60 273.42 222.60 L274.38 222.60 Q285.80 222.60 295.49 228.65 L312.46 239.25 Q321.50 244.90 321.50 255.56 L321.50 256.44 Q321.50 267.10 310.84 267.10 Z';

/** Nav P mark only (lockup left); same gradient as public/logo-p-gold.svg */
function LogoMarkNav() {
  return React.createElement(
    'svg',
    {
      className: 'logo-icon logo-icon--cyber logo-lockup__mark',
      viewBox: '0 0 512 512',
      focusable: false,
      'aria-hidden': true
    },
    React.createElement(
      'defs',
      null,
      React.createElement(
        'linearGradient',
        { id: 'psNavBrand', x1: '50%', y1: '0%', x2: '50%', y2: '100%' },
        React.createElement('stop', { offset: '0%', stopColor: '#5EECD5' }),
        React.createElement('stop', { offset: '30%', stopColor: '#9787FF' }),
        React.createElement('stop', { offset: '58%', stopColor: '#DA47E8' }),
        React.createElement('stop', { offset: '100%', stopColor: '#FF6B5C' })
      )
    ),
    React.createElement(
      'g',
      { className: 'logo-p-mark' },
      React.createElement(
        'g',
        { transform: 'translate(512 0) scale(-1 1)' },
        React.createElement(
          'g',
          { transform: 'rotate(180 256 256)' },
          React.createElement('path', {
            fill: 'url(#psNavBrand)',
            fillRule: 'nonzero',
            shapeRendering: 'geometricPrecision',
            d: LOGO_P_PATH
          })
        )
      )
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
        className: 'logo logo--cyber',
        onClick: closeAll,
        'aria-current': isHome ? 'page' : undefined,
        'aria-label': 'ProfitSols — solutions for growth'
      },
        React.createElement(
          'span',
          { className: 'logo-lockup' },
          React.createElement(LogoMarkNav, null),
          React.createElement(
            'span',
            { className: 'logo-lockup__type' },
            React.createElement(
              'span',
              { className: 'logo-lockup__title' },
              React.createElement('span', { className: 'logo-lockup__profit' }, 'PROFIT'),
              React.createElement('span', { className: 'logo-lockup__sols' }, 'SOLS')
            ),
            React.createElement('span', { className: 'logo-lockup__tag' }, 'SOLUTIONS FOR GROWTH'),
            React.createElement('span', { className: 'logo-lockup__rule', 'aria-hidden': true })
          )
        )
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
