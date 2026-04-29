'use strict';

var portfolioData = require('../data/portfolio.json');

function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getPortfolioItems() {
  return Array.isArray(portfolioData) ? portfolioData : [];
}

function getPortfolioSlug(item) {
  if (!item) return '';
  return item.slug || slugify(item.title);
}

function getPortfolioBySlug(slug) {
  if (!slug) return null;
  var items = getPortfolioItems();
  for (var i = 0; i < items.length; i++) {
    if (getPortfolioSlug(items[i]) === slug) {
      return items[i];
    }
  }
  return null;
}

module.exports = {
  slugify: slugify,
  getPortfolioItems: getPortfolioItems,
  getPortfolioSlug: getPortfolioSlug,
  getPortfolioBySlug: getPortfolioBySlug
};
