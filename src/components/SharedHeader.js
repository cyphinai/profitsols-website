'use strict';

var React = require('react');
var useState = React.useState;
var useRef = React.useRef;
var useEffect = React.useEffect;
var Link = require('react-router-dom').Link;
var useLocation = require('react-router-dom').useLocation;
var motion = require('./motion').motion;
var prefersReducedMotion = require('./motion').prefersReducedMotion;
require('./SharedHeader.css');

var SERVICES = [
  { label: 'Mobile App Development', path: '/mobile-app-development', desc: 'Native & cross-platform', icon: 'mobile' },
  { label: 'Website Development', path: '/website-development', desc: 'Fast, SEO-ready sites', icon: 'website' },
  { label: 'UI/UX Development', path: '/ui-ux-development', desc: 'Design that converts', icon: 'design' },
  { label: 'Web App Development', path: '/web-app-development', desc: 'Scalable SaaS & tools', icon: 'webapp' }
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

function ServiceIcon(props) {
  var name = props.name;
  var common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.65',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'nav-dropdown-item__icon-svg',
    'aria-hidden': true
  };

  if (name === 'mobile') {
    return React.createElement('svg', common,
      React.createElement('rect', { x: '6.5', y: '2.5', width: '11', height: '19', rx: '2.5' }),
      React.createElement('line', { x1: '12', y1: '17.5', x2: '12.01', y2: '17.5' }),
      React.createElement('rect', { x: '9', y: '5.5', width: '6', height: '8', rx: '1', fill: 'currentColor', stroke: 'none', opacity: '0.35' })
    );
  }
  if (name === 'website') {
    return React.createElement('svg', common,
      React.createElement('rect', { x: '3', y: '4', width: '18', height: '16', rx: '2' }),
      React.createElement('line', { x1: '3', y1: '8.5', x2: '21', y2: '8.5' }),
      React.createElement('circle', { cx: '6.5', cy: '6.25', r: '0.75', fill: 'currentColor', stroke: 'none' }),
      React.createElement('circle', { cx: '9', cy: '6.25', r: '0.75', fill: 'currentColor', stroke: 'none' }),
      React.createElement('path', { d: 'M7 13h4M7 16h7' })
    );
  }
  if (name === 'design') {
    return React.createElement('svg', common,
      React.createElement('path', { d: 'M12 3.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6L12 11.8 8.8 13.4l.6-3.6L6.8 7.3l3.6-.5z' }),
      React.createElement('path', { d: 'M5 19.5c2.2-1.2 4.5-1.8 7-1.8s4.8.6 7 1.8' })
    );
  }
  return React.createElement('svg', common,
    React.createElement('rect', { x: '2.5', y: '5', width: '19', height: '14', rx: '2' }),
    React.createElement('path', { d: 'M8 10l-2.5 2.5L8 15' }),
    React.createElement('path', { d: 'M16 10l2.5 2.5L16 15' }),
    React.createElement('line', { x1: '13', y1: '9', x2: '11', y2: '16' })
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
  var closeTimerRef = useRef(null);

  useEffect(function() {
    return function() {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  var closeAll = function() {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  var openServices = function() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  var scheduleCloseServices = function() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(function() {
      setServicesOpen(false);
      closeTimerRef.current = null;
    }, 180);
  };

  var handleServicesEnter = function() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      openServices();
    }
  };

  var handleServicesLeave = function() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      scheduleCloseServices();
    }
  };

  var toggleServices = function() {
    setServicesOpen(!servicesOpen);
  };

  return React.createElement(motion.header, {
    className: 'header header--cyber',
    initial: prefersReducedMotion() ? false : { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
  },
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
          React.createElement(
            'span',
            { className: 'logo-lockup__mark-wrap', 'aria-hidden': true },
            React.createElement(LogoMarkNav, null)
          ),
          React.createElement('span', { className: 'logo-lockup__divider', 'aria-hidden': true }),
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
          onMouseEnter: handleServicesEnter,
          onMouseLeave: handleServicesLeave
        },
          React.createElement('button', {
            type: 'button',
            className: 'nav-dropdown-trigger nav-link nav-link--cyber' + (onServicePage ? ' nav-link--active' : ''),
            'aria-expanded': servicesOpen,
            'aria-haspopup': 'true',
            onClick: toggleServices
          },
            servicesLabel,
            React.createElement(IconChevronDown, null)
          ),
          React.createElement('div', {
            className: 'nav-dropdown-menu' + (servicesOpen ? ' open' : ''),
            onMouseEnter: handleServicesEnter,
            onMouseLeave: handleServicesLeave
          },
            React.createElement('div', { className: 'nav-dropdown-menu__header' },
              React.createElement('span', { className: 'nav-dropdown-menu__eyebrow' }, 'What we build'),
              React.createElement('span', { className: 'nav-dropdown-menu__title' }, 'Our Services')
            ),
            React.createElement('div', { className: 'nav-dropdown-menu__list' },
              SERVICES.map(function(s, i) {
                var active = path === s.path;
                return React.createElement(Link, {
                  key: i,
                  to: s.path,
                  className: 'nav-dropdown-item nav-dropdown-item--cyber' + (active ? ' nav-dropdown-item--active' : ''),
                  onClick: closeAll,
                  'aria-current': active ? 'page' : undefined
                },
                  React.createElement('span', { className: 'nav-dropdown-item__icon nav-dropdown-item__icon--' + s.icon },
                    React.createElement(ServiceIcon, { name: s.icon })
                  ),
                  React.createElement('span', { className: 'nav-dropdown-item__text' },
                    React.createElement('span', { className: 'nav-dropdown-item__label' }, s.label),
                    React.createElement('span', { className: 'nav-dropdown-item__desc' }, s.desc)
                  ),
                  React.createElement('span', { className: 'nav-dropdown-item__arrow', 'aria-hidden': true }, '→')
                );
              })
            )
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
