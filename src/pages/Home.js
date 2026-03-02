'use strict';

var React = require('react');
var useState = React.useState;
var useEffect = React.useEffect;
var Link = require('react-router-dom').Link;
var useLocation = require('react-router-dom').useLocation;
var SharedHeader = require('../components/SharedHeader');
var portfolioData = require('../data/portfolio.json');
require('./Home.css');

function Home() {
  var location = useLocation();
  useEffect(function() {
    var hash = location.hash || window.location.hash;
    if (hash) {
      var id = hash.replace('#', '');
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname, location.hash]);

  return React.createElement('div', { className: 'home-page' },
    React.createElement(SharedHeader, null),
    React.createElement(HeroSection, null),
    React.createElement(PlatformsSection, null),
    React.createElement(AboutSection, null),
    React.createElement(ServicesSection, null),
    React.createElement(CaseStudiesSection, null),
    React.createElement(ClientsSection, null),
    React.createElement(WhyChooseSection, null),
    React.createElement(NewsSection, null),
    React.createElement(Footer, null)
  );
}

function IconMobile() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon-svg' },
    React.createElement('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
    React.createElement('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' })
  );
}

function IconGlobe() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon-svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    React.createElement('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
    React.createElement('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
  );
}

function IconCode() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon-svg' },
    React.createElement('polyline', { points: '16 18 22 12 16 6' }),
    React.createElement('polyline', { points: '8 6 2 12 8 18' })
  );
}

function IconDesign() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon-svg' },
    React.createElement('circle', { cx: '13.5', cy: '6.5', r: '.5' }),
    React.createElement('circle', { cx: '17.5', cy: '10.5', r: '.5' }),
    React.createElement('circle', { cx: '8.5', cy: '7.5', r: '.5' }),
    React.createElement('circle', { cx: '6.5', cy: '12.5', r: '.5' }),
    React.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z' })
  );
}

function IconCheck() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg' },
    React.createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
    React.createElement('polyline', { points: '22 4 12 14.01 9 11.01' })
  );
}

function IconStar() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg' },
    React.createElement('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })
  );
}

function IconHeadphones() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg' },
    React.createElement('path', { d: 'M3 18v-6a9 9 0 0 1 18 0v6' }),
    React.createElement('path', { d: 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' })
  );
}

function IconMessageCircle() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg' },
    React.createElement('path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' })
  );
}

function IconMail() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg icon-sm' },
    React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    React.createElement('polyline', { points: '22,6 12,13 2,6' })
  );
}

function IconPhone() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg icon-sm' },
    React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
  );
}

function IconFileText() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg icon-sm' },
    React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
    React.createElement('polyline', { points: '14 2 14 8 20 8' }),
    React.createElement('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
    React.createElement('line', { x1: '16', y1: '17', x2: '8', y2: '17' }),
    React.createElement('polyline', { points: '10 9 9 9 8 9' })
  );
}

function IconArrowRight() {
  return React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', className: 'icon-svg icon-sm' },
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}

function LogoIcon() {
  return React.createElement('svg', {
    className: 'logo-icon',
    viewBox: '0 0 40 40',
    width: '40',
    height: '40'
  },
    React.createElement('path', { d: 'M8 4L4 8L4 32L8 36L32 36L36 32L36 8L32 4Z', fill: '#D4AD39' }),
    React.createElement('path', { d: 'M12 8L8 12L8 28L12 32L28 32L32 28L32 12L28 8Z', fill: '#EE2C65' }),
    React.createElement('path', { d: 'M20 12L12 20L20 28L28 20Z', fill: '#00407F' }),
    React.createElement('path', { d: 'M20 16L16 20L20 24L24 20Z', fill: '#00CBF0' })
  );
}

