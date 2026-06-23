'use strict';

var React = require('react');

var CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

var SERVICES = [
  { id: 'mobile', label: 'Mobile Apps', sub: 'iOS · Android · Flutter', accent: 'cyan', pos: 'tl' },
  { id: 'website', label: 'Websites', sub: 'SEO · Performance', accent: 'blue', pos: 'tr' },
  { id: 'design', label: 'UI/UX Design', sub: 'Figma · Prototypes', accent: 'pink', pos: 'bl' },
  { id: 'webapp', label: 'Web Apps', sub: 'SaaS · Dashboards', accent: 'gold', pos: 'br' }
];

var TECH = [
  { name: 'React', src: CDN + '/react/react-original.svg' },
  { name: 'Flutter', src: CDN + '/flutter/flutter-original.svg' },
  { name: 'Node.js', src: CDN + '/nodejs/nodejs-original.svg' },
  { name: 'Figma', src: CDN + '/figma/figma-original.svg' }
];

var BROWSER_TILES = [
  { label: 'Mobile', accent: 'cyan' },
  { label: 'Web', accent: 'blue' },
  { label: 'UI/UX', accent: 'pink' },
  { label: 'SaaS', accent: 'gold' }
];

var LOGO_P_PATH =
  'M318.00 405.20 Q303.60 416.00 287.01 409.02 L141.59 347.88 Q125.00 340.90 136.86 327.36 L139.94 323.84 Q151.80 310.30 169.80 310.17 L324.30 309.03 Q342.30 308.90 356.68 298.07 L374.12 284.93 Q388.50 274.10 384.91 256.46 L380.19 233.34 Q376.60 215.70 360.82 207.04 L298.58 172.86 Q282.80 164.20 281.31 146.26 L279.79 127.84 Q278.30 109.90 295.78 114.19 L408.22 141.81 Q425.70 146.10 431.87 163.01 L461.13 243.29 Q467.30 260.20 464.50 277.98 L464.20 279.92 Q461.40 297.70 447.00 308.50 Z M226.30 267.10 Q214.30 267.10 210.27 255.80 L158.39 110.28 Q154.80 100.20 154.80 89.50 L154.80 88.60 Q154.80 77.90 162.62 70.59 L181.74 52.70 Q190.50 44.50 194.01 55.98 L234.59 188.82 Q238.10 200.30 246.87 208.49 L253.65 214.81 Q262.00 222.60 273.42 222.60 L274.38 222.60 Q285.80 222.60 295.49 228.65 L312.46 239.25 Q321.50 244.90 321.50 255.56 L321.50 256.44 Q321.50 267.10 310.84 267.10 Z';

function BrowserFavicon() {
  return React.createElement('span', { className: 'hero-infographic__browser-favicon', 'aria-hidden': true },
    React.createElement('svg', { viewBox: '0 0 512 512', focusable: false },
      React.createElement('defs', null,
        React.createElement('linearGradient', { id: 'heroBrowserFavicon', x1: '50%', y1: '0%', x2: '50%', y2: '100%' },
          React.createElement('stop', { offset: '0%', stopColor: '#5EECD5' }),
          React.createElement('stop', { offset: '30%', stopColor: '#9787FF' }),
          React.createElement('stop', { offset: '58%', stopColor: '#DA47E8' }),
          React.createElement('stop', { offset: '100%', stopColor: '#FF6B5C' })
        )
      ),
      React.createElement('g', { transform: 'translate(512 0) scale(-1 1)' },
        React.createElement('g', { transform: 'rotate(180 256 256)' },
          React.createElement('path', {
            fill: 'url(#heroBrowserFavicon)',
            fillRule: 'nonzero',
            d: LOGO_P_PATH
          })
        )
      )
    )
  );
}

function ServiceIcon(props) {
  var id = props.id;
  var common = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.75', strokeLinecap: 'round', strokeLinejoin: 'round' };

  if (id === 'mobile') {
    return React.createElement('svg', common,
      React.createElement('rect', { x: '7', y: '2.5', width: '10', height: '19', rx: '2.5' }),
      React.createElement('line', { x1: '12', y1: '17.5', x2: '12.01', y2: '17.5' })
    );
  }
  if (id === 'website') {
    return React.createElement('svg', common,
      React.createElement('rect', { x: '3', y: '4', width: '18', height: '14', rx: '2' }),
      React.createElement('line', { x1: '3', y1: '8.5', x2: '21', y2: '8.5' }),
      React.createElement('circle', { cx: '7', cy: '6.25', r: '0.75', fill: 'currentColor', stroke: 'none' })
    );
  }
  if (id === 'design') {
    return React.createElement('svg', common,
      React.createElement('path', { d: 'M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.2l5-.7z' })
    );
  }
  return React.createElement('svg', common,
    React.createElement('rect', { x: '2.5', y: '5', width: '19', height: '14', rx: '2' }),
    React.createElement('path', { d: 'M8 10l-2.5 2.5L8 15' }),
    React.createElement('path', { d: 'M16 10l2.5 2.5L16 15' }),
    React.createElement('line', { x1: '13', y1: '9', x2: '11', y2: '16' })
  );
}

