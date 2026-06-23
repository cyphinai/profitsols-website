'use strict';

var React = require('react');

var CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function TechPill(props) {
  return React.createElement('div', { className: 'scroll-tech-pill ' + (props.className || '') },
    React.createElement('div', { className: 'scroll-tech-pill__icon' },
      React.createElement('img', { src: props.src, alt: '', loading: 'lazy', decoding: 'async' })
    ),
    React.createElement('div', { className: 'scroll-tech-pill__meta' },
      React.createElement('span', { className: 'scroll-tech-pill__name' }, props.name),
      React.createElement('span', { className: 'scroll-tech-pill__sub' }, props.sub)
    )
  );
}

function MobileVisual() {
  return React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'scroll-panel__glow-card' }),
    React.createElement('div', { className: 'scroll-phone-stage' },
      React.createElement('div', { className: 'scroll-phone-ring', 'aria-hidden': true }),
      React.createElement('div', { className: 'scroll-phone-stack js-phone-group' },
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
              React.createElement('span', { className: 'scroll-phone__app-title' }, 'Fitness Pro'),
              React.createElement('span', { className: 'scroll-phone__app-badge' }, 'LIVE')
            ),
            React.createElement('div', { className: 'scroll-phone__hero-card' },
              React.createElement('span', { className: 'scroll-phone__hero-label' }, 'Active users'),
              React.createElement('span', { className: 'scroll-phone__hero-value' }, '18.6k'),
              React.createElement('span', { className: 'scroll-phone__hero-delta' }, '+8.2%')
            ),
            React.createElement('div', { className: 'scroll-phone__mini-grid' },
              React.createElement('div', { className: 'scroll-phone__mini scroll-phone__mini--stat' },
                React.createElement('span', { className: 'scroll-phone__mini-val' }, '4.8'),
                React.createElement('span', { className: 'scroll-phone__mini-lbl' }, 'Rating')
              ),
              React.createElement('div', { className: 'scroll-phone__mini scroll-phone__mini--stat' },
                React.createElement('span', { className: 'scroll-phone__mini-val' }, '12k'),
                React.createElement('span', { className: 'scroll-phone__mini-lbl' }, 'Downloads')
              )
            ),
            React.createElement('div', { className: 'scroll-phone__chart' },
              [32, 55, 42, 70, 38, 62, 48].map(function(h, i) {
                return React.createElement('div', { key: i, className: 'scroll-phone__bar', style: { height: h + '%' } });
              })
            )
          )
        ),
        React.createElement('div', { className: 'scroll-phone__tech-row' },
          React.createElement(TechPill, {
            className: 'scroll-tech-pill--compact scroll-tech-pill--android js-android',
            src: CDN + '/android/android-original.svg',
            name: 'Android',
            sub: 'Kotlin'
          }),
          React.createElement(TechPill, {
            className: 'scroll-tech-pill--compact scroll-tech-pill--ios js-ios',
            src: CDN + '/swift/swift-original.svg',
            name: 'iOS',
            sub: 'Swift'
          }),
          React.createElement(TechPill, {
            className: 'scroll-tech-pill--compact scroll-tech-pill--flutter js-flutter',
            src: CDN + '/flutter/flutter-original.svg',
            name: 'Flutter',
            sub: 'Cross-platform'
          })
        )
      )
    )
  );
}

