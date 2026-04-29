'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;
var SharedHeader = require('../../components/SharedHeader');
var CyberFooter = require('../../components/CyberFooter');
var RevealSection = require('../../components/RevealSection');
var CyberDecor = require('../../components/CyberDecor');
require('../../styles/cyber-inner-page.css');

function CompanyPage() {
  var values = [
    { title: 'Quality first', desc: 'We ship maintainable code, clear documentation, and predictable delivery — not shortcuts.' },
    { title: 'Transparent collaboration', desc: 'You get regular updates, honest timelines, and direct access to the people building your product.' },
    { title: 'Modern stack', desc: 'We stay current with mobile, web, and cloud tooling so your product ages well.' },
    { title: 'Long-term mindset', desc: 'We design for iteration: analytics, scalability, and support when you need to grow.' }
  ];

  return React.createElement('div', { className: 'company-page cyber-inner-page' },
    React.createElement(SharedHeader, null),
    React.createElement('main', { className: 'cyber-inner-main' },
      React.createElement('section', { className: 'cyber-inner-hero' },
        React.createElement('div', { className: 'cyber-inner-hero-grid', 'aria-hidden': true }),
        React.createElement(CyberDecor.DecoFloatingOrbs, null),
        React.createElement(CyberDecor.DecoHeroVectors, null),
        React.createElement('div', { className: 'cyber-inner-hero-inner' },
          React.createElement('p', { className: 'cyber-inner-eyebrow' }, 'About ProfitSols'),
          React.createElement('h1', { className: 'cyber-inner-title' }, 'Software development company in Islamabad'),
          React.createElement('p', { className: 'cyber-inner-lead' },
            'ProfitSols is a leading software development company in Islamabad, Pakistan. Our core motive is to provide a one-stop solution for mobile apps, websites, web applications, and UI/UX — with a focus on measurable outcomes for businesses worldwide.'
          ),
          React.createElement('div', { className: 'company-stats-row' },
            React.createElement('div', { className: 'company-stat-card' },
              React.createElement('span', { className: 'company-stat-card__num' }, '100+'),
              React.createElement('span', { className: 'company-stat-card__label' }, 'Clients served')
            ),
            React.createElement('div', { className: 'company-stat-card' },
              React.createElement('span', { className: 'company-stat-card__num' }, '24/7'),
              React.createElement('span', { className: 'company-stat-card__label' }, 'Support mindset')
            ),
            React.createElement('div', { className: 'company-stat-card' },
              React.createElement('span', { className: 'company-stat-card__num' }, 'End-to-end'),
              React.createElement('span', { className: 'company-stat-card__label' }, 'Product delivery')
            )
          )
        )
      ),

      React.createElement(RevealSection, { className: 'cyber-inner-section-wrap company-story-block' },
        React.createElement(CyberDecor.DecoSectionMesh, null),
        React.createElement('div', { className: 'company-story-inner' },
          React.createElement('h2', { className: 'cyber-inner-section-title cyber-inner-section-title--left' }, 'Our story'),
          React.createElement('div', { className: 'company-story-text' },
            React.createElement('p', null,
              'We have built trust across the software development industry and are recognized on top platforms. Our track record includes innovative, quality solutions for businesses in many industries.'
            ),
            React.createElement('p', null,
              'Our team delivers high-demand services: mobile app development, web app development, website development, and UI/UX design. We continuously improve quality and customer experience by staying ahead of technology trends.'
            ),
            React.createElement('p', null,
              'With structured delivery, ongoing support, and maintenance, we build long-term relationships focused on the success of your product.'
            )
          )
        )
      ),

      React.createElement(RevealSection, { className: 'cyber-inner-section-wrap company-values-section' },
        React.createElement('h2', { className: 'cyber-inner-section-title' }, 'How we work'),
        React.createElement('div', { className: 'company-values-grid' },
          values.map(function(v, i) {
            var idx = i + 1;
            var num = idx < 10 ? '0' + idx : String(idx);
            return React.createElement('div', { key: i, className: 'company-value-card' },
              React.createElement('div', { className: 'company-value-icon', 'aria-hidden': true }),
              React.createElement('span', { className: 'company-value-index' }, num),
              React.createElement('h3', { className: 'company-value-title' }, v.title),
              React.createElement('p', { className: 'company-value-desc' }, v.desc)
            );
          })
        ),
        React.createElement('div', { className: 'company-cta-row' },
          React.createElement(Link, { to: '/contact', className: 'company-cta-btn' }, 'Work with us'),
          React.createElement(Link, { to: '/portfolio', className: 'company-cta-link' }, 'See portfolio →')
        )
      )
    ),
    React.createElement(CyberFooter, null)
  );
}

module.exports = CompanyPage;
