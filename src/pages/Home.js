'use strict';

/**
 * Home route: cyber header + GSAP scroll homepage + site footer.
 * Scroll experience: ./homepage-scroll/ScrollHomepage.js + style.css + initGsapScroll.js
 */

var React = require('react');
var Link = require('react-router-dom').Link;
var SharedHeader = require('../components/SharedHeader');
var ScrollHomepage = require('./homepage-scroll/ScrollHomepage');

require('./Home.css');

function IconMail() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg icon-sm' },
    React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    React.createElement('polyline', { points: '22,6 12,13 2,6' })
  );
}

function IconPhone() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg icon-sm' },
    React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
  );
}

function Footer() {
  return React.createElement('footer', { className: 'footer', id: 'site-footer' },
    React.createElement('div', { className: 'footer-cta' },
      React.createElement('p', { className: 'footer-cta-text' }, 'Ready to build something great?'),
      React.createElement(Link, { to: '/contact', className: 'footer-cta-btn' },
        'Get in Touch',
        React.createElement('span', { className: 'footer-cta-arrow' }, '\u2192')
      )
    ),
    React.createElement('div', { className: 'footer-top' },
      React.createElement('div', { className: 'footer-col footer-col-accent-cyan' },
        React.createElement('h4', null, 'About'),
        React.createElement('p', null, 'We provide quality service with proven results.')
      ),
      React.createElement('div', { className: 'footer-col footer-col-accent-gold' },
        React.createElement('h4', null, 'Services'),
        React.createElement(Link, { to: '/mobile-app-development' }, 'Mobile App Development'),
        React.createElement(Link, { to: '/website-development' }, 'Website Development'),
        React.createElement(Link, { to: '/web-app-development' }, 'Web App Development'),
        React.createElement(Link, { to: '/ui-ux-development' }, 'UI/UX Design')
      ),
      React.createElement('div', { className: 'footer-col footer-col-accent-pink' },
        React.createElement('h4', null, 'Links'),
        React.createElement(Link, { to: '/company' }, 'Company'),
        React.createElement(Link, { to: '/contact' }, 'Contact'),
        React.createElement(Link, { to: '/portfolio' }, 'Portfolio'),
        React.createElement(Link, { to: '/' }, 'Home'),
        React.createElement('a', { href: '#' }, 'Terms & Conditions')
      ),
      React.createElement('div', { className: 'footer-col footer-col-accent-primary' },
        React.createElement('h4', null, 'Contact'),
        React.createElement('a', { href: 'mailto:contact@profitsols.com', className: 'footer-contact' },
          React.createElement(IconMail, null),
          'contact@profitsols.com'
        ),
        React.createElement('a', { href: 'tel:+923087065507', className: 'footer-contact' },
          React.createElement(IconPhone, null),
          '+923087065507'
        )
      )
    ),
    React.createElement('div', { className: 'footer-bottom' },
      React.createElement('p', null, 'Copyright © 2024 ProfitSols. All rights reserved.')
    )
  );
}

function Home() {
  return React.createElement('div', { className: 'home-page' },
    React.createElement(SharedHeader, null),
    React.createElement(ScrollHomepage, null),
    React.createElement(Footer, null)
  );
}

module.exports = Home;