function WebsiteVisual() {
  return React.createElement(React.Fragment, null,
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
                  React.createElement('img', {
                    className: 'scroll-browser__favicon',
                    src: CDN + '/chrome/chrome-original.svg',
                    alt: '',
                    width: 12,
                    height: 12
                  }),
                  'yourbrand.com'
                ),
                React.createElement('span', { className: 'scroll-browser__score' }, 'SEO 98')
              ),
              React.createElement('div', { className: 'scroll-browser__page' },
                React.createElement('div', { className: 'scroll-browser__nav' },
                  React.createElement('span', { className: 'scroll-browser__brand' }, 'YOUR BRAND'),
                  React.createElement('div', { className: 'scroll-browser__nav-links' },
                    React.createElement('span', { className: 'scroll-browser__nav-text' }, 'Home'),
                    React.createElement('span', { className: 'scroll-browser__nav-text' }, 'Services'),
                    React.createElement('span', { className: 'scroll-browser__nav-text' }, 'Contact')
                  )
                ),
                React.createElement('div', { className: 'scroll-browser__hero-block' },
                  React.createElement('span', { className: 'scroll-browser__hero-tag' }, 'Responsive · SEO-ready'),
                  React.createElement('span', { className: 'scroll-browser__hero-title' }, 'Grow online with a fast website'),
                  React.createElement('span', { className: 'scroll-browser__hero-sub' }, 'Built for search, speed & conversions'),
                  React.createElement('span', { className: 'scroll-browser__cta-fake' }, 'Get a quote')
                ),
                React.createElement('div', { className: 'scroll-browser__cards' },
                  React.createElement('div', { className: 'scroll-browser__card scroll-browser__card--seo' },
                    React.createElement('img', { src: CDN + '/html5/html5-original.svg', alt: '', className: 'scroll-browser__card-logo' }),
                    React.createElement('span', { className: 'scroll-browser__card-label' }, 'SEO'),
                    React.createElement('span', { className: 'scroll-browser__card-val' }, '98 score')
                  ),
                  React.createElement('div', { className: 'scroll-browser__card scroll-browser__card--speed' },
                    React.createElement('img', { src: CDN + '/css3/css3-original.svg', alt: '', className: 'scroll-browser__card-logo' }),
                    React.createElement('span', { className: 'scroll-browser__card-label' }, 'Speed'),
                    React.createElement('span', { className: 'scroll-browser__card-val' }, '1.8s load')
                  ),
                  React.createElement('div', { className: 'scroll-browser__card scroll-browser__card--cms' },
                    React.createElement('img', { src: CDN + '/wordpress/wordpress-plain.svg', alt: '', className: 'scroll-browser__card-logo' }),
                    React.createElement('span', { className: 'scroll-browser__card-label' }, 'CMS'),
                    React.createElement('span', { className: 'scroll-browser__card-val' }, 'WordPress')
                  )
                )
              )
            ),
            React.createElement('div', { className: 'scroll-chrome-badge js-chrome-logo' },
              React.createElement('img', { src: CDN + '/react/react-original.svg', alt: '', loading: 'lazy', decoding: 'async' })
            )
          )
        )
      ),
      React.createElement('div', { className: 'scroll-monitor__stand' }),
      React.createElement('div', { className: 'scroll-monitor__base' })
    )
  );
}

