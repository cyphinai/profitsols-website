'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;
require('./CyberFooter.css');

function IconMail() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'cyber-footer-icon' },
    React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    React.createElement('polyline', { points: '22,6 12,13 2,6' })
  );
}

function IconPhone() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'cyber-footer-icon' },
    React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
  );
}

function CyberFooter() {
  return React.createElement('footer', { className: 'cyber-footer' },
    React.createElement('div', { className: 'cyber-footer-accent' }),
    React.createElement('div', { className: 'cyber-footer-inner' },
      React.createElement('div', { className: 'cyber-footer-grid' },
        React.createElement('div', { className: 'cyber-footer-brand' },
          React.createElement('p', { className: 'cyber-footer-logo-text' }, 'ProfitSols'),
          React.createElement('p', { className: 'cyber-footer-tag' }, 'Software development studio — Islamabad, Pakistan')
        ),
        React.createElement('div', { className: 'cyber-footer-col' },
          React.createElement('h4', null, 'Services'),
          React.createElement(Link, { to: '/mobile-app-development' }, 'Mobile App Development'),
          React.createElement(Link, { to: '/website-development' }, 'Website Development'),
          React.createElement(Link, { to: '/web-app-development' }, 'Web App Development'),
          React.createElement(Link, { to: '/ui-ux-development' }, 'UI/UX Design')
        ),
        React.createElement('div', { className: 'cyber-footer-col' },
          React.createElement('h4', null, 'Explore'),
          React.createElement(Link, { to: '/portfolio' }, 'Portfolio'),
          React.createElement(Link, { to: '/company' }, 'Company'),
          React.createElement(Link, { to: '/contact' }, 'Contact'),
          React.createElement(Link, { to: '/' }, 'Home')
        ),
        React.createElement('div', { className: 'cyber-footer-col' },
          React.createElement('h4', null, 'Contact'),
          React.createElement('a', { href: 'mailto:contact@profitsols.com', className: 'cyber-footer-contact' },
            React.createElement(IconMail, null),
            'contact@profitsols.com'
          ),
          React.createElement('a', { href: 'tel:+923087065507', className: 'cyber-footer-contact' },
            React.createElement(IconPhone, null),
            '+923087065507'
          )
        )
      ),
      React.createElement('div', { className: 'cyber-footer-bottom' },
        React.createElement('p', null, 'Copyright © 2024 ProfitSols. All rights reserved.')
      )
    )
  );
}

module.exports = CyberFooter;
