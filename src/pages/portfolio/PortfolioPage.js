'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;
var SharedHeader = require('../../components/SharedHeader');
var CyberFooter = require('../../components/CyberFooter');
var portfolioData = require('../../data/portfolio.json');
var getPortfolioSlug = require('../../utils/portfolioHelpers').getPortfolioSlug;
require('./PortfolioPage.css');

function IconArrowRight() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'portfolio-page-icon' },
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}

function PortfolioPage() {
  var items = portfolioData || [];

  return React.createElement('div', { className: 'portfolio-page' },
    React.createElement(SharedHeader, null),
    React.createElement('main', { className: 'portfolio-main' },
      React.createElement('section', { className: 'portfolio-hero' },
        React.createElement('div', { className: 'portfolio-hero-grid' }),
        React.createElement('p', { className: 'portfolio-eyebrow' }, 'Selected work'),
        React.createElement('h1', { className: 'portfolio-title' }, 'Portfolio'),
        React.createElement('p', { className: 'portfolio-lead' },
          'Mobile apps, web platforms, and product experiences we have shipped for clients worldwide — built with clarity, performance, and long-term maintainability.'
        ),
        React.createElement(Link, { to: '/contact', className: 'portfolio-hero-cta' },
          'Start a project',
          React.createElement(IconArrowRight, null)
        )
      ),
      React.createElement('section', { className: 'portfolio-grid-section' },
        items.length === 0
          ? React.createElement('p', { className: 'portfolio-empty' }, 'No portfolio items yet. Add entries to src/data/portfolio.json.')
          : React.createElement('div', { className: 'portfolio-cards' },
            items.map(function(item, i) {
              return React.createElement('article', { key: item.id + '-' + i, className: 'portfolio-card' },
                React.createElement('div', { className: 'portfolio-card-visual' },
                  item.logoUrl
                    ? React.createElement('img', { src: item.logoUrl, alt: item.title, className: 'portfolio-card-logo' })
                    : React.createElement('div', { className: 'portfolio-card-placeholder' }, item.title.charAt(0))
                ),
                React.createElement('div', { className: 'portfolio-card-body' },
                  React.createElement('h2', { className: 'portfolio-card-title' }, item.title),
                  React.createElement('p', { className: 'portfolio-card-desc' }, item.description),
                  (item.tags || []).length > 0
                    ? React.createElement('div', { className: 'portfolio-tags' },
                      (item.tags || []).map(function(tag, ti) {
                        return React.createElement('span', { key: ti, className: 'portfolio-tag' }, tag);
                      })
                    )
                    : null,
                  React.createElement(Link, {
                    to: '/portfolio/' + getPortfolioSlug(item),
                    className: 'portfolio-card-link'
                  },
                    'View case study',
                    React.createElement(IconArrowRight, null)
                  )
                )
              );
            })
          )
      )
    ),
    React.createElement(CyberFooter, null)
  );
}

module.exports = PortfolioPage;
