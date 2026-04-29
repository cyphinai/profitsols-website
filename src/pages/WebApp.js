'use strict';

var React = require('react');
var ServicePage = require('./ServicePage');

var CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function ServiceIconImg(name) {
  var src = CDN + '/' + name + '/' + name + '-original.svg';
  return React.createElement('img', { src: src, alt: '', className: 'service-option-icon-img', width: 48, height: 48 });
}

function WebAppPage() {
  var services = [
    {
      title: 'Web Portal',
      icon: ServiceIconImg('react'),
      desc: [
        'We develop comprehensive web portals that streamline operations and connect stakeholders. From customer portals to admin dashboards, our solutions provide secure, scalable access to data and services.',
        'Our web portals are built with enterprise-grade security and can integrate with existing systems. We focus on usability and performance to ensure your portal becomes an essential tool for your organization.'
      ]
    },
    {
      title: 'Progressive Web Applications (PWA)',
      icon: ServiceIconImg('javascript'),
      desc: [
        'PWAs combine the best of web and mobile apps. They load quickly, work offline, and can be installed on devices without app stores. We build PWAs that deliver app-like experiences across all platforms.',
        'Our PWA solutions reduce development costs while reaching users on any device. Features like push notifications, offline support, and fast loading improve engagement and user satisfaction.'
      ]
    },
    {
      title: 'Custom Web Apps',
      icon: ServiceIconImg('nodejs'),
      desc: [
        'Tailored web applications built to solve your unique business challenges. We develop custom solutions for inventory management, CRM, project management, and more.',
        'Our custom web apps are scalable, secure, and designed for long-term growth. We use modern frameworks and cloud infrastructure to deliver robust applications that integrate seamlessly with your workflow.'
      ]
    }
  ];

  var processSteps = [
    { title: 'Requirement Gathering', desc: 'We define your project scope, features, and technical specifications.' },
    { title: 'UI/UX Design', desc: 'We design interfaces that are intuitive and aligned with your brand.' },
    { title: 'Development', desc: 'Our developers build your app using best practices and modern tech.' },
    { title: 'Testing', desc: 'Thorough testing ensures reliability and performance.' },
    { title: 'Deployment', desc: 'We deploy to your chosen infrastructure with proper configuration.' }
  ];

  var techIcons = ['MySQL', 'AWS', 'Firebase', 'React', 'Python'];

  var footerServices = [
    { label: 'Software Development', to: '#' },
    { label: 'Mobile App Development', to: '/mobile-app-development' },
    { label: 'Website Development', to: '/website-development' },
    { label: 'Web App Development', to: '/web-app-development' }
  ];

  var footerLinks = [
    { label: 'Company', to: '/company' },
    { label: 'Contact', to: '/contact' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Privacy Policy', to: '#' }
  ];

  return React.createElement(ServicePage, {
    accent: 'gold',
    heroEyebrow: 'Web applications',
    heroTitle: 'Web App Development Company in Islamabad, Pakistan',
    heroDesc: 'ProfitSols builds powerful, scalable web applications that drive business efficiency. From progressive web apps to custom enterprise solutions, we deliver web applications that perform flawlessly and scale with your growth. Our team combines technical expertise with a deep understanding of business needs.',
    servicesTitle: 'Web App Development Services',
    services: services,
    processTitle: 'Development Process',
    processSteps: processSteps,
    techTitle: 'Technology Stack',
    techIcons: techIcons,
    portfolioTitle: 'Our Portfolio',
    portfolioDesc: 'Our portfolio includes web applications for diverse industries—from SaaS platforms to internal tools and customer-facing portals. Each project demonstrates our ability to deliver complex solutions with clean, maintainable code.',
    contactTitle: 'Want to discuss your project?',
    footerServices: footerServices,
    footerLinks: footerLinks
  });
}

module.exports = WebAppPage;
