'use strict';

var React = require('react');
var useState = React.useState;
require('./Home.css');

function Home() {
  return React.createElement('div', { className: 'home-page' },
    React.createElement(Header, null),
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

function Header() {
  var _useState = useState(false);
  var menuOpen = _useState[0];
  var setMenuOpen = _useState[1];

  return React.createElement('header', { className: 'header' },
    React.createElement('div', { className: 'header-inner' },
      React.createElement('a', { href: '/', className: 'logo' },
        React.createElement(LogoIcon, null),
        React.createElement('span', { className: 'logo-text' }, 'ProfitSols')
      ),
      React.createElement('button', {
        className: 'nav-toggle',
        'aria-label': 'Toggle menu',
        onClick: function() { setMenuOpen(!menuOpen); }
      },
        React.createElement('span', { className: 'nav-toggle-bar' }),
        React.createElement('span', { className: 'nav-toggle-bar' }),
        React.createElement('span', { className: 'nav-toggle-bar' })
      ),
      React.createElement('nav', { className: 'nav' + (menuOpen ? ' nav-open' : '') },
        React.createElement('a', { href: '#services', className: 'nav-link', onClick: function() { setMenuOpen(false); } }, 'Services'),
        React.createElement('a', { href: '#portfolio', className: 'nav-link', onClick: function() { setMenuOpen(false); } }, 'Portfolio'),
        React.createElement('a', { href: '#company', className: 'nav-link', onClick: function() { setMenuOpen(false); } }, 'Company'),
        React.createElement('a', { href: '#contact', className: 'nav-link', onClick: function() { setMenuOpen(false); } }, 'Contact')
      ),
      React.createElement('div', { className: 'header-actions' },
        React.createElement('a', { href: '#quote', className: 'btn-quote' }, 'Get a Quote')
      )
    )
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
    React.createElement('div', { className: 'hero-content' },
      React.createElement('h1', { className: 'hero-title' },
        'Bringing your vision to life',
        React.createElement('br', null),
        'with world-class',
        React.createElement('br', null),
        'software development'
      ),
      React.createElement('p', { className: 'hero-subtitle' }, 'We Provide quality service with proven results'),
      React.createElement('a', { href: '#contact', className: 'btn-lets-talk' }, "Let's Talk")
    ),
    React.createElement('div', { className: 'hero-visual' })
  );
}

function PlatformsSection() {
  return React.createElement('section', { className: 'platforms' },
    React.createElement('h2', { className: 'platforms-title' }, 'ProfitSols is listed across top platforms'),
    React.createElement('div', { className: 'platforms-logos' },
      React.createElement('div', { className: 'platform-box' }, 'Clutch'),
      React.createElement('div', { className: 'platform-box' }, 'Upwork'),
      React.createElement('div', { className: 'platform-box' }, 'GoodFirms'),
      React.createElement('div', { className: 'platform-box' }, 'DesignRush')
    )
  );
}

function AboutSection() {
  return React.createElement('section', { className: 'about', id: 'company' },
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

function ServicesSection() {
  var services = [
    {
      title: 'Mobile App Development',
      desc: "In today's digital age Mobile App Development for your business is essential in providing increased reach, enhanced customer experience, a competitive advantage to have boost in sales, facilitation in data collection, brand building, and improved operational efficiency. From conceptualization to deployment, we ensure that our mobile apps are scalable, robust, and provide a seamless user experience."
    },
    {
      title: 'Website Development',
      desc: 'ProfitSols is aware of the importance of having a website for any company looking to establish a digital presence. We design websites that are both aesthetically pleasing and easy to use on both desktop and mobile platforms. Each website we produce is responsive, safe, and search engine optimised thanks to the efforts of our website development building team.'
    },
    {
      title: 'Web App Development',
      desc: 'Our web app development services cater to businesses of all sizes. We provide cutting-edge technologies to develop scalable and robust web apps that help businesses streamline their operations and increase productivity. Our team of developers is skilled in developing web apps using various programming languages and frameworks.'
    },
    {
      title: 'UI/UX Design',
      desc: "Any software application's success depends heavily on its user interface and user experience. Our UI/UX development services strive to provide intuitive, visually appealing interfaces that offer a smooth user experience. We take pride in developing user-friendly, intuitive designs that improve the usability of software applications."
    }
  ];

  return React.createElement('section', { className: 'services', id: 'services' },
    React.createElement('h2', { className: 'section-title' }, 'Services we offer to our clients'),
    React.createElement('div', { className: 'services-grid' },
      services.map(function(service, i) {
        return React.createElement('div', { key: i, className: 'service-card' },
          React.createElement('div', { className: 'service-icon' },
            React.createElement('span', { className: 'icon-placeholder' }, '\u27A4')
          ),
          React.createElement('h3', { className: 'service-title' }, service.title),
          React.createElement('p', { className: 'service-desc' }, service.desc),
          React.createElement('a', { href: '#', className: 'service-link' }, 'Read More')
        );
      })
    )
  );
}

function CaseStudiesSection() {
  return React.createElement('section', { className: 'case-studies', id: 'portfolio' },
    React.createElement('h2', { className: 'section-title' }, 'See our casestudies'),
    React.createElement('div', { className: 'case-study-card' },
      React.createElement('div', { className: 'case-study-image' }),
      React.createElement('div', { className: 'case-study-content' },
        React.createElement('span', { className: 'case-study-tag' }, 'Job Board Application'),
        React.createElement('h3', { className: 'case-study-title' }, 'AssisMe'),
        React.createElement('p', { className: 'case-study-desc' },
          'AssisMe is a Job Board Application to connect Employer with Employee the need was to create an application where candidates looking for a job can record a "Video Resume" To show case their talent and employer who is hiring can also create a "Video job post".'
        ),
        React.createElement('a', { href: '#', className: 'case-study-link' }, 'View project')
      )
    ),
    React.createElement('a', { href: '#portfolio', className: 'btn-portfolio' }, 'View Our Portfolio')
  );
}

function ClientsSection() {
  return React.createElement('section', { className: 'clients' },
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
    { title: 'Client Satisfaction', desc: 'Our timely response, quality work and standard earns us the 100% client satisfaction', icon: '\u2713' },
    { title: 'High Quality Service', desc: 'Our professional and skilled team members delivers high quality services to clients', icon: '\u2605' },
    { title: 'Dedicated Support', desc: 'Our sales teams actively responds 24/7 to queries of clients', icon: '\u260E' },
    { title: 'Free Consultation', desc: 'We charge no fee for giving technical guidance and information to let client understand better', icon: '\u2753' }
  ];

  return React.createElement('section', { className: 'why-choose' },
    React.createElement('h2', { className: 'section-title' }, 'Why choose us?'),
    React.createElement('div', { className: 'why-choose-grid' },
      items.map(function(item, i) {
        return React.createElement('div', { key: i, className: 'why-card' },
          React.createElement('div', { className: 'why-icon' }, item.icon),
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

  return React.createElement('section', { className: 'news' },
    React.createElement('h2', { className: 'section-title' }, 'Latest news'),
    React.createElement('div', { className: 'news-grid' },
      news.map(function(item, i) {
        return React.createElement('div', { key: i, className: 'news-card' },
          React.createElement('div', { className: 'news-image' }),
          React.createElement('h3', { className: 'news-title' }, item.title),
          React.createElement('p', { className: 'news-desc' }, item.desc),
          React.createElement('a', { href: '#', className: 'news-link' }, 'Read more')
        );
      })
    )
  );
}

function Footer() {
  return React.createElement('footer', { className: 'footer', id: 'contact' },
    React.createElement('div', { className: 'footer-top' },
      React.createElement('div', { className: 'footer-col' },
        React.createElement('h4', null, 'About'),
        React.createElement('p', null, 'We Provide quality service with proven results')
      ),
      React.createElement('div', { className: 'footer-col' },
        React.createElement('h4', null, 'Services'),
        React.createElement('a', { href: '#' }, 'Software Development'),
        React.createElement('a', { href: '#' }, 'Mobile App Development'),
        React.createElement('a', { href: '#' }, 'Website Development'),
        React.createElement('a', { href: '#' }, 'Web App Development'),
        React.createElement('a', { href: '#' }, 'UI/UX Design')
      ),
      React.createElement('div', { className: 'footer-col' },
        React.createElement('h4', null, 'Links'),
        React.createElement('a', { href: '#' }, 'About Us'),
        React.createElement('a', { href: '#' }, 'Contact Us'),
        React.createElement('a', { href: '#' }, 'Our Portfolio'),
        React.createElement('a', { href: '#' }, 'Latest News'),
        React.createElement('a', { href: '#' }, 'Terms & Conditions')
      ),
      React.createElement('div', { className: 'footer-col' },
        React.createElement('h4', null, 'Contact'),
        React.createElement('p', null, 'contact@profitsols.com'),
        React.createElement('p', null, '+923087065507')
      )
    ),
    React.createElement('div', { className: 'footer-bottom' },
      React.createElement('p', null, 'Copyright @ 2023, All Rights Reserved.')
    )
  );
}

module.exports = Home;
