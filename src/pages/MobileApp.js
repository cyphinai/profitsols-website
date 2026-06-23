'use strict';

var React = require('react');
var ServicePage = require('./ServicePage');

var CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function ServiceIconImg(name, variant) {
  var suffix = variant || 'original';
  var src = CDN + '/' + name + '/' + name + '-' + suffix + '.svg';
  return React.createElement('img', { src: src, alt: '', className: 'service-option-icon-img', width: 48, height: 48 });
}

function IoSAppIcon() {
  return React.createElement('svg', {
    className: 'service-option-icon-img service-option-icon-svg',
    viewBox: '0 0 24 24',
    width: 48,
    height: 48,
    'aria-hidden': true
  },
    React.createElement('path', {
      fill: '#A2AAAD',
      d: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'
    })
  );
}

function MobileAppPage() {
  var services = [
    {
      title: 'iOS App Development',
      icon: React.createElement(IoSAppIcon, null),
      desc: [
        'Our iOS app development services deliver native, high-performance applications for iPhone and iPad. We leverage Swift and the latest iOS SDKs to build apps that integrate seamlessly with Apple\'s ecosystem.',
        'From concept to App Store deployment, we ensure your app meets Apple\'s rigorous guidelines and delivers an exceptional user experience. Our team stays current with the latest iOS features including SwiftUI and modern design patterns.'
      ]
    },
    {
      title: 'Android App Development',
      icon: ServiceIconImg('android'),
      desc: [
        'We develop robust Android applications using Kotlin and Java, targeting the vast Android user base. Our apps are optimized for performance across different device sizes and Android versions.',
        'Whether you need a consumer app, enterprise solution, or custom mobile tool, we build scalable applications that leverage the full power of the Android platform. We follow Material Design guidelines for a consistent, modern interface.'
      ]
    },
    {
      title: 'Cross Platform / Hybrid App Development',
      icon: ServiceIconImg('flutter'),
      desc: [
        'Reach both iOS and Android users with a single codebase using Flutter, React Native, or other cross-platform frameworks. We deliver native-like performance while significantly reducing development time and cost.',
        'Our cross-platform solutions are ideal for startups and businesses looking to launch quickly on multiple platforms. We ensure your app feels native on each platform while maintaining code efficiency.'
      ]
    }
  ];

  var processSteps = [
    { title: 'Requirement Gathering', desc: 'We begin by understanding your business goals, target audience, and technical requirements.' },
    { title: 'UI/UX Design', desc: 'Our designers create intuitive, user-centric interfaces that enhance engagement and usability.' },
    { title: 'Development', desc: 'Our developers build your app using industry-leading frameworks and best practices.' },
    { title: 'Testing', desc: 'Rigorous testing across devices ensures a bug-free, polished user experience.' },
    { title: 'Deployment', desc: 'We handle App Store and Play Store submission, ensuring a smooth launch.' },
    { title: 'Maintenance & Support', desc: 'Ongoing updates, bug fixes, and support keep your app running smoothly.' }
  ];

  var techIcons = ['Flutter', 'Java', 'Kotlin', 'React Native', 'Swift', 'Node.js'];

  var footerServices = [
    { label: 'Mobile App Development', to: '/mobile-app-development' },
    { label: 'Website Development', to: '/website-development' },
    { label: 'UI/UX Design', to: '/ui-ux-development' },
    { label: 'Web App Development', to: '/web-app-development' }
  ];

  var footerLinks = [
    { label: 'Company', to: '/company' },
    { label: 'Contact', to: '/contact' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Terms & Conditions', to: '#' }
  ];

  return React.createElement(ServicePage, {
    accent: 'blue',
    heroEyebrow: 'Mobile apps',
    heroTitle: 'Mobile App Development Company in Islamabad, Pakistan',
    heroDesc: 'ProfitSols is your trusted partner for innovative mobile app development. We create user-centric, high-performance applications for iOS and Android that drive business growth. Our experienced team delivers quality solutions with a focus on innovation, user experience, and cutting-edge technology.',
    servicesTitle: 'Mobile App Development Services',
    services: services,
    processTitle: 'Application Development Process',
    processSteps: processSteps,
    techTitle: 'Technology Stack',
    techIcons: techIcons,
    portfolioTitle: 'Our Portfolio',
    portfolioDesc: 'We have successfully delivered mobile applications across various industries. Our portfolio showcases projects that demonstrate our commitment to quality, innovation, and client satisfaction. Explore our work to see how we bring ideas to life.',
    contactTitle: 'Want to discuss your project?',
    footerServices: footerServices,
    footerLinks: footerLinks
  });
}

module.exports = MobileAppPage;
