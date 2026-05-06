'use strict';

var React = require('react');
var SharedHeader = require('../../components/SharedHeader');
var CyberFooter = require('../../components/CyberFooter');
var RevealSection = require('../../components/RevealSection');
var CyberDecor = require('../../components/CyberDecor');
require('../../styles/cyber-inner-page.css');
require('./ContactPage.css');

var DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function IconMail() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    React.createElement('polyline', { points: '22,6 12,13 2,6' })
  );
}

function IconPhone() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
  );
}

function IconSend() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    React.createElement('line', { x1: '22', y1: '2', x2: '11', y2: '13' }),
    React.createElement('polygon', { points: '22 2 15 22 11 13 2 9 22 2' })
  );
}

function IconInstagram() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    React.createElement('rect', { x: '2.5', y: '2.5', width: '19', height: '19', rx: '5' }),
    React.createElement('circle', { cx: '12', cy: '12', r: '4.2' }),
    React.createElement('circle', { cx: '17.4', cy: '6.6', r: '1' })
  );
}

function IconFacebook() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    React.createElement('path', { d: 'M14 8h3V5h-3c-2.2 0-4 1.8-4 4v3H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z' })
  );
}

function IconLinkedIn() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    React.createElement('path', { d: 'M4 9h4v11H4z' }),
    React.createElement('path', { d: 'M6 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' }),
    React.createElement('path', { d: 'M10 9h4v1.8c.6-1.1 1.9-2 3.8-2 3 0 4.2 2 4.2 5v6.2h-4V14.6c0-1.3-.2-2.4-1.7-2.4-1.7 0-2 1.3-2 2.7V20H10z' })
  );
}

var TRUST_TECH = [
  { slug: 'react', path: 'react/react-original.svg' },
  { slug: 'nodejs', path: 'nodejs/nodejs-original.svg' },
  { slug: 'figma', path: 'figma/figma-original.svg' },
  { slug: 'firebase', path: 'firebase/firebase-plain.svg' }
];

function ContactPage() {
  return React.createElement('div', { className: 'contact-page cyber-inner-page' },
    React.createElement(SharedHeader, null),
    React.createElement('main', { className: 'cyber-inner-main' },
      React.createElement('section', { className: 'cyber-inner-hero' },
        React.createElement('div', { className: 'cyber-inner-hero-grid', 'aria-hidden': true }),
        React.createElement(CyberDecor.DecoFloatingOrbs, null),
        React.createElement(CyberDecor.DecoHeroVectors, null),
        React.createElement('div', { className: 'cyber-inner-hero-inner' },
          React.createElement('p', { className: 'cyber-inner-eyebrow' }, 'Get in touch'),
          React.createElement('h1', { className: 'cyber-inner-title' }, 'Let’s build your next product'),
          React.createElement('p', { className: 'cyber-inner-lead' },
            'Tell us about your goals, timeline, and tech preferences. We respond quickly with a clear next step — usually the same business day.'
          )
        )
      ),

      React.createElement(RevealSection, { className: 'contact-split' },
        React.createElement('div', { className: 'contact-panel contact-panel--form' },
          React.createElement('h2', { className: 'contact-panel-title' },
            React.createElement('span', { className: 'contact-panel-title-icon' }, React.createElement(IconSend, null)),
            'Send a message'
          ),
          React.createElement('form', {
            className: 'contact-form',
            onSubmit: function(e) { e.preventDefault(); }
          },
            React.createElement('div', { className: 'contact-row' },
              React.createElement('label', { className: 'contact-field' },
                React.createElement('span', null, 'Name'),
                React.createElement('input', { type: 'text', name: 'name', required: true, placeholder: 'Your name' })
              ),
              React.createElement('label', { className: 'contact-field' },
                React.createElement('span', null, 'Email'),
                React.createElement('input', { type: 'email', name: 'email', required: true, placeholder: 'you@company.com' })
              )
            ),
            React.createElement('label', { className: 'contact-field' },
              React.createElement('span', null, 'Phone (optional)'),
              React.createElement('input', { type: 'tel', name: 'phone', placeholder: '+92 …' })
            ),
            React.createElement('label', { className: 'contact-field' },
              React.createElement('span', null, 'Project details'),
              React.createElement('textarea', { name: 'message', rows: 5, required: true, placeholder: 'What are you building? Any deadlines or platforms?' })
            ),
            React.createElement('button', { type: 'submit', className: 'contact-submit' }, 'Submit inquiry')
          ),
          React.createElement('div', { className: 'contact-trust-icons', 'aria-hidden': true },
            TRUST_TECH.map(function(t) {
              return React.createElement('img', {
                key: t.slug,
                src: DEVICON + '/' + t.path,
                alt: ''
              });
            })
          )
        ),
        React.createElement('div', { className: 'contact-panel contact-panel--info' },
          React.createElement(CyberDecor.DecoSectionMesh, null),
          React.createElement('h2', { className: 'contact-panel-title' },
            React.createElement('span', { className: 'contact-panel-title-icon' }, React.createElement(IconPhone, null)),
            'Direct contact'
          ),
          React.createElement('p', { className: 'contact-info-lead' }, 'Prefer email or phone? Reach us here.'),
          React.createElement('a', { href: 'mailto:contact@profitsols.com', className: 'contact-info-card' },
            React.createElement(IconMail, null),
            React.createElement('span', null,
              React.createElement('strong', null, 'Email'),
              React.createElement('br', null),
              'contact@profitsols.com'
            )
          ),
          React.createElement('a', { href: 'tel:+923087065507', className: 'contact-info-card' },
            React.createElement(IconPhone, null),
            React.createElement('span', null,
              React.createElement('strong', null, 'Phone'),
              React.createElement('br', null),
              '+923087065507'
            )
          ),
          React.createElement('div', { className: 'contact-social' },
            React.createElement('p', { className: 'contact-social-label' }, 'Social profiles'),
            React.createElement('div', { className: 'contact-social-row' },
              React.createElement('a', {
                className: 'contact-social-link',
                href: 'https://www.instagram.com/profitsols?igsh=MWpsZ2tyNDV3dzN6dQ==',
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': 'ProfitSols on Instagram (opens in new tab)'
              }, React.createElement(IconInstagram, null), 'Instagram'),
              React.createElement('a', {
                className: 'contact-social-link',
                href: 'https://www.facebook.com/share/17nANJcfu8/',
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': 'ProfitSols on Facebook (opens in new tab)'
              }, React.createElement(IconFacebook, null), 'Facebook'),
              React.createElement('a', {
                className: 'contact-social-link',
                href: 'https://www.linkedin.com/company/profitsols/',
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': 'ProfitSols on LinkedIn (opens in new tab)'
              }, React.createElement(IconLinkedIn, null), 'LinkedIn')
            )
          ),
          React.createElement('div', { className: 'contact-info-note' },
            React.createElement('p', null, 'Office: Islamabad, Pakistan'),
            React.createElement('p', null, 'We work with clients globally across time zones.')
          )
        )
      )
    ),
    React.createElement(CyberFooter, null)
  );
}

module.exports = ContactPage;
