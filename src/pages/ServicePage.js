'use strict';

var React = require('react');
var useState = React.useState;
var Link = require('react-router-dom').Link;
var TechIcons = require('./TechIcons');
var SharedHeader = require('../components/SharedHeader');
var CyberFooter = require('../components/CyberFooter');
var RevealSection = require('../components/RevealSection');
var CyberDecor = require('../components/CyberDecor');
require('../styles/cyber-inner-page.css');

var DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

var TECH_ICON_PATH = {
  WordPress: 'wordpress/wordpress-plain.svg',
  HTML5: 'html5/html5-original.svg',
  CSS3: 'css3/css3-original.svg',
  JavaScript: 'javascript/javascript-original.svg',
  React: 'react/react-original.svg',
  Flutter: 'flutter/flutter-original.svg',
  Java: 'java/java-original.svg',
  Kotlin: 'kotlin/kotlin-original.svg',
  'React Native': 'react/react-original.svg',
  Swift: 'swift/swift-original.svg',
  'Node.js': 'nodejs/nodejs-original.svg',
  Figma: 'figma/figma-original.svg',
  Sketch: 'sketch/sketch-original.svg',
  'Adobe XD': 'xd/xd-plain.svg',
  Photoshop: 'photoshop/photoshop-plain.svg',
  MySQL: 'mysql/mysql-original.svg',
  AWS: 'amazonwebservices/amazonwebservices-plain-wordmark.svg',
  Firebase: 'firebase/firebase-plain.svg',
  Python: 'python/python-original.svg'
};

function techIconSrc(name) {
  var path = TECH_ICON_PATH[name];
  return path ? DEVICON + '/' + path : null;
}

function IconArrowRight() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: '18', height: '18' },
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}

