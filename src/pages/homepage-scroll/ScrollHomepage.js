'use strict';

/**
 * Scroll-driven homepage sections (React + plain CSS + GSAP ScrollTrigger).
 * Animation logic lives in initGsapScroll.js; this file only defines structure.
 */

var React = require('react');
var useEffect = React.useEffect;
var useState = React.useState;
var useRef = React.useRef;
var Link = require('react-router-dom').Link;
var ScrollHomeMoreSections = require('./ScrollHomeMoreSections');
var HeroInfographic = require('./HeroInfographic');
var ServicePanelVisuals = require('./ServicePanelVisuals');
var MotionHero = require('../../components/motion').MotionHero;

require('./style.css');

function IconArrow() {
  return React.createElement('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    'aria-hidden': true
  },
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}

function ScrollHomepage() {
  var rootRef = useRef(null);
  var _useState = useState(false);
  var renderBelowFold = _useState[0];
  var setRenderBelowFold = _useState[1];

  useEffect(function() {
    var el = rootRef.current;
    if (!el) return undefined;
    var cancelled = false;
    var cleanup = function noop() {};

    // Render below-the-fold panels after the browser is idle to reduce TBT.
    var idleId = null;
    var timeoutId = null;

    var scheduleBelowFold = function() {
      if (cancelled) return;
      setRenderBelowFold(true);
    };

    if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(scheduleBelowFold, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(scheduleBelowFold, 800);
    }

    // Load GSAP only when the user starts scrolling (reduces unused JS + TBT).
    var gsapLoaded = false;
    var importGsap = function() {
      if (gsapLoaded || cancelled) return;
      gsapLoaded = true;
      import('./initGsapScroll').then(function(mod) {
        if (cancelled) return;
        var init = mod && (mod.initScrollHomeGsap || (mod.default && mod.default.initScrollHomeGsap));
        if (typeof init === 'function') {
          cleanup = init(el) || cleanup;
        }
      }).catch(function() {
        // Non-fatal: homepage should still render without animations.
      });
    };

    var onFirstScroll = function() {
      importGsap();
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', onFirstScroll, { passive: true });
        window.removeEventListener('wheel', onFirstScroll, { passive: true });
        window.removeEventListener('touchstart', onFirstScroll, { passive: true });
        window.removeEventListener('keydown', onFirstScroll);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onFirstScroll, { passive: true });
      window.addEventListener('wheel', onFirstScroll, { passive: true });
      window.addEventListener('touchstart', onFirstScroll, { passive: true });
      window.addEventListener('keydown', onFirstScroll);
    }

    return function() {
      cancelled = true;
      if (idleId && typeof window !== 'undefined' && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', onFirstScroll, { passive: true });
        window.removeEventListener('wheel', onFirstScroll, { passive: true });
        window.removeEventListener('touchstart', onFirstScroll, { passive: true });
        window.removeEventListener('keydown', onFirstScroll);
      }
      cleanup();
    };
  }, []);

  return React.createElement('div', { className: 'scroll-homepage', ref: rootRef },
    /* --- Hero --- */
    React.createElement('section', { className: 'scroll-homepage__hero', 'aria-label': 'Introduction' },
      React.createElement('div', { className: 'scroll-homepage__hero-bg' },
        React.createElement('div', { className: 'scroll-homepage__hero-gradient' }),
        React.createElement('div', { className: 'scroll-homepage__hero-mesh', 'aria-hidden': true }),
        React.createElement('div', { className: 'scroll-homepage__orb scroll-homepage__orb--1' }),
        React.createElement('div', { className: 'scroll-homepage__orb scroll-homepage__orb--2' }),
        React.createElement('div', { className: 'scroll-homepage__orb scroll-homepage__orb--3' }),
        React.createElement('div', { className: 'scroll-homepage__grid' })
      ),
      React.createElement('div', { className: 'scroll-homepage__hero-shell' },
        React.createElement(MotionHero, { className: 'scroll-homepage__hero-copy' },
          React.createElement('span', { className: 'scroll-homepage__hero-badge' },
            React.createElement('span', { className: 'scroll-homepage__hero-badge-dot' }),
            'Islamabad · Pakistan · Software studio'
          ),
          React.createElement('h1', { className: 'scroll-homepage__hero-title' },
            'Software Development Company in ',
            React.createElement('span', { className: 'scroll-homepage__hero-title-accent' }, 'Islamabad')
          ),
          React.createElement('p', { className: 'scroll-homepage__hero-sub' },
            'We build fast, scalable digital products — mobile apps, websites, web applications, and UI/UX design — with engineering discipline and a premium, modern experience.'
          ),
          React.createElement('div', { className: 'scroll-homepage__hero-actions' },
            React.createElement(Link, { to: '/contact', className: 'scroll-homepage__hero-cta scroll-homepage__hero-cta--primary' },
              'Start a project',
              React.createElement(IconArrow, null)
            ),
            React.createElement(Link, { to: '/portfolio', className: 'scroll-homepage__hero-cta scroll-homepage__hero-cta--ghost' },
              'View portfolio'
            )
          ),
          React.createElement('div', { className: 'scroll-homepage__hero-stats' },
            React.createElement('div', { className: 'scroll-homepage__hero-stat' },
              React.createElement('span', { className: 'scroll-homepage__hero-stat-num' }, '100+'),
              React.createElement('span', { className: 'scroll-homepage__hero-stat-label' }, 'Clients served')
            ),
            React.createElement('div', { className: 'scroll-homepage__hero-stat' },
              React.createElement('span', { className: 'scroll-homepage__hero-stat-num' }, '4'),
              React.createElement('span', { className: 'scroll-homepage__hero-stat-label' }, 'Core services')
            ),
            React.createElement('div', { className: 'scroll-homepage__hero-stat' },
              React.createElement('span', { className: 'scroll-homepage__hero-stat-num' }, '24/7'),
              React.createElement('span', { className: 'scroll-homepage__hero-stat-label' }, 'Support mindset')
            )
          )
        ),
        React.createElement('div', { className: 'scroll-homepage__hero-visual' },
          React.createElement(HeroInfographic, null)
        )
      ),
      React.createElement('div', { className: 'scroll-homepage__scroll-hint' },
        React.createElement('span', null, 'Scroll'),
        React.createElement('div', { className: 'scroll-homepage__mouse' },
          React.createElement('div', { className: 'scroll-homepage__mouse-wheel' })
        )
      )
    ),

    renderBelowFold ? React.createElement(React.Fragment, null,
      /* --- Mobile App Development --- */
      React.createElement('section', { className: 'scroll-panel scroll-panel--mobile', 'aria-labelledby': 'sh-mobile-title' },
        React.createElement('div', { className: 'scroll-panel__inner' },
          React.createElement('div', { className: 'scroll-panel__visual' },
            React.createElement(ServicePanelVisuals.MobileVisual, null)
          ),
          React.createElement('div', { className: 'scroll-panel__content js-mobile-text' },
            React.createElement('p', { className: 'scroll-panel__label' }, '01 — Mobile'),
            React.createElement('h2', { id: 'sh-mobile-title', className: 'scroll-panel__title' }, 'Mobile App Development'),
            React.createElement('p', { className: 'scroll-panel__desc' },
              'Native and cross-platform apps for iOS and Android. We focus on performance, polished UX, and scalable architecture — from discovery to store release and beyond.'
            ),
            React.createElement(Link, { to: '/mobile-app-development', className: 'scroll-panel__cta' },
              'Explore mobile app development',
              React.createElement(IconArrow, null)
            )
          )
        )
      ),

      /* --- Website Development --- */
      React.createElement('section', { className: 'scroll-panel scroll-panel--website', 'aria-labelledby': 'sh-web-title' },
      React.createElement('div', { className: 'scroll-panel__inner' },
        React.createElement('div', { className: 'scroll-panel__visual' },
          React.createElement(ServicePanelVisuals.WebsiteVisual, null)
        ),
        React.createElement('div', { className: 'scroll-panel__content js-website-text' },
          React.createElement('p', { className: 'scroll-panel__label' }, '02 — Web'),
          React.createElement('h2', { id: 'sh-web-title', className: 'scroll-panel__title' }, 'Website Development'),
          React.createElement('p', { className: 'scroll-panel__desc' },
            'Fast, responsive, SEO-aware sites with a premium visual language. We ship clean code, accessible layouts, and content systems your team can grow with.'
          ),
          React.createElement(Link, { to: '/website-development', className: 'scroll-panel__cta' },
            'Explore website development',
            React.createElement(IconArrow, null)
          )
        )
      )
      ),

      /* --- Web App Development --- */
      React.createElement('section', { className: 'scroll-panel scroll-panel--webapp', 'aria-labelledby': 'sh-webapp-title' },
      React.createElement('div', { className: 'scroll-panel__inner' },
        React.createElement('div', { className: 'scroll-panel__visual' },
          React.createElement(ServicePanelVisuals.WebAppVisual, null)
        ),
        React.createElement('div', { className: 'scroll-panel__content js-webapp-text' },
          React.createElement('p', { className: 'scroll-panel__label' }, '03 — Product'),
          React.createElement('h2', { id: 'sh-webapp-title', className: 'scroll-panel__title' }, 'Web App Development'),
          React.createElement('p', { className: 'scroll-panel__desc' },
            'Dashboards, SaaS, and internal tools with robust APIs and modern frontends. Built for reliability, observability, and iterative delivery.'
          ),
          React.createElement(Link, { to: '/web-app-development', className: 'scroll-panel__cta' },
            'Explore web app development',
            React.createElement(IconArrow, null)
          )
        )
      )
      ),

      /* --- UI/UX Design --- */
      React.createElement('section', { className: 'scroll-panel scroll-panel--uiux', 'aria-labelledby': 'sh-uiux-title' },
      React.createElement('div', { className: 'scroll-panel__inner' },
        React.createElement('div', { className: 'scroll-panel__visual' },
          React.createElement(ServicePanelVisuals.UIUXVisual, null)
        ),
        React.createElement('div', { className: 'scroll-panel__content js-uiux-text' },
          React.createElement('p', { className: 'scroll-panel__label' }, '04 — Design'),
          React.createElement('h2', { id: 'sh-uiux-title', className: 'scroll-panel__title' }, 'UI/UX Design'),
          React.createElement('p', { className: 'scroll-panel__desc' },
            'Research-backed interfaces, design systems, and prototypes that align stakeholders and developers. We design for clarity, conversion, and accessibility.'
          ),
          React.createElement(Link, { to: '/ui-ux-development', className: 'scroll-panel__cta' },
            'Explore UI/UX design',
            React.createElement(IconArrow, null)
          )
        )
      )
      ),

      React.createElement(ScrollHomeMoreSections, null),
      React.createElement('div', { className: 'scroll-homepage__end-spacer', 'aria-hidden': true })
    ) : null
  );
}

module.exports = ScrollHomepage;