function HeroSection() {
  return React.createElement('section', { className: 'hero' },
    React.createElement('div', { className: 'hero-bg-pattern' }),
    React.createElement('div', { className: 'hero-glow hero-glow-1' }),
    React.createElement('div', { className: 'hero-glow hero-glow-2' }),
    React.createElement('div', { className: 'hero-content' },
      React.createElement('div', { className: 'hero-badge' }, 'Trusted by 100+ clients worldwide'),
      React.createElement('h1', { className: 'hero-title' },
        'Bringing your vision to life',
        React.createElement('br', null),
        'with world-class',
        React.createElement('br', null),
        React.createElement('span', { className: 'hero-title-accent' }, 'software development')
      ),
      React.createElement('p', { className: 'hero-subtitle' }, 'We provide quality service with proven results across mobile, web, and UI/UX solutions.'),
      React.createElement('div', { className: 'hero-actions' },
        React.createElement('a', { href: '#contact', className: 'btn-lets-talk' },
          "Let's Talk",
          React.createElement(IconArrowRight, null)
        ),
        React.createElement('a', { href: '#portfolio', className: 'btn-hero-secondary' }, 'View our work')
      )
    ),
    React.createElement('div', { className: 'hero-visual' })
  );
}

function SectionLabel(props) {
  return React.createElement('p', { className: 'section-label' }, props.children);
}

function PlatformsSection() {
  var platforms = [
    { name: 'Clutch', icon: IconStar },
    { name: 'Upwork', icon: IconCheck },
    { name: 'GoodFirms', icon: IconStar },
    { name: 'DesignRush', icon: IconDesign }
  ];
  return React.createElement('section', { className: 'platforms' },
    React.createElement(SectionLabel, null, 'Trusted platforms'),
    React.createElement('h2', { className: 'platforms-title' }, 'ProfitSols is listed across top platforms'),
    React.createElement('div', { className: 'platforms-logos' },
      platforms.map(function(p, i) {
        var IconComponent = p.icon;
        return React.createElement('div', { key: i, className: 'platform-box' },
          React.createElement(IconComponent, null),
          React.createElement('span', null, p.name)
        );
      })
    )
  );
}

function AboutSection() {
  return React.createElement('section', { className: 'about', id: 'company' },
    React.createElement(SectionLabel, null, 'About us'),
    React.createElement('h2', { className: 'section-title' }, 'Software Development Company In Islamabad, Pakistan'),
    React.createElement('div', { className: 'about-text' },
      React.createElement('p', null,
        'ProfitSols is a leading Software development company in Islamabad, Pakistan. Our core motive is to provide one stop solution to fulfil the software development needs of our valuable clients across the globe.'
      ),
      React.createElement('p', null,
        'ProfitSols has successfully built trust in the software development industry and is recognized across various top listed platforms. We have proven track record of providing innovative and quality standard solutions to cater market competitive needs of businesses across different industries.'
      ),
      React.createElement('p', null,
        'Our highly professional and skilled team is committed to provide high in demand services in Mobile app development, web app development, website development, and UI/UX design. We are always in a state of improving our quality of service and customer experience by staying up-to-date with latest technologies and trends in software development to cater unique business needs of our clients. With our planned strategies of development process, providing ongoing support and maintenance, we have built long term relationships with our clients towards the success of their product.'
      )
    )
  );
}

