'use strict';

/**
 * Additional homepage sections (platforms, about, portfolio, clients, why-us, news)
 * Styled to match the scroll homepage dark SaaS theme.
 */

var React = require('react');
var useState = React.useState;
var Link = require('react-router-dom').Link;
var portfolioData = require('../../data/portfolio.json');
var platformsData = require('../../data/platforms.json');
var getPortfolioSlug = require('../../utils/portfolioHelpers').getPortfolioSlug;
var getPlatformLogoUrl = require('../../utils/platformLogos').getPlatformLogoUrl;
var applyPlatformLogoFallback = require('../../utils/platformLogos').applyPlatformLogoFallback;

function IconStar() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'sh-more-icon' },
    React.createElement('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })
  );
}

function IconCheck() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'sh-more-icon' },
    React.createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
    React.createElement('polyline', { points: '22 4 12 14.01 9 11.01' })
  );
}

function IconArrowRight() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'sh-more-icon sh-more-icon--sm' },
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}

function IconFileText() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'sh-more-icon sh-more-icon--lg' },
    React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
    React.createElement('polyline', { points: '14 2 14 8 20 8' })
  );
}

function ScrollHomeMoreSections() {
  var items = portfolioData || [];
  var _useState = useState(0);
  var activeIndex = _useState[0];
  var setActiveIndex = _useState[1];

  var goPrev = function() {
    if (items.length === 0) return;
    setActiveIndex(function(i) { return i <= 0 ? items.length - 1 : i - 1; });
  };
  var goNext = function() {
    if (items.length === 0) return;
    setActiveIndex(function(i) { return i >= items.length - 1 ? 0 : i + 1; });
  };

  var platforms = Array.isArray(platformsData) ? platformsData : [];

  var whyItems = [
    { title: 'Client Satisfaction', desc: 'Timely delivery and quality that earns long-term trust.', icon: IconCheck },
    { title: 'High Quality Service', desc: 'Senior engineers and designers on every engagement.', icon: IconStar },
    { title: 'Dedicated Support', desc: 'Responsive communication across time zones.', icon: IconStar },
    { title: 'Free Consultation', desc: 'No-cost discovery to align scope and tech choices.', icon: IconCheck }
  ];

  var news = [
    { title: 'Mobile frameworks in 2024', desc: 'How teams choose between Flutter, React Native, and native stacks for product velocity.' },
    { title: 'Web performance essentials', desc: 'Core Web Vitals, caching, and modern bundling for faster user experiences.' },
    { title: 'Design systems at scale', desc: 'Tokens, components, and handoff practices that keep design and code in sync.' }
  ];

  var activeItem = items.length ? items[activeIndex] : null;

  return React.createElement('div', { className: 'scroll-home-extra' },
    React.createElement('section', { className: 'sh-more sh-more--platforms sh-reveal', id: 'platforms' },
      React.createElement('p', { className: 'sh-more__eyebrow' }, 'Trusted platforms'),
      React.createElement('h2', { className: 'sh-more__title' }, 'Listed across top industry platforms'),
      React.createElement('div', { className: 'sh-more__platform-grid' },
        platforms.map(function(p, i) {
          var href = p.website || '#';
          return React.createElement('a', {
            key: p.name + '-' + i,
            className: 'sh-more__platform-card',
            href: href,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': p.name + ' (opens in new tab)'
          },
            React.createElement('span', { className: 'sh-more__platform-logo-wrap' },
              React.createElement('img', {
                src: getPlatformLogoUrl(p),
                alt: '',
                className: 'sh-more__platform-logo',
                loading: 'lazy',
                decoding: 'async',
                onError: function(e) {
                  applyPlatformLogoFallback(e.target, p);
                }
              })
            ),
            React.createElement('span', { className: 'sh-more__platform-name' }, p.name)
          );
        })
      )
    ),

    React.createElement('section', { className: 'sh-more sh-more--about sh-reveal', id: 'company' },
      React.createElement('p', { className: 'sh-more__eyebrow' }, 'About us'),
      React.createElement('h2', { className: 'sh-more__title' }, 'Software development company in Islamabad, Pakistan'),
      React.createElement('div', { className: 'sh-more__about-text' },
        React.createElement('p', null,
          'ProfitSols is a leading software development company in Islamabad, Pakistan. Our core motive is to provide one-stop solutions for mobile, web, and design — for clients worldwide.'
        ),
        React.createElement('p', null,
          'We are recognized across top platforms and deliver innovative, quality solutions across industries. Our team stays current with modern stacks and best practices.'
        ),
        React.createElement('p', null,
          'From discovery to launch and ongoing support, we focus on clear communication, maintainable code, and outcomes you can measure.'
        )
      ),
      React.createElement(Link, { to: '/company', className: 'sh-more__link-btn' }, 'Learn more about us', React.createElement(IconArrowRight, null))
    ),

    React.createElement('section', { className: 'sh-more sh-more--portfolio sh-reveal', id: 'portfolio' },
      React.createElement('p', { className: 'sh-more__eyebrow' }, 'Portfolio'),
      React.createElement('h2', { className: 'sh-more__title' }, 'Case studies'),
      items.length === 0
        ? React.createElement('p', { className: 'sh-more__empty' }, 'Add projects to src/data/portfolio.json')
        : React.createElement('div', { className: 'sh-more__case' },
          React.createElement('button', { type: 'button', className: 'sh-more__case-nav', 'aria-label': 'Previous', onClick: goPrev },
            React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: 22, height: 22 },
              React.createElement('polyline', { points: '15 18 9 12 15 6' })
            )
          ),
          React.createElement('div', { className: 'sh-more__case-card' },
            activeItem && React.createElement('div', { className: 'sh-more__case-body' },
              React.createElement('div', { className: 'sh-more__case-head' },
                activeItem.logoUrl
                  ? React.createElement('img', { src: activeItem.logoUrl, alt: '', className: 'sh-more__case-logo' })
                  : null,
                React.createElement('div', { className: 'sh-more__case-tags' },
                  (activeItem.tags || []).slice(0, 4).map(function(tag, ti) {
                    return React.createElement('span', { key: ti, className: 'sh-more__tag' }, tag);
                  })
                )
              ),
              React.createElement('h3', { className: 'sh-more__case-title' }, activeItem.title),
              React.createElement('p', { className: 'sh-more__case-desc' }, activeItem.description),
              React.createElement('div', { className: 'sh-more__case-actions' },
                React.createElement(Link, {
                  to: '/portfolio/' + getPortfolioSlug(activeItem),
                  className: 'sh-more__link-btn'
                },
                  'View case study',
                  React.createElement(IconArrowRight, null)
                ),
                React.createElement(Link, { to: '/portfolio', className: 'sh-more__link-btn sh-more__link-btn--ghost' },
                  'All projects',
                  React.createElement(IconArrowRight, null)
                )
              )
            ),
            React.createElement('div', { className: 'sh-more__case-visual' },
              React.createElement('div', { className: 'sh-more__case-phone' },
                (function() {
                  var sc = activeItem.screens;
                  var src = sc && (sc[1] || sc[0]);
                  return src
                    ? React.createElement('img', { src: src, alt: '', className: 'sh-more__case-screen' })
                    : React.createElement('div', { className: 'sh-more__case-placeholder' }, 'Preview');
                })()
              )
            )
          ),
          React.createElement('button', { type: 'button', className: 'sh-more__case-nav', 'aria-label': 'Next', onClick: goNext },
            React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: 22, height: 22 },
              React.createElement('polyline', { points: '9 18 15 12 9 6' })
            )
          )
        ),
      items.length > 1 ? React.createElement('div', { className: 'sh-more__dots' },
        items.map(function(_, i) {
          return React.createElement('button', {
            key: i,
            type: 'button',
            className: 'sh-more__dot' + (i === activeIndex ? ' is-active' : ''),
            'aria-label': 'Slide ' + (i + 1),
            onClick: function() { setActiveIndex(i); }
          });
        })
      ) : null
    ),

    React.createElement('section', { className: 'sh-more sh-more--clients sh-reveal' },
      React.createElement('p', { className: 'sh-more__eyebrow' }, 'Partners'),
      React.createElement('h2', { className: 'sh-more__title' }, 'Our clients'),
      React.createElement('div', { className: 'sh-more__clients-grid' },
        [1, 2, 3, 4, 5].map(function(n) {
          return React.createElement('div', { key: n, className: 'sh-more__client-card' }, 'Client ' + n);
        })
      )
    ),

    React.createElement('section', { className: 'sh-more sh-more--why sh-reveal' },
      React.createElement('p', { className: 'sh-more__eyebrow' }, 'Why ProfitSols'),
      React.createElement('h2', { className: 'sh-more__title' }, 'Why choose us?'),
      React.createElement('div', { className: 'sh-more__why-grid' },
        whyItems.map(function(item, i) {
          var Icon = item.icon;
          return React.createElement('div', { key: i, className: 'sh-more__why-card' },
            React.createElement('div', { className: 'sh-more__why-icon' }, React.createElement(Icon, null)),
            React.createElement('h3', { className: 'sh-more__why-title' }, item.title),
            React.createElement('p', { className: 'sh-more__why-desc' }, item.desc)
          );
        })
      )
    ),

    React.createElement('section', { className: 'sh-more sh-more--news sh-reveal', id: 'news' },
      React.createElement('p', { className: 'sh-more__eyebrow' }, 'Insights'),
      React.createElement('h2', { className: 'sh-more__title' }, 'Latest news'),
      React.createElement('div', { className: 'sh-more__news-grid' },
        news.map(function(item, i) {
          return React.createElement('article', { key: i, className: 'sh-more__news-card' },
            React.createElement('div', { className: 'sh-more__news-visual' }, React.createElement(IconFileText, null)),
            React.createElement('h3', { className: 'sh-more__news-title' }, item.title),
            React.createElement('p', { className: 'sh-more__news-desc' }, item.desc),
            React.createElement('span', { className: 'sh-more__news-fake-link' }, 'Read more', React.createElement(IconArrowRight, null))
          );
        })
      )
    )
  );
}

module.exports = ScrollHomeMoreSections;
