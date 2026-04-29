'use strict';

var React = require('react');
var ServicePage = require('./ServicePage');

var CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function ServiceIconImg(name) {
  var src = CDN + '/' + name + '/' + name + '-original.svg';
  return React.createElement('img', { src: src, alt: '', className: 'service-option-icon-img', width: 48, height: 48 });
}

function UIUXPage() {
  var services = [
    {
      title: 'Software UI/UX Design',
      icon: ServiceIconImg('figma'),
      desc: [
        'We create intuitive, visually compelling interfaces for software applications. Our designs prioritize user efficiency and satisfaction while maintaining brand consistency.',
        'From desktop applications to SaaS platforms, we ensure every interaction is thoughtful and purposeful. Our process includes user research, wireframing, prototyping, and usability testing.'
      ]
    },
    {
      title: 'Website UI/UX Design',
      icon: ServiceIconImg('xd'),
      desc: [
        'Effective website design goes beyond aesthetics. We design websites that guide users, reduce friction, and drive conversions. Our approach combines modern design trends with proven UX principles.',
        'We create responsive, accessible designs that work seamlessly across devices. Every element is crafted to enhance the user journey and support your business objectives.'
      ]
    },
    {
      title: 'Mobile App UI/UX Design',
      icon: ServiceIconImg('sketch'),
      desc: [
        'Mobile interfaces require special attention to touch targets, gestures, and platform conventions. We design mobile app UIs that feel natural and delightful to use.',
        'Whether for iOS, Android, or cross-platform apps, we ensure designs are optimized for each platform while maintaining a consistent brand experience. Our mobile designs prioritize clarity and ease of use.'
      ]
    }
  ];

  var processSteps = [
    { title: 'Discovery', desc: 'We research your users, competitors, and business context.' },
    { title: 'Strategy', desc: 'We define information architecture and user flows.' },
    { title: 'Wireframing', desc: 'Low-fidelity layouts establish structure and content hierarchy.' },
    { title: 'Visual design', desc: 'High-fidelity designs bring the interface to life.' },
    { title: 'Prototyping', desc: 'Interactive prototypes validate the experience.' },
    { title: 'Testing & iteration', desc: 'User feedback guides refinements.' }
  ];

  var techIcons = ['Figma', 'Sketch', 'Adobe XD', 'Photoshop'];

  var footerServices = [
    { label: 'UI/UX Design', to: '/ui-ux-development' },
    { label: 'Website Development', to: '/website-development' },
    { label: 'Mobile App Development', to: '/mobile-app-development' },
    { label: 'Game Development', to: '#' },
    { label: 'Cloud Solutions', to: '#' }
  ];

  var footerLinks = [
    { label: 'Company', to: '/company' },
    { label: 'Contact', to: '/contact' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms & Conditions', to: '#' }
  ];

  return React.createElement(ServicePage, {
    accent: 'pink',
    heroEyebrow: 'Design',
    heroTitle: 'UI/UX Design Company in Islamabad, Pakistan',
    heroDesc: 'ProfitSols specializes in creating user-centered design solutions that elevate digital products. Our UI/UX team combines creativity with data-driven insights to design interfaces that are beautiful, functional, and intuitive. We help businesses create memorable user experiences that drive engagement and growth.',
    servicesTitle: 'UI/UX Design Services',
    services: services,
    processTitle: 'Development Process',
    processSteps: processSteps,
    techTitle: 'Technology Stack',
    techIcons: techIcons,
    portfolioTitle: 'Our Portfolio',
    portfolioDesc: 'Our design portfolio showcases projects across industries, from SaaS applications to mobile apps and enterprise software. Each project demonstrates our commitment to user-centered design and visual excellence.',
    contactTitle: 'Want to discuss your project?',
    footerServices: footerServices,
    footerLinks: footerLinks
  });
}

module.exports = UIUXPage;
