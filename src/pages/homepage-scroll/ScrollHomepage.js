'use strict';

/**
 * Scroll-driven homepage sections (React + plain CSS + GSAP ScrollTrigger).
 * Animation logic lives in initGsapScroll.js; this file only defines structure.
 */

var React = require('react');
var useEffect = React.useEffect;
var useRef = React.useRef;
var Link = require('react-router-dom').Link;
var initScrollHomeGsap = require('./initGsapScroll').initScrollHomeGsap;
var ScrollHomeMoreSections = require('./ScrollHomeMoreSections');

require('./style.css');

var CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function IconArrow() {
  return React.createElement('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    'aria-hidden': true
  },
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}

function ScrollHomepage() {
  var rootRef = useRef(null);

  useEffect(function() {
    var el = rootRef.current;
    if (!el) return undefined;
    var cleanup = initScrollHomeGsap(el);
    return cleanup;
  }, []);

  return React.createElement('div', { className: 'scroll-homepage', ref: rootRef },
    /* --- Hero --- */
    React.createElement('section', { className: 'scroll-homepage__hero', 'aria-label': 'Introduction' },
      React.createElement('div', { className: 'scroll-homepage__hero-bg' },
        React.createElement('div', { className: 'scroll-homepage__hero-gradient' }),
        React.createElement('div', { className: 'scroll-homepage__orb scroll-homepage__orb--1' }),
        React.createElement('div', { className: 'scroll-homepage__orb scroll-homepage__orb--2' }),
        React.createElement('div', { className: 'scroll-homepage__orb scroll-homepage__orb--3' }),
        React.createElement('div', { className: 'scroll-homepage__grid' })
      ),
      React.createElement('div', { className: 'scroll-homepage__hero-inner' },
        React.createElement('p', { className: 'scroll-homepage__hero-eyebrow' }, 'ProfitSols'),
        React.createElement('h1', { className: 'scroll-homepage__hero-title' }, 'Services we offer to our clients'),
        React.createElement('p', { className: 'scroll-homepage__hero-sub' },
          'Scroll to explore how we build mobile apps, websites, web applications, and product design — with engineering discipline and a premium, modern experience.'
        )
      ),
      React.createElement('div', { className: 'scroll-homepage__scroll-hint' },
        React.createElement('span', null, 'Scroll'),
        React.createElement('div', { className: 'scroll-homepage__mouse' },
          React.createElement('div', { className: 'scroll-homepage__mouse-wheel' })
        )
      )
    ),

    /* --- Mobile App Development --- */
    React.createElement('section', { className: 'scroll-panel scroll-panel--mobile', 'aria-labelledby': 'sh-mobile-title' },
      React.createElement('div', { className: 'scroll-panel__inner' },
        React.createElement('div', { className: 'scroll-panel__visual' },
          React.createElement('div', { className: 'scroll-panel__glow-card' }),
          React.createElement('div', { className: 'scroll-phone-stage' },
            React.createElement('div', { className: 'scroll-phone-ring', 'aria-hidden': true }),
            React.createElement('div', { className: 'scroll-phone-group js-phone-group' },
              React.createElement('div', { className: 'scroll-tech-pill scroll-tech-pill--android js-android' },
                React.createElement('div', { className: 'scroll-tech-pill__icon' },
                  React.createElement('img', { src: CDN + '/android/android-original.svg', alt: '' })
                ),
                React.createElement('div', { className: 'scroll-tech-pill__meta' },
                  React.createElement('span', { className: 'scroll-tech-pill__name' }, 'Android'),
                  React.createElement('span', { className: 'scroll-tech-pill__sub' }, 'Kotlin · Jetpack')
                )
              ),
              React.createElement('div', { className: 'scroll-phone' },
                React.createElement('div', { className: 'scroll-phone__notch' }),
                React.createElement('div', { className: 'scroll-phone__screen' },
                  React.createElement('div', { className: 'scroll-phone__status' },
                    React.createElement('span', { className: 'scroll-phone__time' }, '9:41'),
                    React.createElement('div', { className: 'scroll-phone__status-icons' },
                      React.createElement('span', { className: 'scroll-phone__wifi' }),
                      React.createElement('span', { className: 'scroll-phone__battery' })
                    )
                  ),
                  React.createElement('div', { className: 'scroll-phone__app-header' },
                    React.createElement('span', { className: 'scroll-phone__app-title' }, 'Product'),
                    React.createElement('span', { className: 'scroll-phone__app-badge' }, 'PRO')
                  ),
                  React.createElement('div', { className: 'scroll-phone__hero-card' },
                    React.createElement('span', { className: 'scroll-phone__hero-label' }, 'Revenue'),
                    React.createElement('span', { className: 'scroll-phone__hero-value' }, '$48.2k'),
                    React.createElement('span', { className: 'scroll-phone__hero-delta' }, '+12.4%')
                  ),
                  React.createElement('div', { className: 'scroll-phone__mini-grid' },
                    React.createElement('div', { className: 'scroll-phone__mini' }),
                    React.createElement('div', { className: 'scroll-phone__mini' }),
                    React.createElement('div', { className: 'scroll-phone__mini' }),
                    React.createElement('div', { className: 'scroll-phone__mini' })
                  ),
                  React.createElement('div', { className: 'scroll-phone__chart' },
                    React.createElement('div', { className: 'scroll-phone__bar', style: { height: '32%' } }),
                    React.createElement('div', { className: 'scroll-phone__bar', style: { height: '55%' } }),
                    React.createElement('div', { className: 'scroll-phone__bar', style: { height: '42%' } }),
                    React.createElement('div', { className: 'scroll-phone__bar', style: { height: '70%' } }),
                    React.createElement('div', { className: 'scroll-phone__bar', style: { height: '38%' } }),
                    React.createElement('div', { className: 'scroll-phone__bar', style: { height: '62%' } })
                  ),
                  React.createElement('div', { className: 'scroll-phone__nav-dots' },
                    React.createElement('span', null),
                    React.createElement('span', { className: 'is-active' }, null),
                    React.createElement('span', null)
                  )
                )
              ),
              React.createElement('div', { className: 'scroll-tech-pill scroll-tech-pill--ios js-ios' },
                React.createElement('div', { className: 'scroll-tech-pill__icon' },
                  React.createElement('img', { src: CDN + '/swift/swift-original.svg', alt: '' })
                ),
                React.createElement('div', { className: 'scroll-tech-pill__meta' },
                  React.createElement('span', { className: 'scroll-tech-pill__name' }, 'iOS'),
                  React.createElement('span', { className: 'scroll-tech-pill__sub' }, 'Swift · SwiftUI')
                )
              )
            )
          )
        ),
        React.createElement('div', { className: 'scroll-panel__content js-mobile-text' },
          React.createElement('p', { className: 'scroll-panel__label' }, '01 — Mobile'),
          React.createElement('h2', { id: 'sh-mobile-title', className: 'scroll-panel__title' }, 'Mobile App Development'),
          React.createElement('p', { className: 'scroll-panel__desc' },
            'Native and cross-platform apps for iOS and Android. We focus on performance, polished UX, and scalable architecture — from discovery to store release and beyond.'
          ),
          React.createElement(Link, { to: '/mobile-app-development', className: 'scroll-panel__cta' },
            'Read more',
            React.createElement(IconArrow, null)
          )
        )
      )
    ),

    /* --- Website Development --- */
    React.createElement('section', { className: 'scroll-panel scroll-panel--website', 'aria-labelledby': 'sh-web-title' },
      React.createElement('div', { className: 'scroll-panel__inner' },
        React.createElement('div', { className: 'scroll-panel__visual' },
          React.createElement('div', { className: 'scroll-panel__glow-card' }),
          React.createElement('div', { className: 'scroll-monitor-group js-monitor-group' },
            React.createElement('div', { className: 'scroll-monitor' },
              React.createElement('div', { className: 'scroll-monitor__bezel' },
                React.createElement('div', { className: 'scroll-monitor__screen' },
                  React.createElement('div', { className: 'scroll-browser' },
                    React.createElement('div', { className: 'scroll-browser__chrome' },
                      React.createElement('div', { className: 'scroll-browser__dots' },
                        React.createElement('span', null),
                        React.createElement('span', null),
                        React.createElement('span', null)
                      ),
                      React.createElement('div', { className: 'scroll-browser__url' },
                        React.createElement('span', { className: 'scroll-browser__lock' }),
                        'profitsols.com'
                      )
                    ),
                    React.createElement('div', { className: 'scroll-browser__page' },
                      React.createElement('div', { className: 'scroll-browser__nav' },
                        React.createElement('span', { className: 'scroll-browser__logo-mark' }),
                        React.createElement('div', { className: 'scroll-browser__nav-links' },
                          React.createElement('span', null),
                          React.createElement('span', null),
                          React.createElement('span', null)
                        )
                      ),
                      React.createElement('div', { className: 'scroll-browser__hero-block' },
                        React.createElement('div', { className: 'scroll-browser__hero-line scroll-browser__hero-line--lg' }),
                        React.createElement('div', { className: 'scroll-browser__hero-line' }),
                        React.createElement('div', { className: 'scroll-browser__cta-fake' }, 'Get started')
                      ),
                      React.createElement('div', { className: 'scroll-browser__cards' },
                        React.createElement('div', { className: 'scroll-browser__card' },
                          React.createElement('div', { className: 'scroll-browser__card-icon' }),
                          React.createElement('div', { className: 'scroll-browser__card-lines' },
                            React.createElement('span', null),
                            React.createElement('span', null)
                          )
                        ),
                        React.createElement('div', { className: 'scroll-browser__card' },
                          React.createElement('div', { className: 'scroll-browser__card-icon scroll-browser__card-icon--alt' }),
                          React.createElement('div', { className: 'scroll-browser__card-lines' },
                            React.createElement('span', null),
                            React.createElement('span', null)
                          )
                        ),
                        React.createElement('div', { className: 'scroll-browser__card' },
                          React.createElement('div', { className: 'scroll-browser__card-icon scroll-browser__card-icon--alt2' }),
                          React.createElement('div', { className: 'scroll-browser__card-lines' },
                            React.createElement('span', null),
                            React.createElement('span', null)
                          )
                        )
                      )
                    )
                  ),
                  React.createElement('div', { className: 'scroll-chrome-badge js-chrome-logo' },
                    React.createElement('img', { src: CDN + '/chrome/chrome-original.svg', alt: '' })
                  )
                )
              )
            ),
            React.createElement('div', { className: 'scroll-monitor__stand' }),
            React.createElement('div', { className: 'scroll-monitor__base' })
          )
        ),
        React.createElement('div', { className: 'scroll-panel__content js-website-text' },
          React.createElement('p', { className: 'scroll-panel__label' }, '02 — Web'),
          React.createElement('h2', { id: 'sh-web-title', className: 'scroll-panel__title' }, 'Website Development'),
          React.createElement('p', { className: 'scroll-panel__desc' },
            'Fast, responsive, SEO-aware sites with a premium visual language. We ship clean code, accessible layouts, and content systems your team can grow with.'
          ),
          React.createElement(Link, { to: '/website-development', className: 'scroll-panel__cta' },
            'Read more',
            React.createElement(IconArrow, null)
          )
        )
      )
    ),

    /* --- Web App Development --- */
    React.createElement('section', { className: 'scroll-panel scroll-panel--webapp', 'aria-labelledby': 'sh-webapp-title' },
      React.createElement('div', { className: 'scroll-panel__inner' },
        React.createElement('div', { className: 'scroll-panel__visual' },
          React.createElement('div', { className: 'scroll-panel__glow-card' }),
          React.createElement('div', { className: 'scroll-dashboard js-webapp-stack' },
            React.createElement('div', { className: 'scroll-dashboard__shell' },
              React.createElement('div', { className: 'scroll-dashboard__sidebar' },
                React.createElement('span', { className: 'scroll-dashboard__sb-item is-active' }),
                React.createElement('span', { className: 'scroll-dashboard__sb-item' }),
                React.createElement('span', { className: 'scroll-dashboard__sb-item' }),
                React.createElement('span', { className: 'scroll-dashboard__sb-item' })
              ),
              React.createElement('div', { className: 'scroll-dashboard__body' },
                React.createElement('div', { className: 'scroll-dashboard__topbar' },
                  React.createElement('div', { className: 'scroll-dashboard__search' }),
                  React.createElement('div', { className: 'scroll-dashboard__pill' }, 'Live')
                ),
                React.createElement('div', { className: 'scroll-dashboard__heading' },
                  React.createElement('span', { className: 'scroll-dashboard__h-title' }, 'Overview'),
                  React.createElement('span', { className: 'scroll-dashboard__h-sub' }, 'Last 7 days')
                ),
                React.createElement('div', { className: 'scroll-dashboard__kpis' },
                  React.createElement('div', { className: 'scroll-dashboard__kpi' },
                    React.createElement('span', { className: 'scroll-dashboard__kpi-label' }, 'Sessions'),
                    React.createElement('span', { className: 'scroll-dashboard__kpi-val' }, '24.8k')
                  ),
                  React.createElement('div', { className: 'scroll-dashboard__kpi' },
                    React.createElement('span', { className: 'scroll-dashboard__kpi-label' }, 'Latency'),
                    React.createElement('span', { className: 'scroll-dashboard__kpi-val' }, '142ms')
                  )
                ),
                React.createElement('div', { className: 'scroll-dashboard__chart' },
                  React.createElement('div', { className: 'scroll-dashboard__bar', style: { height: '45%' } }),
                  React.createElement('div', { className: 'scroll-dashboard__bar', style: { height: '72%' } }),
                  React.createElement('div', { className: 'scroll-dashboard__bar', style: { height: '58%' } }),
                  React.createElement('div', { className: 'scroll-dashboard__bar', style: { height: '88%' } }),
                  React.createElement('div', { className: 'scroll-dashboard__bar', style: { height: '52%' } }),
                  React.createElement('div', { className: 'scroll-dashboard__bar', style: { height: '68%' } }),
                  React.createElement('div', { className: 'scroll-dashboard__bar', style: { height: '40%' } })
                ),
                React.createElement('div', { className: 'scroll-dashboard__table' },
                  React.createElement('div', { className: 'scroll-dashboard__row' },
                    React.createElement('span', { className: 'scroll-dashboard__cell-dot' }),
                    React.createElement('div', { className: 'scroll-dashboard__cell-lines' },
                      React.createElement('span', null),
                      React.createElement('span', null)
                    ),
                    React.createElement('span', { className: 'scroll-dashboard__cell-pill' })
                  ),
                  React.createElement('div', { className: 'scroll-dashboard__row' },
                    React.createElement('span', { className: 'scroll-dashboard__cell-dot scroll-dashboard__cell-dot--2' }),
                    React.createElement('div', { className: 'scroll-dashboard__cell-lines' },
                      React.createElement('span', null),
                      React.createElement('span', null)
                    ),
                    React.createElement('span', { className: 'scroll-dashboard__cell-pill scroll-dashboard__cell-pill--2' })
                  ),
                  React.createElement('div', { className: 'scroll-dashboard__row' },
                    React.createElement('span', { className: 'scroll-dashboard__cell-dot scroll-dashboard__cell-dot--3' }),
                    React.createElement('div', { className: 'scroll-dashboard__cell-lines' },
                      React.createElement('span', null),
                      React.createElement('span', null)
                    ),
                    React.createElement('span', { className: 'scroll-dashboard__cell-pill scroll-dashboard__cell-pill--3' })
                  )
                )
              )
            ),
            React.createElement('div', { className: 'scroll-dashboard__float js-react-badge' },
              React.createElement('img', { src: CDN + '/react/react-original.svg', alt: '', className: 'scroll-dashboard__react' }),
              React.createElement('img', { src: CDN + '/nodejs/nodejs-original.svg', alt: '', className: 'scroll-dashboard__node' })
            )
          )
        ),
        React.createElement('div', { className: 'scroll-panel__content js-webapp-text' },
          React.createElement('p', { className: 'scroll-panel__label' }, '03 — Product'),
          React.createElement('h2', { id: 'sh-webapp-title', className: 'scroll-panel__title' }, 'Web App Development'),
          React.createElement('p', { className: 'scroll-panel__desc' },
            'Dashboards, SaaS, and internal tools with robust APIs and modern frontends. Built for reliability, observability, and iterative delivery.'
          ),
          React.createElement(Link, { to: '/web-app-development', className: 'scroll-panel__cta' },
            'Read more',
            React.createElement(IconArrow, null)
          )
        )
      )
    ),

    /* --- UI/UX Design --- */
    React.createElement('section', { className: 'scroll-panel scroll-panel--uiux', 'aria-labelledby': 'sh-uiux-title' },
      React.createElement('div', { className: 'scroll-panel__inner' },
        React.createElement('div', { className: 'scroll-panel__visual' },
          React.createElement('div', { className: 'scroll-panel__glow-card' }),
          React.createElement('div', { className: 'scroll-artboard js-uiux-canvas' },
            React.createElement('div', { className: 'scroll-artboard__toolbar' },
              React.createElement('span', { className: 'scroll-artboard__tool is-active' }),
              React.createElement('span', { className: 'scroll-artboard__tool' }),
              React.createElement('span', { className: 'scroll-artboard__tool' }),
              React.createElement('span', { className: 'scroll-artboard__sep' }),
              React.createElement('span', { className: 'scroll-artboard__tool scroll-artboard__tool--sm' })
            ),
            React.createElement('div', { className: 'scroll-artboard__board' },
              React.createElement('div', { className: 'scroll-artboard__frame scroll-artboard__frame--phone' },
                React.createElement('div', { className: 'scroll-artboard__frame-notch' }),
                React.createElement('div', { className: 'scroll-artboard__frame-body' },
                  React.createElement('span', null),
                  React.createElement('span', null),
                  React.createElement('span', null)
                )
              ),
              React.createElement('div', { className: 'scroll-artboard__frame scroll-artboard__frame--wide' },
                React.createElement('div', { className: 'scroll-artboard__frame-bar' }),
                React.createElement('div', { className: 'scroll-artboard__frame-grid' },
                  React.createElement('span', null),
                  React.createElement('span', null),
                  React.createElement('span', null),
                  React.createElement('span', null)
                )
              ),
              React.createElement('div', { className: 'scroll-artboard__swatches' },
                React.createElement('span', { style: { background: 'var(--sh-cyan)' } }),
                React.createElement('span', { style: { background: 'var(--sh-pink)' } }),
                React.createElement('span', { style: { background: 'var(--sh-gold)' } }),
                React.createElement('span', { style: { background: '#6b7cff' } })
              ),
              React.createElement('div', { className: 'scroll-artboard__widgets' },
                React.createElement('div', { className: 'scroll-artboard__widget' }),
                React.createElement('div', { className: 'scroll-artboard__widget scroll-artboard__widget--tall' }),
                React.createElement('div', { className: 'scroll-artboard__widget' })
              ),
              React.createElement('img', {
                className: 'scroll-artboard__figma js-figma-badge',
                src: CDN + '/figma/figma-original.svg',
                alt: ''
              })
            )
          )
        ),
        React.createElement('div', { className: 'scroll-panel__content js-uiux-text' },
          React.createElement('p', { className: 'scroll-panel__label' }, '04 — Design'),
          React.createElement('h2', { id: 'sh-uiux-title', className: 'scroll-panel__title' }, 'UI/UX Design'),
          React.createElement('p', { className: 'scroll-panel__desc' },
            'Research-backed interfaces, design systems, and prototypes that align stakeholders and developers. We design for clarity, conversion, and accessibility.'
          ),
          React.createElement(Link, { to: '/ui-ux-development', className: 'scroll-panel__cta' },
            'Read more',
            React.createElement(IconArrow, null)
          )
        )
      )
    ),

    React.createElement(ScrollHomeMoreSections, null),
    React.createElement('div', { className: 'scroll-homepage__end-spacer', 'aria-hidden': true })
  );
}

module.exports = ScrollHomepage;
