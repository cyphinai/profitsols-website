'use strict';

/**
 * Reliable platform marks: Google favicon API + DuckDuckGo icon fallback.
 * (Clearbit public URLs are often empty or blocked.)
 */

function getGoogleFaviconUrl(domain, size) {
  var sz = size || 128;
  if (!domain) return '';
  return 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=' + sz;
}

function getDuckDuckGoIconUrl(domain) {
  if (!domain) return '';
  return 'https://icons.duckduckgo.com/ip3/' + encodeURIComponent(domain) + '.ico';
}

/**
 * Primary logo URL for a platform entry.
 * Uses explicit logoUrl if set (e.g. local /images/...), else Google favicon from `domain`.
 */
function getPlatformLogoUrl(entry) {
  if (!entry) return '';
  if (entry.logoUrl) {
    return entry.logoUrl;
  }
  if (entry.domain) {
    return getGoogleFaviconUrl(entry.domain, 256);
  }
  if (entry.website) {
    try {
      var u = new URL(entry.website);
      var host = u.hostname.replace(/^www\./, '');
      return getGoogleFaviconUrl(host, 256);
    } catch (e) {
      return '';
    }
  }
  return '';
}

/**
 * For <img onError> — try DDG ico if Google failed.
 */
function applyPlatformLogoFallback(imgEl, entry) {
  if (!imgEl || !entry) return;
  var domain = entry.domain;
  if (!domain && entry.website) {
    try {
      domain = new URL(entry.website).hostname.replace(/^www\./, '');
    } catch (e) {
      return;
    }
  }
  if (!domain) return;
  if (imgEl.getAttribute('data-logo-fallback') === '1') {
    imgEl.style.visibility = 'hidden';
    return;
  }
  imgEl.setAttribute('data-logo-fallback', '1');
  imgEl.src = getDuckDuckGoIconUrl(domain);
}

module.exports = {
  getPlatformLogoUrl: getPlatformLogoUrl,
  getGoogleFaviconUrl: getGoogleFaviconUrl,
  getDuckDuckGoIconUrl: getDuckDuckGoIconUrl,
  applyPlatformLogoFallback: applyPlatformLogoFallback
};
