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
  return React.createElement('svg', {
    className: 'logo-icon',
    viewBox: '0 0 40 40',
    width: '40',
    height: '40'
  },
    React.createElement('path', { d: 'M8 4L4 8L4 32L8 36L32 36L36 32L36 8L32 4Z', fill: '#D4AD39' }),
    React.createElement('path', { d: 'M12 8L8 12L8 28L12 32L28 32L32 28L32 12L28 8Z', fill: '#EE2C65' }),
    React.createElement('path', { d: 'M20 12L12 20L20 28L28 20Z', fill: '#00407F' }),
    React.createElement('path', { d: 'M20 16L16 20L20 24L24 20Z', fill: '#00CBF0' })
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

  return React.createElement('header', { className: 'header' },
    React.createElement('div', { className: 'header-inner' },
      React.createElement(Link, { to: '/', className: 'logo', onClick: closeAll },
        React.createElement(LogoIcon, null),
        React.createElement('span', { className: 'logo-text' }, 'ProfitSols')
      ),
      React.createElement('button', {
        className: 'nav-toggle',
        'aria-label': 'Toggle menu',
        onClick: function() { setMenuOpen(!menuOpen); setServicesOpen(false); }
      },
        React.createElement('span', { className: 'nav-toggle-bar' }),
        React.createElement('span', { className: 'nav-toggle-bar' }),
        React.createElement('span', { className: 'nav-toggle-bar' })
      ),
      React.createElement('nav', { className: 'nav' + (menuOpen ? ' nav-open' : '') },
        React.createElement('div', {
          className: 'nav-dropdown' + (servicesOpen ? ' open' : ''),
          onMouseEnter: function() { setServicesOpen(true); },
          onMouseLeave: function() { setServicesOpen(false); }
        },
          React.createElement('button', {
            type: 'button',
            className: 'nav-dropdown-trigger nav-link',
            'aria-expanded': servicesOpen,
            'aria-haspopup': 'true',
            onClick: function() { setServicesOpen(!servicesOpen); }
          },
            servicesLabel,
            React.createElement(IconChevronDown, null)
          ),
          React.createElement('div', { className: 'nav-dropdown-menu' + (servicesOpen ? ' open' : '') },
            SERVICES.map(function(s, i) {
              return React.createElement(Link, {
                key: i,
                to: s.path,
                className: 'nav-dropdown-item',
                onClick: closeAll
              }, s.label);
            })
          )
        ),
        React.createElement(Link, { to: '/#portfolio', className: 'nav-link', onClick: closeAll }, 'Portfolio'),
        React.createElement(Link, { to: '/#company', className: 'nav-link', onClick: closeAll }, 'Company'),
        React.createElement(Link, { to: '/#contact', className: 'nav-link', onClick: closeAll }, 'Contact')
      ),
      React.createElement('div', { className: 'header-actions' },
        React.createElement(Link, { to: '/#contact', className: 'btn-quote', onClick: closeAll },
          React.createElement(IconFileText, null),
          'Get a Quote'
        )
      )
    )
  );
}

module.exports = SharedHeader;