var SERVICE_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function ServicesSection() {
  var services = [
    { title: 'Mobile App Development', desc: "In today's digital age Mobile App Development for your business is essential in providing increased reach, enhanced customer experience, a competitive advantage to have boost in sales, facilitation in data collection, brand building, and improved operational efficiency. From conceptualization to deployment, we ensure that our mobile apps are scalable, robust, and provide a seamless user experience.", iconName: 'android', to: '/mobile-app-development' },
    { title: 'Website Development', desc: 'ProfitSols is aware of the importance of having a website for any company looking to establish a digital presence. We design websites that are both aesthetically pleasing and easy to use on both desktop and mobile platforms. Each website we produce is responsive, safe, and search engine optimised thanks to the efforts of our website development building team.', iconName: 'chrome', to: '/website-development' },
    { title: 'Web App Development', desc: 'Our web app development services cater to businesses of all sizes. We provide cutting-edge technologies to develop scalable and robust web apps that help businesses streamline their operations and increase productivity. Our team of developers is skilled in developing web apps using various programming languages and frameworks.', iconName: 'react', to: '/web-app-development' },
    { title: 'UI/UX Design', desc: "Any software application's success depends heavily on its user interface and user experience. Our UI/UX development services strive to provide intuitive, visually appealing interfaces that offer a smooth user experience. We take pride in developing user-friendly, intuitive designs that improve the usability of software applications.", iconName: 'figma', to: '/ui-ux-development' }
  ];

  return React.createElement('section', { className: 'services', id: 'services' },
    React.createElement('div', { className: 'services-header' },
      React.createElement(SectionLabel, null, 'What we do'),
      React.createElement('h2', { className: 'section-title' }, 'Services we offer to our clients'),
      React.createElement('p', { className: 'services-subtitle' }, 'Comprehensive software solutions tailored to drive your business forward')
    ),
    React.createElement('div', { className: 'services-grid' },
      services.map(function(service, i) {
        var iconSrc = SERVICE_CDN + '/' + service.iconName + '/' + service.iconName + '-original.svg';
        var accents = ['cyan', 'gold', 'pink', 'primary'];
        var accent = accents[i % accents.length];
        return React.createElement(Link, { key: i, to: service.to, className: 'service-card service-card-accent-' + accent },
          React.createElement('div', { className: 'service-card-accent-bar' }),
          React.createElement('div', { className: 'service-icon' },
            React.createElement('img', { src: iconSrc, alt: '', className: 'service-icon-img', width: 56, height: 56 })
          ),
          React.createElement('h3', { className: 'service-title' }, service.title),
          React.createElement('p', { className: 'service-desc' }, service.desc),
          React.createElement('span', { className: 'service-link' },
            'Read More',
            React.createElement(IconArrowRight, null)
          )
        );
      })
    )
  );
}

