'use strict';

var React = require('react');
var useState = React.useState;
var Link = require('react-router-dom').Link;
var TechIcons = require('./TechIcons');
var SharedHeader = require('../components/SharedHeader');
require('./ServicePage.css');

function IconArrowRight() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: '18', height: '18' },
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}

function IconMail() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: '18', height: '18' },
    React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    React.createElement('polyline', { points: '22,6 12,13 2,6' })
  );
}

function IconPhone() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: '18', height: '18' },
    React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
  );
}

function ServicePage(props) {
  var accent = props.accent || 'blue';
  var heroTitle = props.heroTitle;
  var heroDesc = props.heroDesc;
  var servicesTitle = props.servicesTitle;
  var services = props.services || [];
  var processTitle = props.processTitle;
  var processSteps = props.processSteps || [];
  var techTitle = props.techTitle;
  var techIcons = props.techIcons || [];
  var portfolioTitle = props.portfolioTitle;
  var portfolioDesc = props.portfolioDesc;
  var contactTitle = props.contactTitle;
  var footerServices = props.footerServices || [];
  var footerLinks = props.footerLinks || [];

  var _useState = useState(0);
  var activeService = _useState[0];
  var setActiveService = _useState[1];

  return React.createElement('div', { className: 'service-page' + (accent ? ' accent-' + accent : '') },
    React.createElement(SharedHeader, null),
    React.createElement('section', { className: 'service-hero' },
      React.createElement('h1', null, heroTitle),
      React.createElement('p', null, heroDesc)
    ),
    services.length > 0 && React.createElement('section', { className: 'service-section' },
      React.createElement('h2', { className: 'service-section-title' }, servicesTitle),
      React.createElement('div', { className: 'service-options-grid' },
        React.createElement('div', { className: 'service-options-list' },
          services.map(function(s, i) {
            return React.createElement('div', {
              key: i,
              className: 'service-option-card' + (activeService === i ? ' active' : ''),
              onClick: function() { setActiveService(i); }
            },
              React.createElement('span', { className: 'service-option-icon' }, s.icon),
              React.createElement('span', { className: 'service-option-text' }, s.title)
            );
          })
        ),
        React.createElement('div', { className: 'service-desc-card' },
          services[activeService].desc.map(function(p, i) {
            return React.createElement('p', { key: i }, p);
          })
        )
      )
    ),
    processSteps.length > 0 && React.createElement('section', { className: 'service-process' },
      React.createElement('h2', { className: 'service-section-title' }, processTitle),
      React.createElement('div', { className: 'service-process-grid' },
        processSteps.map(function(step, i) {
          return React.createElement('div', { key: i, className: 'service-process-step' },
            React.createElement('div', { className: 'service-process-num' }, String(i + 1).padStart(2, '0')),
            React.createElement('h3', { className: 'service-process-title' }, step.title),
            React.createElement('p', { className: 'service-process-desc' }, step.desc)
          );
        })
      )
    ),
    techIcons.length > 0 && React.createElement('section', { className: 'service-tech' },
      React.createElement('h2', { className: 'service-section-title' }, techTitle),
      React.createElement('div', { className: 'service-tech-icons' },
        techIcons.map(function(item, i) {
          var name = typeof item === 'string' ? item : item.name;
          var keyMap = { 'React Native': 'ReactNative', 'Node.js': 'Node', 'Adobe XD': 'AdobeXD' };
          var iconKey = keyMap[name] || name.replace(/[\s.]/g, '');
          var IconComp = TechIcons[iconKey] || TechIcons[name];
          return React.createElement('div', { key: i, className: 'service-tech-item' },
            React.createElement('div', { className: 'service-tech-icon' }, IconComp ? React.createElement(IconComp, null) : name.charAt(0)),
            React.createElement('span', { className: 'service-tech-label' }, name)
          );
        })
      )
    ),
    portfolioTitle && React.createElement('section', { className: 'service-portfolio' },
      React.createElement('div', { className: 'service-portfolio-text' },
        React.createElement('h2', { className: 'service-section-title', style: { textAlign: 'left', marginBottom: '24px' } }, portfolioTitle),
        React.createElement('p', null, portfolioDesc),
        React.createElement(Link, { to: '/#portfolio', className: 'service-portfolio-link' },
          'View All',
          React.createElement(IconArrowRight, null)
        )
      ),
      React.createElement('div', { className: 'service-portfolio-visual' },
        React.createElement('div', { className: 'service-portfolio-phones' },
          React.createElement('div', { className: 'service-phone-mock left' },
            React.createElement('div', { className: 'service-phone-screen' })
          ),
          React.createElement('div', { className: 'service-phone-mock mid' },
            React.createElement('div', { className: 'service-phone-screen' })
          ),
          React.createElement('div', { className: 'service-phone-mock right' },
            React.createElement('div', { className: 'service-phone-screen' })
          )
        )
      )
    ),
    React.createElement('section', { className: 'service-contact' },
      React.createElement('h2', { className: 'service-contact-title' }, contactTitle),
      React.createElement('form', { className: 'service-contact-form', onSubmit: function(e) { e.preventDefault(); } },
        React.createElement('div', { className: 'service-contact-row' },
          React.createElement('input', { type: 'text', placeholder: 'Name', required: true }),
          React.createElement('input', { type: 'email', placeholder: 'Email', required: true }),
          React.createElement('input', { type: 'tel', placeholder: 'Phone number' })
        ),
        React.createElement('textarea', { placeholder: 'Message', rows: 5 }),
        React.createElement('button', { type: 'submit', className: 'service-btn-submit' }, 'Submit')
      )
    ),
    React.createElement('footer', { className: 'service-footer' },
      React.createElement('div', { className: 'service-footer-cta' },
        React.createElement('p', { className: 'service-footer-cta-text' }, 'Ready to build something great?'),
        React.createElement(Link, { to: '/#contact', className: 'service-footer-cta-btn' },
          'Get in Touch',
          React.createElement('span', { className: 'service-footer-cta-arrow' }, '\u2192')
        )
      ),
      React.createElement('div', { className: 'service-footer-inner' },
        React.createElement('div', { className: 'service-footer-col service-footer-col-accent-cyan' },
          React.createElement('h4', null, 'Services'),
          footerServices.map(function(link, i) {
            return React.createElement(Link, { key: i, to: link.to || '#' }, link.label);
          })
        ),
        React.createElement('div', { className: 'service-footer-col service-footer-col-accent-gold' },
          React.createElement('h4', null, 'Links'),
          footerLinks.map(function(link, i) {
            return React.createElement(Link, { key: i, to: link.to || '#' }, link.label);
          })
        ),
        React.createElement('div', { className: 'service-footer-col service-footer-col-accent-pink' },
          React.createElement('h4', null, 'Contact'),
          React.createElement('a', { href: 'mailto:contact@profitsols.com', className: 'service-footer-contact' },
            React.createElement(IconMail, null),
            'contact@profitsols.com'
          ),
          React.createElement('a', { href: 'tel:+923087065507', className: 'service-footer-contact' },
            React.createElement(IconPhone, null),
            '+923087065507'
          )
        )
      ),
      React.createElement('div', { className: 'service-footer-bottom' },
        React.createElement('p', null, 'Copyright © 2024 ProfitSols. All rights reserved.')
      )
    )
  );
}

module.exports = ServicePage;
