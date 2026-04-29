'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;
var useParams = require('react-router-dom').useParams;
var Navigate = require('react-router-dom').Navigate;
var SharedHeader = require('../../components/SharedHeader');
var CyberFooter = require('../../components/CyberFooter');
var getPortfolioBySlug = require('../../utils/portfolioHelpers').getPortfolioBySlug;
require('./CaseStudyPage.css');

var DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

var STACK_ICON_SUFFIX = {
  firebase: 'firebase/firebase-plain.svg',
  kotlin: 'kotlin/kotlin-original.svg'
};

function stackIconUrl(name) {
  var n = String(name || '').toLowerCase();
  if (STACK_ICON_SUFFIX[n]) {
    return DEVICON + '/' + STACK_ICON_SUFFIX[n];
  }
  return DEVICON + '/' + n + '/' + n + '-original.svg';
}

function IconArrowLeft() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'case-study-icon' },
    React.createElement('line', { x1: '19', y1: '12', x2: '5', y2: '12' }),
    React.createElement('polyline', { points: '12 19 5 12 12 5' })
  );
}

function IconExternal() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'case-study-icon case-study-icon--sm' },
    React.createElement('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }),
    React.createElement('polyline', { points: '15 3 21 3 21 9' }),
    React.createElement('line', { x1: '10', y1: '14', x2: '21', y2: '3' })
  );
}

function DecoHeroVectors() {
  return React.createElement('svg', {
    className: 'case-study-deco case-study-deco--hero',
    viewBox: '0 0 600 320',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true
  },
    React.createElement('defs', null,
      React.createElement('linearGradient', { id: 'caseGrad1', x1: '0', y1: '0', x2: '1', y2: '1' },
        React.createElement('stop', { offset: '0%', stopColor: '#00cbf0', stopOpacity: '0.5' }),
        React.createElement('stop', { offset: '100%', stopColor: '#ee2c65', stopOpacity: '0.25' })
      ),
      React.createElement('linearGradient', { id: 'caseGrad2', x1: '1', y1: '0', x2: '0', y2: '1' },
        React.createElement('stop', { offset: '0%', stopColor: '#d4ad39', stopOpacity: '0.4' }),
        React.createElement('stop', { offset: '100%', stopColor: '#00407f', stopOpacity: '0.35' })
      )
    ),
    React.createElement('path', {
      d: 'M420 40h120v180H420z',
      fill: 'none',
      stroke: 'url(#caseGrad1)',
      strokeWidth: '1.5',
      opacity: '0.9'
    }),
    React.createElement('path', {
      d: 'M460 80h40v100h-40z',
      fill: 'rgba(0,203,240,0.06)',
      stroke: 'rgba(0,203,240,0.35)',
      strokeWidth: '1'
    }),
    React.createElement('circle', { cx: '120', cy: '200', r: '72', fill: 'url(#caseGrad2)', opacity: '0.35' }),
    React.createElement('path', {
      d: 'M40 120 L180 100 L200 220 L60 260 Z',
      fill: 'none',
      stroke: 'rgba(238,44,101,0.45)',
      strokeWidth: '1.2'
    }),
    React.createElement('path', {
      d: 'M280 200h8v8h-8v8h-8v-8h-8v-8h8v-8h8v8z',
      fill: '#00cbf0',
      opacity: '0.5'
    }),
    React.createElement('path', {
      d: 'M320 60l20 20-20 20-20-20 20-20z',
      fill: 'none',
      stroke: '#d4ad39',
      strokeWidth: '1.5',
      opacity: '0.7'
    })
  );
}

function DecoSectionAccent() {
  return React.createElement('svg', {
    className: 'case-study-deco case-study-deco--section',
    viewBox: '0 0 200 200',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true
  },
    React.createElement('path', {
      d: 'M20 20h160v2H20zm0 40h120v2H20zm0 80h160v2H20z',
      fill: 'rgba(0,203,240,0.25)'
    }),
    React.createElement('circle', { cx: '170', cy: '50', r: '6', fill: '#ee2c65', opacity: '0.7' }),
    React.createElement('circle', { cx: '40', cy: '150', r: '4', fill: '#00cbf0', opacity: '0.8' })
  );
}