function CaseStudiesSection() {
  var items = portfolioData || [];
  var activeIndex = 0;
  var _useState = useState(0);
  activeIndex = _useState[0];
  var setActiveIndex = _useState[1];

  var goPrev = function() {
    setActiveIndex(function(i) { return i <= 0 ? items.length - 1 : i - 1; });
  };
  var goNext = function() {
    setActiveIndex(function(i) { return i >= items.length - 1 ? 0 : i + 1; });
  };

  if (items.length === 0) {
    return React.createElement('section', { className: 'case-studies', id: 'portfolio' },
      React.createElement(SectionLabel, null, 'Portfolio'),
      React.createElement('h2', { className: 'section-title' }, 'See our case studies'),
      React.createElement('p', { style: { textAlign: 'center', padding: '40px 24px' } }, 'No portfolio items yet. Add data to src/data/portfolio.json.'),
      React.createElement('div', { className: 'case-studies-cta' },
        React.createElement('a', { href: '#portfolio', className: 'btn-portfolio' },
          'View Our Portfolio',
          React.createElement(IconArrowRight, null)
        )
      )
    );
  }

  var item = items[activeIndex];
  var logoUrl = item.logoUrl || '';
  var screens = item.screens || [];
  var screen1 = screens[0] || '';
  var screen2 = screens[1] || logoUrl;
  var screen3 = screens[2] || '';

  return React.createElement('section', { className: 'case-studies', id: 'portfolio' },
    React.createElement(SectionLabel, null, 'Portfolio'),
    React.createElement('h2', { className: 'section-title' }, 'See our case studies'),
    React.createElement('div', { className: 'case-study-wrapper' },
      React.createElement('button', { className: 'case-study-nav case-study-prev', 'aria-label': 'Previous', onClick: goPrev },
        React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: 24, height: 24 },
          React.createElement('polyline', { points: '15 18 9 12 15 6' })
        )
      ),
      React.createElement('div', { className: 'case-study-card' },
        React.createElement('div', { className: 'case-study-content' },
          React.createElement('div', { className: 'case-study-header' },
            logoUrl ? React.createElement('div', { className: 'case-study-logo-wrap' },
              React.createElement('img', { src: logoUrl, alt: item.title, className: 'case-study-logo-img' })
            ) : null,
            React.createElement('div', { className: 'case-study-tags' },
              (item.tags || []).map(function(tag, i) {
                return React.createElement('span', { key: i, className: 'case-study-tag' }, tag);
              })
            )
          ),
          React.createElement('h3', { className: 'case-study-title' }, item.title),
          React.createElement('p', { className: 'case-study-desc' }, item.description),
          React.createElement('a', { href: item.linkUrl || '#', target: '_blank', rel: 'noopener noreferrer', className: 'case-study-link' },
            'View project',
            React.createElement(IconArrowRight, null)
          )
        ),
        React.createElement('div', { className: 'case-study-phones' },
          React.createElement('div', { className: 'case-study-phones-bg' }),
          React.createElement('div', { className: 'phone-mockup phone-back phone-left' },
            React.createElement('div', { className: 'phone-screen' },
              screen1 ? React.createElement('img', { src: screen1, alt: item.title + ' screen 1', className: 'phone-screen-img' }) : null
            )
          ),
          React.createElement('div', { className: 'phone-mockup phone-center' },
            React.createElement('div', { className: 'phone-screen phone-splash' },
              screen2 ? React.createElement('img', { src: screen2, alt: item.title + ' screen 2', className: 'phone-screen-img phone-splash-img' }) : null
            )
          ),
          React.createElement('div', { className: 'phone-mockup phone-back phone-right' },
            React.createElement('div', { className: 'phone-screen' },
              screen3 ? React.createElement('img', { src: screen3, alt: item.title + ' screen 3', className: 'phone-screen-img' }) : null
            )
          )
        )
      ),
      React.createElement('button', { className: 'case-study-nav case-study-next', 'aria-label': 'Next', onClick: goNext },
        React.createElement('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', width: 24, height: 24 },
          React.createElement('polyline', { points: '9 18 15 12 9 6' })
        )
      )
    ),
    items.length > 1 ? React.createElement('div', { className: 'case-study-dots' },
      items.map(function(_, i) {
        return React.createElement('button', { key: i, className: 'case-study-dot' + (i === activeIndex ? ' active' : ''), 'aria-label': 'Go to slide ' + (i + 1), onClick: function() { setActiveIndex(i); } });
      })
    ) : null,
    React.createElement('div', { className: 'case-studies-cta' },
      React.createElement('a', { href: '#portfolio', className: 'btn-portfolio' },
        'View Our Portfolio',
        React.createElement(IconArrowRight, null)
      )
    )
  );
}

function ClientsSection() {
  return React.createElement('section', { className: 'clients' },
    React.createElement(SectionLabel, null, 'Partners'),
    React.createElement('h2', { className: 'section-title' }, 'Our Clients'),
    React.createElement('div', { className: 'clients-grid' },
      Array(5).fill(null).map(function(_, i) {
        return React.createElement('div', { key: i, className: 'client-logo' }, 'Client ' + (i + 1));
      })
    )
  );
}

function WhyChooseSection() {
  var items = [
    { title: 'Client Satisfaction', desc: 'Our timely response, quality work and standard earns us the 100% client satisfaction', icon: IconCheck },
    { title: 'High Quality Service', desc: 'Our professional and skilled team members delivers high quality services to clients', icon: IconStar },
    { title: 'Dedicated Support', desc: 'Our sales teams actively responds 24/7 to queries of clients', icon: IconHeadphones },
    { title: 'Free Consultation', desc: 'We charge no fee for giving technical guidance and information to let client understand better', icon: IconMessageCircle }
  ];

  return React.createElement('section', { className: 'why-choose' },
    React.createElement(SectionLabel, null, 'Why ProfitSols'),
    React.createElement('h2', { className: 'section-title' }, 'Why choose us?'),
    React.createElement('div', { className: 'why-choose-grid' },
      items.map(function(item, i) {
        var IconComponent = item.icon;
        return React.createElement('div', { key: i, className: 'why-card' },
          React.createElement('div', { className: 'why-icon' },
            React.createElement(IconComponent, null)
          ),
          React.createElement('h3', { className: 'why-title' }, item.title),
          React.createElement('p', { className: 'why-desc' }, item.desc)
        );
      })
    )
  );
}