function HeroInfographic() {
  return React.createElement('div', { className: 'hero-infographic', 'aria-hidden': true },
    React.createElement('div', { className: 'hero-infographic__aurora' }),
    React.createElement('div', { className: 'hero-infographic__ring hero-infographic__ring--outer' }),
    React.createElement('div', { className: 'hero-infographic__ring hero-infographic__ring--inner' }),

    React.createElement('svg', { className: 'hero-infographic__spokes', viewBox: '0 0 480 480' },
      React.createElement('defs', null,
        React.createElement('linearGradient', { id: 'spokeCyan', x1: '0', y1: '0', x2: '1', y2: '1' },
          React.createElement('stop', { offset: '0%', stopColor: 'rgba(0,203,240,0.55)' }),
          React.createElement('stop', { offset: '100%', stopColor: 'rgba(0,203,240,0)' })
        ),
        React.createElement('linearGradient', { id: 'spokePink', x1: '0', y1: '0', x2: '1', y2: '1' },
          React.createElement('stop', { offset: '0%', stopColor: 'rgba(238,44,101,0.5)' }),
          React.createElement('stop', { offset: '100%', stopColor: 'rgba(238,44,101,0)' })
        )
      ),
      React.createElement('line', { x1: '240', y1: '240', x2: '88', y2: '88', stroke: 'url(#spokeCyan)', strokeWidth: '1.5', strokeDasharray: '6 8', className: 'hero-infographic__spoke hero-infographic__spoke--1' }),
      React.createElement('line', { x1: '240', y1: '240', x2: '392', y2: '88', stroke: 'url(#spokeCyan)', strokeWidth: '1.5', strokeDasharray: '6 8', className: 'hero-infographic__spoke hero-infographic__spoke--2' }),
      React.createElement('line', { x1: '240', y1: '240', x2: '88', y2: '392', stroke: 'url(#spokePink)', strokeWidth: '1.5', strokeDasharray: '6 8', className: 'hero-infographic__spoke hero-infographic__spoke--3' }),
      React.createElement('line', { x1: '240', y1: '240', x2: '392', y2: '392', stroke: 'url(#spokePink)', strokeWidth: '1.5', strokeDasharray: '6 8', className: 'hero-infographic__spoke hero-infographic__spoke--4' })
    ),

    SERVICES.map(function(s) {
      return React.createElement('div', {
        key: s.id,
        className: 'hero-infographic__service hero-infographic__service--' + s.pos + ' hero-infographic__service--' + s.accent
      },
        React.createElement('span', { className: 'hero-infographic__service-icon' },
          React.createElement(ServiceIcon, { id: s.id })
        ),
        React.createElement('span', { className: 'hero-infographic__service-label' }, s.label),
        React.createElement('span', { className: 'hero-infographic__service-sub' }, s.sub)
      );
    }),

    React.createElement('div', { className: 'hero-infographic__devices' },
      React.createElement('div', { className: 'hero-infographic__browser' },
        React.createElement('div', { className: 'hero-infographic__browser-chrome' },
          React.createElement('span', { className: 'hero-infographic__browser-dot hero-infographic__browser-dot--r' }),
          React.createElement('span', { className: 'hero-infographic__browser-dot hero-infographic__browser-dot--y' }),
          React.createElement('span', { className: 'hero-infographic__browser-dot hero-infographic__browser-dot--g' }),
          React.createElement('span', { className: 'hero-infographic__browser-url' },
            React.createElement(BrowserFavicon, null),
            'profitsols.com'
          )
        ),
        React.createElement('div', { className: 'hero-infographic__browser-body' },
          React.createElement('nav', { className: 'hero-infographic__browser-nav' },
            React.createElement('span', { className: 'hero-infographic__browser-brand' }, 'PROFITSOLS'),
            React.createElement('span', { className: 'hero-infographic__browser-link' }, 'Services'),
            React.createElement('span', { className: 'hero-infographic__browser-link' }, 'Work'),
            React.createElement('span', { className: 'hero-infographic__browser-cta' }, 'Start Project')
          ),
          React.createElement('div', { className: 'hero-infographic__browser-hero' },
            React.createElement('span', { className: 'hero-infographic__browser-tag' }, 'Software Studio · Islamabad'),
            React.createElement('span', { className: 'hero-infographic__browser-headline' }, 'We Build Digital'),
            React.createElement('span', { className: 'hero-infographic__browser-headline hero-infographic__browser-headline--accent' }, 'Products That Scale'),
            React.createElement('span', { className: 'hero-infographic__browser-sub' }, 'Apps, websites & platforms for ambitious brands'),
            React.createElement('div', { className: 'hero-infographic__browser-actions' },
              React.createElement('span', { className: 'hero-infographic__browser-btn hero-infographic__browser-btn--primary' }, 'Get a Quote'),
              React.createElement('span', { className: 'hero-infographic__browser-btn hero-infographic__browser-btn--ghost' }, 'View Work')
            )
          ),
          React.createElement('div', { className: 'hero-infographic__browser-stats' },
            React.createElement('div', { className: 'hero-infographic__browser-stat' },
              React.createElement('span', { className: 'hero-infographic__browser-stat-num' }, '50+'),
              React.createElement('span', { className: 'hero-infographic__browser-stat-lbl' }, 'Projects')
            ),
            React.createElement('div', { className: 'hero-infographic__browser-stat' },
              React.createElement('span', { className: 'hero-infographic__browser-stat-num hero-infographic__browser-stat-num--gold' }, '98%'),
              React.createElement('span', { className: 'hero-infographic__browser-stat-lbl' }, 'Satisfaction')
            ),
            React.createElement('div', { className: 'hero-infographic__browser-stat' },
              React.createElement('span', { className: 'hero-infographic__browser-stat-num' }, '4'),
              React.createElement('span', { className: 'hero-infographic__browser-stat-lbl' }, 'Services')
            )
          ),
          React.createElement('div', { className: 'hero-infographic__browser-grid' },
            BROWSER_TILES.map(function(tile) {
              return React.createElement('span', {
                key: tile.label,
                className: 'hero-infographic__browser-tile hero-infographic__browser-tile--' + tile.accent
              },
                React.createElement('span', { className: 'hero-infographic__browser-tile-bar' }),
                tile.label
              );
            })
          )
        )
      )
    ),

    React.createElement('div', { className: 'hero-infographic__dashboard hero-infographic__dashboard--swap' },
      React.createElement('div', { className: 'hero-infographic__dash-head' }, 'Web App'),
      React.createElement('div', { className: 'hero-infographic__dash-metrics' },
        React.createElement('div', { className: 'hero-infographic__dash-metric' },
          React.createElement('span', { className: 'hero-infographic__dash-num' }, '98'),
          React.createElement('span', { className: 'hero-infographic__dash-lbl' }, 'Score')
        ),
        React.createElement('div', { className: 'hero-infographic__dash-metric' },
          React.createElement('span', { className: 'hero-infographic__dash-num hero-infographic__dash-num--gold' }, '2.1s'),
          React.createElement('span', { className: 'hero-infographic__dash-lbl' }, 'Load')
        )
      ),
      React.createElement('div', { className: 'hero-infographic__dash-chart' },
        React.createElement('svg', { viewBox: '0 0 120 40', preserveAspectRatio: 'none' },
          React.createElement('path', {
            d: 'M0 32 L20 28 L40 22 L60 26 L80 14 L100 18 L120 8',
            fill: 'none',
            stroke: 'url(#dashLineGrad)',
            strokeWidth: '2.5',
            strokeLinecap: 'round'
          }),
          React.createElement('defs', null,
            React.createElement('linearGradient', { id: 'dashLineGrad', x1: '0', y1: '0', x2: '1', y2: '0' },
              React.createElement('stop', { offset: '0%', stopColor: '#00cbf0' }),
              React.createElement('stop', { offset: '100%', stopColor: '#d4ad39' })
            )
          )
        )
      )
    ),

    React.createElement('div', { className: 'hero-infographic__phone hero-infographic__phone--swap' },
      React.createElement('div', { className: 'hero-infographic__phone-notch' }),
      React.createElement('div', { className: 'hero-infographic__phone-screen' },
        React.createElement('div', { className: 'hero-infographic__phone-header' },
          React.createElement('span', null, 'Your App'),
          React.createElement('span', { className: 'hero-infographic__phone-badge' }, 'LIVE')
        ),
        React.createElement('div', { className: 'hero-infographic__phone-metric' },
          React.createElement('span', { className: 'hero-infographic__phone-metric-label' }, 'Active users'),
          React.createElement('span', { className: 'hero-infographic__phone-metric-val' }, '12.4k')
        ),
        React.createElement('div', { className: 'hero-infographic__phone-bars' },
          [35, 52, 44, 68, 58, 82, 74].map(function(h, i) {
            return React.createElement('span', { key: i, className: 'hero-infographic__phone-bar', style: { height: h + '%' } });
          })
        )
      )
    ),

    React.createElement('div', { className: 'hero-infographic__tech' },
      TECH.map(function(t) {
        return React.createElement('span', { key: t.name, className: 'hero-infographic__tech-chip', title: t.name },
          React.createElement('img', { src: t.src, alt: '', width: 18, height: 18, loading: 'lazy', decoding: 'async' })
        );
      })
    )
  );
}

module.exports = HeroInfographic;