function WebAppVisual() {
  return React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'scroll-panel__glow-card' }),
    React.createElement('div', { className: 'scroll-dashboard js-webapp-stack' },
      React.createElement('div', { className: 'scroll-dashboard__shell' },
        React.createElement('div', { className: 'scroll-dashboard__sidebar' },
          React.createElement('span', { className: 'scroll-dashboard__sb-item is-active' }, 'Dashboard'),
          React.createElement('span', { className: 'scroll-dashboard__sb-item' }, 'Users'),
          React.createElement('span', { className: 'scroll-dashboard__sb-item' }, 'Billing'),
          React.createElement('span', { className: 'scroll-dashboard__sb-item' }, 'Settings')
        ),
        React.createElement('div', { className: 'scroll-dashboard__body' },
          React.createElement('div', { className: 'scroll-dashboard__topbar' },
            React.createElement('div', { className: 'scroll-dashboard__search' }, 'Search customers…'),
            React.createElement('div', { className: 'scroll-dashboard__pill' }, 'API Live')
          ),
          React.createElement('div', { className: 'scroll-dashboard__heading' },
            React.createElement('span', { className: 'scroll-dashboard__h-title' }, 'SaaS Overview'),
            React.createElement('span', { className: 'scroll-dashboard__h-sub' }, 'Real-time metrics')
          ),
          React.createElement('div', { className: 'scroll-dashboard__kpis' },
            React.createElement('div', { className: 'scroll-dashboard__kpi' },
              React.createElement('span', { className: 'scroll-dashboard__kpi-label' }, 'MRR'),
              React.createElement('span', { className: 'scroll-dashboard__kpi-val' }, '$84k')
            ),
            React.createElement('div', { className: 'scroll-dashboard__kpi' },
              React.createElement('span', { className: 'scroll-dashboard__kpi-label' }, 'Users'),
              React.createElement('span', { className: 'scroll-dashboard__kpi-val' }, '2,410')
            ),
            React.createElement('div', { className: 'scroll-dashboard__kpi scroll-dashboard__kpi--uptime' },
              React.createElement('span', { className: 'scroll-dashboard__kpi-label' }, 'Uptime'),
              React.createElement('span', { className: 'scroll-dashboard__kpi-val' }, '99.9%')
            )
          ),
          React.createElement('div', { className: 'scroll-dashboard__chart' },
            [45, 72, 58, 88, 52, 68, 40, 76].map(function(h, i) {
              return React.createElement('div', { key: i, className: 'scroll-dashboard__bar', style: { height: h + '%' } });
            })
          ),
          React.createElement('div', { className: 'scroll-dashboard__table' },
            React.createElement('div', { className: 'scroll-dashboard__row' },
              React.createElement('span', { className: 'scroll-dashboard__cell-dot' }),
              React.createElement('div', { className: 'scroll-dashboard__cell-lines' },
                React.createElement('span', { className: 'scroll-dashboard__cell-title' }, 'Deploy v2.4'),
                React.createElement('span', null, 'Production · 2m ago')
              ),
              React.createElement('span', { className: 'scroll-dashboard__cell-pill' }, 'Success')
            ),
            React.createElement('div', { className: 'scroll-dashboard__row' },
              React.createElement('span', { className: 'scroll-dashboard__cell-dot scroll-dashboard__cell-dot--2' }),
              React.createElement('div', { className: 'scroll-dashboard__cell-lines' },
                React.createElement('span', { className: 'scroll-dashboard__cell-title' }, 'REST API'),
                React.createElement('span', null, '142ms avg latency')
              ),
              React.createElement('span', { className: 'scroll-dashboard__cell-pill scroll-dashboard__cell-pill--2' }, 'Healthy')
            ),
            React.createElement('div', { className: 'scroll-dashboard__row' },
              React.createElement('span', { className: 'scroll-dashboard__cell-dot scroll-dashboard__cell-dot--3' }),
              React.createElement('div', { className: 'scroll-dashboard__cell-lines' },
                React.createElement('span', { className: 'scroll-dashboard__cell-title' }, 'Auth · OAuth'),
                React.createElement('span', null, '1,204 sessions today')
              ),
              React.createElement('span', { className: 'scroll-dashboard__cell-pill scroll-dashboard__cell-pill--3' }, 'Active')
            )
          )
        )
      ),
      React.createElement('div', { className: 'scroll-dashboard__float js-react-badge' },
        React.createElement('img', { src: CDN + '/react/react-original.svg', alt: '', className: 'scroll-dashboard__react', loading: 'lazy', decoding: 'async' }),
        React.createElement('img', { src: CDN + '/nodejs/nodejs-original.svg', alt: '', className: 'scroll-dashboard__node', loading: 'lazy', decoding: 'async' })
      )
    )
  );
}