function CaseStudyPage() {
  var slug = (useParams().slug || '').toLowerCase();
  var project = getPortfolioBySlug(slug);

  if (!project) {
    return React.createElement(Navigate, { to: '/portfolio', replace: true });
  }

  var title = project.title || 'Case study';
  var summary = project.summary || project.description || '';
  var stack = project.stack || [];
  var screens = project.screens || [];
  var highlights = project.highlights || [];
  var results = project.results || [];
  var external = project.linkUrl && project.linkUrl !== '#' && project.linkUrl !== '';

  return React.createElement('div', { className: 'case-study-page' },
    React.createElement(SharedHeader, null),
    React.createElement('main', { className: 'case-study-main' },
      React.createElement('section', { className: 'case-study-hero' },
        React.createElement('div', { className: 'case-study-hero-grid', 'aria-hidden': true }),
        DecoHeroVectors(),
        React.createElement('div', { className: 'case-study-hero-inner' },
          React.createElement(Link, { to: '/portfolio', className: 'case-study-back' },
            IconArrowLeft(),
            'Portfolio'
          ),
          React.createElement('div', { className: 'case-study-hero-head' },
            project.logoUrl
              ? React.createElement('div', { className: 'case-study-logo-wrap' },
                  React.createElement('img', { src: project.logoUrl, alt: '', className: 'case-study-logo' })
                )
              : null,
            React.createElement('div', { className: 'case-study-hero-copy' },
              React.createElement('p', { className: 'case-study-eyebrow' }, 'Case study'),
              React.createElement('h1', { className: 'case-study-title' }, title),
              React.createElement('p', { className: 'case-study-summary' }, summary)
            )
          ),
          React.createElement('div', { className: 'case-study-meta' },
            project.role
              ? React.createElement('div', { className: 'case-study-meta-pill' },
                  React.createElement('span', { className: 'case-study-meta-icon', 'aria-hidden': true }, '◆'),
                  React.createElement('span', null,
                    React.createElement('span', { className: 'case-study-meta-label' }, 'Scope'),
                    React.createElement('span', { className: 'case-study-meta-value' }, project.role)
                  )
                )
              : null,
            project.year
              ? React.createElement('div', { className: 'case-study-meta-pill' },
                  React.createElement('span', { className: 'case-study-meta-icon', 'aria-hidden': true }, '◇'),
                  React.createElement('span', null,
                    React.createElement('span', { className: 'case-study-meta-label' }, 'Year'),
                    React.createElement('span', { className: 'case-study-meta-value' }, project.year)
                  )
                )
              : null,
            project.duration
              ? React.createElement('div', { className: 'case-study-meta-pill' },
                  React.createElement('span', { className: 'case-study-meta-icon', 'aria-hidden': true }, '◎'),
                  React.createElement('span', null,
                    React.createElement('span', { className: 'case-study-meta-label' }, 'Timeline'),
                    React.createElement('span', { className: 'case-study-meta-value' }, project.duration)
                  )
                )
              : null
          ),
          stack.length > 0
            ? React.createElement('div', { className: 'case-study-stack' },
                React.createElement('span', { className: 'case-study-stack-label' }, 'Stack & tools'),
                React.createElement('ul', { className: 'case-study-stack-list' },
                  stack.map(function(tech, i) {
                    return React.createElement('li', { key: i, className: 'case-study-stack-item', title: tech },
                      React.createElement('img', {
                        src: stackIconUrl(tech),
                        alt: '',
                        width: 36,
                        height: 36,
                        loading: 'lazy'
                      }),
                      React.createElement('span', { className: 'case-study-stack-name' }, tech)
                    );
                  })
                )
              )
            : null,
          external
            ? React.createElement('a', {
              href: project.linkUrl,
              className: 'case-study-external',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
              'Visit live',
              IconExternal()
            )
            : null
        )
      ),

      highlights.length > 0
        ? React.createElement('section', { className: 'case-study-section case-study-highlights' },
            React.createElement('div', { className: 'case-study-section-inner' },
              DecoSectionAccent(),
              React.createElement('h2', { className: 'case-study-h2' }, 'Highlights'),
              React.createElement('ul', { className: 'case-study-highlight-grid' },
                highlights.map(function(h, i) {
                  return React.createElement('li', { key: i, className: 'case-study-highlight-card' },
                    React.createElement('span', { className: 'case-study-highlight-idx' },
                      (i + 1 < 10 ? '0' : '') + (i + 1)
                    ),
                    React.createElement('span', { className: 'case-study-highlight-text' }, h)
                  );
                })
              )
            )
          )
        : null,

      React.createElement('section', { className: 'case-study-section case-study-split' },
        React.createElement('div', { className: 'case-study-section-inner case-study-split-inner' },
          project.challenge
            ? React.createElement('article', { className: 'case-study-prose-card case-study-prose-card--challenge' },
                React.createElement('div', { className: 'case-study-prose-head' },
                  React.createElement('span', { className: 'case-study-prose-icon case-study-prose-icon--challenge', 'aria-hidden': true }),
                  React.createElement('h2', { className: 'case-study-h3' }, 'Challenge')
                ),
                React.createElement('p', { className: 'case-study-prose' }, project.challenge)
              )
            : null,
          project.solution
            ? React.createElement('article', { className: 'case-study-prose-card case-study-prose-card--solution' },
                React.createElement('div', { className: 'case-study-prose-head' },
                  React.createElement('span', { className: 'case-study-prose-icon case-study-prose-icon--solution', 'aria-hidden': true }),
                  React.createElement('h2', { className: 'case-study-h3' }, 'Solution')
                ),
                React.createElement('p', { className: 'case-study-prose' }, project.solution)
              )
            : null
        )
      ),

      results.length > 0
        ? React.createElement('section', { className: 'case-study-section case-study-results' },
            React.createElement('div', { className: 'case-study-section-inner' },
              React.createElement('h2', { className: 'case-study-h2' }, 'Outcomes'),
              React.createElement('ul', { className: 'case-study-results-list' },
                results.map(function(r, i) {
                  return React.createElement('li', { key: i, className: 'case-study-result-row' },
                    React.createElement('span', { className: 'case-study-result-dot', 'aria-hidden': true }),
                    React.createElement('span', null, r)
                  );
                })
              )
            )
          )
        : null,

      screens.length > 0
        ? React.createElement('section', { className: 'case-study-section case-study-gallery' },
            React.createElement('div', { className: 'case-study-section-inner' },
              React.createElement('h2', { className: 'case-study-h2' }, 'Product screens'),
              React.createElement('p', { className: 'case-study-gallery-lead' },
                'Interface snapshots from the shipped experience — layout, hierarchy, and motion crafted for real users.'
              ),
              React.createElement('div', { className: 'case-study-gallery-grid' },
                screens.map(function(src, i) {
                  return React.createElement('figure', { key: i, className: 'case-study-shot' },
                    React.createElement('div', { className: 'case-study-shot-frame' },
                      React.createElement('img', { src: src, alt: title + ' screen ' + (i + 1), loading: 'lazy' })
                    ),
                    React.createElement('figcaption', { className: 'case-study-shot-cap' }, 'Screen ' + (i + 1))
                  );
                })
              )
            )
          )
        : null,

      (project.tags || []).length > 0
        ? React.createElement('section', { className: 'case-study-section case-study-tags-bar' },
            React.createElement('div', { className: 'case-study-section-inner case-study-tags-inner' },
              React.createElement('span', { className: 'case-study-tags-label' }, 'Tags'),
              React.createElement('div', { className: 'case-study-tags' },
                (project.tags || []).map(function(tag, i) {
                  return React.createElement('span', { key: i, className: 'case-study-tag' }, tag);
                })
              )
            )
          )
        : null,

      React.createElement('section', { className: 'case-study-cta' },
        React.createElement('div', { className: 'case-study-cta-inner' },
          React.createElement('h2', { className: 'case-study-cta-title' }, 'Like what you see?'),
          React.createElement('p', { className: 'case-study-cta-desc' },
            'We can help you go from idea to launch with the same rigor — design systems, engineering, and delivery.'
          ),
          React.createElement('div', { className: 'case-study-cta-row' },
            React.createElement(Link, { to: '/contact', className: 'case-study-cta-btn case-study-cta-btn--primary' }, 'Start a project'),
            React.createElement(Link, { to: '/portfolio', className: 'case-study-cta-btn case-study-cta-btn--ghost' }, 'More work')
          )
        )
      )
    ),
    React.createElement(CyberFooter, null)
  );
}

module.exports = CaseStudyPage;