function NewsSection() {
  var news = [
    { title: 'Top 10 Mobile App Development Frameworks', desc: 'AssisMe is a Job Board Application to connect Employer with Employee the need was to create an application where candidates looking for a job can record a "Video Resume"...' },
    { title: 'Top 10 Mobile App Development Frameworks', desc: 'AssisMe is a Job Board Application to connect Employer with Employee the need was to create an application where candidates looking for a job can record...' },
    { title: 'latest version of flutter', desc: 'Flutter 3.7 is live! This release contains many updates and improvements. You can now pass configuration information to the engine...' }
  ];

  return React.createElement('section', { className: 'news', id: 'news' },
    React.createElement(SectionLabel, null, 'Insights'),
    React.createElement('h2', { className: 'section-title' }, 'Latest news'),
    React.createElement('div', { className: 'news-grid' },
      news.map(function(item, i) {
        return React.createElement('div', { key: i, className: 'news-card' },
          React.createElement('div', { className: 'news-image' },
            React.createElement(IconFileText, { className: 'news-image-icon' })
          ),
          React.createElement('h3', { className: 'news-title' }, item.title),
          React.createElement('p', { className: 'news-desc' }, item.desc),
          React.createElement('a', { href: '#', className: 'news-link' },
            'Read more',
            React.createElement(IconArrowRight, null)
          )
        );
      })
    )
  );
}

function Footer() {
  return React.createElement('footer', { className: 'footer', id: 'contact' },
    React.createElement('div', { className: 'footer-cta' },
      React.createElement('p', { className: 'footer-cta-text' }, 'Ready to build something great?'),
      React.createElement(Link, { to: '/#contact', className: 'footer-cta-btn' },
        'Get in Touch',
        React.createElement('span', { className: 'footer-cta-arrow' }, '\u2192')
      )
    ),
    React.createElement('div', { className: 'footer-top' },
      React.createElement('div', { className: 'footer-col footer-col-accent-cyan' },
        React.createElement('h4', null, 'About'),
        React.createElement('p', null, 'We Provide quality service with proven results')
      ),
      React.createElement('div', { className: 'footer-col footer-col-accent-gold' },
        React.createElement('h4', null, 'Services'),
        React.createElement(Link, { to: '/mobile-app-development' }, 'Mobile App Development'),
        React.createElement(Link, { to: '/website-development' }, 'Website Development'),
        React.createElement(Link, { to: '/web-app-development' }, 'Web App Development'),
        React.createElement(Link, { to: '/ui-ux-development' }, 'UI/UX Design')
      ),
      React.createElement('div', { className: 'footer-col footer-col-accent-pink' },
        React.createElement('h4', null, 'Links'),
        React.createElement('a', { href: '#company' }, 'About Us'),
        React.createElement('a', { href: '#contact' }, 'Contact Us'),
        React.createElement('a', { href: '#portfolio' }, 'Our Portfolio'),
        React.createElement('a', { href: '#news' }, 'Latest News'),
        React.createElement('a', { href: '#' }, 'Terms & Conditions')
      ),
      React.createElement('div', { className: 'footer-col footer-col-accent-primary' },
        React.createElement('h4', null, 'Contact'),
        React.createElement('a', { href: 'mailto:contact@profitsols.com', className: 'footer-contact' },
          React.createElement(IconMail, null),
          'contact@profitsols.com'
        ),
        React.createElement('a', { href: 'tel:+923087065507', className: 'footer-contact' },
          React.createElement(IconPhone, null),
          '+923087065507'
        )
      )
    ),
    React.createElement('div', { className: 'footer-bottom' },
      React.createElement('p', null, 'Copyright © 2024 ProfitSols. All rights reserved.')
    )
  );
}

module.exports = Home;