function UIUXVisual() {
  return React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'scroll-panel__glow-card' }),
    React.createElement('div', { className: 'scroll-artboard scroll-artboard--v2 js-uiux-canvas' },
      React.createElement('div', { className: 'scroll-artboard__header' },
        React.createElement('div', { className: 'scroll-artboard__header-left' },
          React.createElement('span', { className: 'scroll-artboard__dot scroll-artboard__dot--pink' }),
          React.createElement('span', { className: 'scroll-artboard__file' }, 'ProfitSols · Product UI'),
          React.createElement('span', { className: 'scroll-artboard__saved' }, 'Saved')
        ),
        React.createElement('span', { className: 'scroll-artboard__mode' }, 'Prototype')
      ),
      React.createElement('div', { className: 'scroll-artboard__workspace' },
        React.createElement('aside', { className: 'scroll-artboard__layers', 'aria-hidden': true },
          React.createElement('span', { className: 'scroll-artboard__panel-title' }, 'Layers'),
          React.createElement('ul', { className: 'scroll-artboard__layer-list' },
            React.createElement('li', { className: 'is-active' }, 'Onboarding'),
            React.createElement('li', null, 'Dashboard'),
            React.createElement('li', null, 'Components'),
            React.createElement('li', null, 'Design tokens')
          )
        ),
        React.createElement('div', { className: 'scroll-artboard__canvas' },
          React.createElement('span', { className: 'scroll-artboard__flow-tag' }, 'User journey'),
          React.createElement('div', { className: 'scroll-artboard__frames-row' },
            React.createElement('div', { className: 'scroll-artboard__frame-v2 scroll-artboard__frame-v2--mobile' },
              React.createElement('span', { className: 'scroll-artboard__frame-tag' }, 'Mobile · 375'),
              React.createElement('div', { className: 'scroll-artboard__wf-mobile' },
                React.createElement('span', { className: 'scroll-artboard__wf-avatar' }),
                React.createElement('span', { className: 'scroll-artboard__wf-title' }, 'Welcome back'),
                React.createElement('span', { className: 'scroll-artboard__wf-field' }, 'Email address'),
                React.createElement('span', { className: 'scroll-artboard__wf-field' }, 'Password'),
                React.createElement('span', { className: 'scroll-artboard__wf-btn' }, 'Sign in')
              )
            ),
            React.createElement('div', { className: 'scroll-artboard__flow-arrow', 'aria-hidden': true },
              React.createElement('span', { className: 'scroll-artboard__flow-arrow-line' }),
              React.createElement('span', { className: 'scroll-artboard__flow-arrow-head' })
            ),
            React.createElement('div', { className: 'scroll-artboard__frame-v2 scroll-artboard__frame-v2--desktop' },
              React.createElement('span', { className: 'scroll-artboard__frame-tag' }, 'Web · 1440'),
              React.createElement('div', { className: 'scroll-artboard__wf-desktop' },
                React.createElement('div', { className: 'scroll-artboard__wf-dtop-bar' }),
                React.createElement('div', { className: 'scroll-artboard__wf-dtop-body' },
                  React.createElement('span', { className: 'scroll-artboard__wf-dtop-nav' }),
                  React.createElement('div', { className: 'scroll-artboard__wf-dtop-grid' },
                    React.createElement('span', { className: 'scroll-artboard__wf-dtop-card scroll-artboard__wf-dtop-card--chart' }),
                    React.createElement('span', { className: 'scroll-artboard__wf-dtop-card' }, 'KPI'),
                    React.createElement('span', { className: 'scroll-artboard__wf-dtop-card' }, 'Users'),
                    React.createElement('span', { className: 'scroll-artboard__wf-dtop-card' }, 'Table')
                  )
                )
              )
            )
          )
        ),
        React.createElement('aside', { className: 'scroll-artboard__props', 'aria-hidden': true },
          React.createElement('span', { className: 'scroll-artboard__panel-title' }, 'Design system'),
          React.createElement('div', { className: 'scroll-artboard__token-block' },
            React.createElement('span', { className: 'scroll-artboard__token-label' }, 'Colors'),
            React.createElement('div', { className: 'scroll-artboard__token-swatches' },
              React.createElement('span', { className: 'scroll-artboard__token-swatch', style: { background: 'var(--sh-cyan)' }, title: 'Primary' }),
              React.createElement('span', { className: 'scroll-artboard__token-swatch', style: { background: 'var(--sh-pink)' }, title: 'Accent' }),
              React.createElement('span', { className: 'scroll-artboard__token-swatch', style: { background: 'var(--sh-gold)' }, title: 'Highlight' })
            )
          ),
          React.createElement('div', { className: 'scroll-artboard__token-block' },
            React.createElement('span', { className: 'scroll-artboard__token-label' }, 'Type'),
            React.createElement('span', { className: 'scroll-artboard__type-sample' }, 'Aa Heading'),
            React.createElement('span', { className: 'scroll-artboard__type-sample scroll-artboard__type-sample--body' }, 'Body text · 16px')
          ),
          React.createElement('div', { className: 'scroll-artboard__token-block' },
            React.createElement('span', { className: 'scroll-artboard__token-label' }, 'Components'),
            React.createElement('div', { className: 'scroll-artboard__comp-chips' },
              React.createElement('span', { className: 'scroll-artboard__comp-chip' }, 'Button'),
              React.createElement('span', { className: 'scroll-artboard__comp-chip' }, 'Input'),
              React.createElement('span', { className: 'scroll-artboard__comp-chip' }, 'Card')
            )
          )
        )
      ),
      React.createElement('img', {
        className: 'scroll-artboard__figma js-figma-badge',
        src: CDN + '/figma/figma-original.svg',
        alt: '',
        loading: 'lazy',
        decoding: 'async'
      })
    )
  );
}

module.exports = {
  MobileVisual: MobileVisual,
  WebsiteVisual: WebsiteVisual,
  WebAppVisual: WebAppVisual,
  UIUXVisual: UIUXVisual
};
