'use strict';

var React = require('react');
var ServicePage = require('./ServicePage');

var CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function ServiceIconImg(name) {
  var src = CDN + '/' + name + '/' + name + '-original.svg';
  return React.createElement('img', { src: src, alt: '', className: 'service-option-icon-img', width: 48, height: 48 });
}

function WebsitePage() {
  var services = [
    { title: 'Custom Website Development', icon: ServiceIconImg('chrome'), desc: ['We build bespoke websites tailored to your unique business needs. From corporate sites to creative portfolios, our custom development approach ensures your website stands out and performs exceptionally.', 'Every website we create is responsive, fast-loading, and optimized for search engines.'] },
    { title: 'Ecommerce Website Development', icon: ServiceIconImg('woocommerce'), desc: ['Launch or upgrade your online store with our ecommerce development services. We create secure, user-friendly shopping experiences that convert visitors into customers.', 'From product catalogs to payment integration and inventory management, we build complete ecommerce solutions.'] },
    { title: 'Landing Page & Web App Development', icon: ServiceIconImg('html5'), desc: ['High-converting landing pages and lightweight web applications that drive results. We focus on clear messaging, strong CTAs, and fast load times.', 'Our landing pages are designed for specific campaigns and goals.'] }
  ];
  var processSteps = [
    { title: 'Requirement gathering', desc: 'We analyze your needs and define the scope of your website project.' },
    { title: 'Design phase', desc: 'Our designers create wireframes and mockups for your approval.' },
    { title: 'Development & testing', desc: 'We build your site with clean code and thorough testing.' },
    { title: 'Deployment', desc: 'Your website goes live with proper configuration and optimization.' },
    { title: 'Maintenance & support', desc: 'We provide ongoing updates and technical support.' },
    { title: 'Project delivery', desc: 'Final handover with documentation and training if needed.' }
  ];
  var techIcons = ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'React'];
  var footerServices = [
    { label: 'Website Development', to: '/website-development' },
    { label: 'Mobile App Development', to: '/mobile-app-development' },
    { label: 'UI/UX Design', to: '/ui-ux-development' },
    { label: 'Custom Software', to: '/web-app-development' }
  ];
  var footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'Company', to: '/company' },
    { label: 'Contact', to: '/contact' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Careers', to: '#' }
  ];

  return React.createElement(ServicePage, {
    accent: 'blue',
    heroEyebrow: 'Websites',
    heroTitle: 'Website Development Company in Islamabad, Pakistan',
    heroDesc: 'ProfitSols creates stunning, responsive websites that help your business succeed online. We combine cutting-edge design with robust development to deliver websites that are fast, secure, and built for conversions.',
    servicesTitle: 'Website Development Services',
    services: services,
    processTitle: 'Development Process',
    processSteps: processSteps,
    techTitle: 'Technology Stack',
    techIcons: techIcons,
    portfolioTitle: 'Our Portfolio',
    portfolioDesc: 'Our portfolio showcases a diverse range of websites we have developed for clients across industries. Each project reflects our commitment to quality and innovation.',
    contactTitle: 'Want to discuss your project?',
    footerServices: footerServices,
    footerLinks: footerLinks
  });
}

module.exports = WebsitePage;