function ServicePage(props) {
  var accent = props.accent || 'blue';
  var heroEyebrow = props.heroEyebrow || 'Services';
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

  var _useState = useState(0);
  var activeService = _useState[0];
  var setActiveService = _useState[1];

  function renderTechIcon(name, i) {
    var src = techIconSrc(name);
    var keyMap = { 'React Native': 'ReactNative', 'Node.js': 'Node', 'Adobe XD': 'AdobeXD' };
    var iconKey = keyMap[name] || name.replace(/[\s.]/g, '');
    var IconComp = TechIcons[iconKey] || TechIcons[name];
    return React.createElement('div', { key: i, className: 'svc-tech-item' },
      React.createElement('div', { className: 'svc-tech-icon' },
        src
          ? React.createElement('img', { src: src, alt: '', className: 'svc-tech-icon-img', width: 44, height: 44 })
          : IconComp
            ? React.createElement(IconComp, null)
            : React.createElement('span', { className: 'svc-tech-fallback' }, name.charAt(0))
      ),
      React.createElement('span', { className: 'svc-tech-label' }, name)
    );
  }

  return React.createElement('div', { className: 'cyber-inner-page service-page' + (accent ? ' accent-' + accent : '') },
    React.createElement(SharedHeader, null),
    React.createElement('main', { className: 'cyber-inner-main' },
      React.createElement('section', { className: 'cyber-inner-hero' },
        React.createElement('div', { className: 'cyber-inner-hero-grid', 'aria-hidden': true }),
        React.createElement(CyberDecor.DecoHeroVectors, null),
        React.createElement('div', { className: 'cyber-inner-hero-inner' },
          React.createElement('p', { className: 'cyber-inner-eyebrow' }, heroEyebrow),
          React.createElement('h1', { className: 'cyber-inner-title' }, heroTitle),
          React.createElement('p', { className: 'cyber-inner-lead' }, heroDesc)
        )
      ),

      services.length > 0 && React.createElement(RevealSection, { className: 'cyber-inner-section-wrap svc-offerings' },
        React.createElement(CyberDecor.DecoSectionMesh, null),
        React.createElement('h2', { className: 'cyber-inner-section-title' }, servicesTitle),
        React.createElement('div', { className: 'svc-options-grid' },
          React.createElement('div', { className: 'svc-options-list' },
            services.map(function(s, i) {
              return React.createElement('div', {
                key: i,
                className: 'svc-option-card' + (activeService === i ? ' active' : ''),
                onClick: function() { setActiveService(i); },
                role: 'button',
                tabIndex: 0,
                onKeyDown: function(e) {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveService(i);
                  }
                }
              },
                React.createElement('span', { className: 'svc-option-icon' }, s.icon),
                React.createElement('span', { className: 'svc-option-text' }, s.title)
              );
            })
          ),
          React.createElement('div', { className: 'svc-desc-card' },
            services[activeService].desc.map(function(p, i) {
              return React.createElement('p', { key: i }, p);
            })
          )
        )
      ),

      processSteps.length > 0 && React.createElement(RevealSection, { className: 'cyber-inner-section-wrap svc-process' },
        React.createElement('h2', { className: 'cyber-inner-section-title' }, processTitle),
        React.createElement('div', { className: 'svc-process-grid' },
          processSteps.map(function(step, i) {
            var n = i + 1;
            var num = n < 10 ? '0' + n : String(n);
            return React.createElement('div', { key: i, className: 'svc-process-step' },
              React.createElement('div', { className: 'svc-process-num' }, num),
              React.createElement('h3', { className: 'svc-process-title' }, step.title),
              React.createElement('p', { className: 'svc-process-desc' }, step.desc)
            );
          })
        )
      ),

      techIcons.length > 0 && React.createElement(RevealSection, { className: 'cyber-inner-section-wrap svc-tech' },
        React.createElement('h2', { className: 'cyber-inner-section-title' }, techTitle),
        React.createElement('div', { className: 'svc-tech-icons' },
          techIcons.map(function(item, i) {
            var name = typeof item === 'string' ? item : item.name;
            return renderTechIcon(name, i);
          })
        )
      ),

      portfolioTitle && React.createElement(RevealSection, { className: 'cyber-inner-section-wrap' },
        React.createElement('div', { className: 'svc-portfolio' },
          React.createElement('div', { className: 'svc-portfolio-text' },
            React.createElement('h2', { className: 'cyber-inner-section-title cyber-inner-section-title--left' }, portfolioTitle),
            React.createElement('p', null, portfolioDesc),
            React.createElement(Link, { to: '/portfolio', className: 'svc-portfolio-link' },
              'View portfolio',
              React.createElement(IconArrowRight, null)
            )
          ),
          React.createElement('div', { className: 'svc-portfolio-visual' },
            React.createElement('div', { className: 'svc-portfolio-phones' },
              React.createElement('div', { className: 'svc-phone-mock left' },
                React.createElement('div', { className: 'svc-phone-screen' })
              ),
              React.createElement('div', { className: 'svc-phone-mock mid' },
                React.createElement('div', { className: 'svc-phone-screen' })
              ),
              React.createElement('div', { className: 'svc-phone-mock right' },
                React.createElement('div', { className: 'svc-phone-screen' })
              )
            )
          )
        )
      ),

      React.createElement(RevealSection, { className: 'cyber-inner-section-wrap svc-contact' },
        React.createElement('div', { className: 'svc-contact-card' },
          React.createElement('h2', { className: 'svc-contact-title' }, contactTitle),
          React.createElement('p', { className: 'svc-contact-hint' },
            'Share a short brief — we’ll follow up with next steps. Or visit our full contact page for more options.'
          ),
          React.createElement('form', { className: 'svc-contact-form', onSubmit: function(e) { e.preventDefault(); } },
            React.createElement('div', { className: 'svc-contact-row' },
              React.createElement('input', { type: 'text', placeholder: 'Name', required: true, 'aria-label': 'Name' }),
              React.createElement('input', { type: 'email', placeholder: 'Email', required: true, 'aria-label': 'Email' })
            ),
            React.createElement('input', { type: 'tel', placeholder: 'Phone (optional)', 'aria-label': 'Phone' }),
            React.createElement('textarea', { placeholder: 'Tell us about your project', rows: 4, 'aria-label': 'Message' }),
            React.createElement('button', { type: 'submit', className: 'svc-btn-submit' }, 'Send message')
          ),
          React.createElement('p', { className: 'svc-contact-footer-note' },
            React.createElement(Link, { to: '/contact' }, 'Open full contact page →')
          )
        )
      )
    ),
    React.createElement(CyberFooter, null)
  );
}

module.exports = ServicePage;
