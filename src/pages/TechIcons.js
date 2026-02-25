'use strict';

var React = require('react');

var CDN_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
var ICON_MAP = {
  Flutter: { icon: 'flutter', color: '#02569B' },
  Java: { icon: 'java', color: '#ED8B00' },
  Kotlin: { icon: 'kotlin', color: '#7F52FF' },
  ReactNative: { icon: 'react', color: '#61DAFB' },
  Swift: { icon: 'swift', color: '#FA7343' },
  Node: { icon: 'nodejs', color: '#339933' },
  WordPress: { icon: 'wordpress', color: '#21759B' },
  HTML5: { icon: 'html5', color: '#E34F26' },
  CSS3: { icon: 'css3', color: '#1572B6' },
  JavaScript: { icon: 'javascript', color: '#F7DF1E' },
  React: { icon: 'react', color: '#61DAFB' },
  Figma: { icon: 'figma', color: '#F24E1E' },
  Sketch: { icon: 'sketch', color: '#F7B500' },
  AdobeXD: { icon: 'xd', color: '#FF61F6' },
  Photoshop: { icon: 'photoshop', color: '#31A8FF' },
  MySQL: { icon: 'mysql', color: '#4479A1' },
  AWS: { icon: 'amazonwebservices', color: '#FF9900' },
  Firebase: { icon: 'firebase', color: '#FFCA28' },
  Python: { icon: 'python', color: '#3776AB' }
};

function TechIcon(props) {
  var children = props.children;
  var color = props.color || 'currentColor';
  return React.createElement('svg', { viewBox: '0 0 48 48', width: '48', height: '48', fill: color }, children);
}

function TechIconImg(props) {
  var name = props.name;
  var config = ICON_MAP[name];
  if (!config) return React.createElement('div', { className: 'service-tech-icon-fallback' }, (name || '').charAt(0));
  var src = CDN_BASE + '/' + config.icon + '/' + config.icon + '-original.svg';
  return React.createElement('img', {
    src: src,
    alt: name,
    className: 'service-tech-icon-img',
    width: 48,
    height: 48,
    loading: 'lazy'
  });
}

var TechIcons = {
  Flutter: function() { return React.createElement(TechIconImg, { name: 'Flutter' }); },
  Java: function() { return React.createElement(TechIconImg, { name: 'Java' }); },
  Kotlin: function() { return React.createElement(TechIconImg, { name: 'Kotlin' }); },
  ReactNative: function() { return React.createElement(TechIconImg, { name: 'ReactNative' }); },
  Swift: function() { return React.createElement(TechIconImg, { name: 'Swift' }); },
  Node: function() { return React.createElement(TechIconImg, { name: 'Node' }); },
  WordPress: function() { return React.createElement(TechIconImg, { name: 'WordPress' }); },
  HTML5: function() { return React.createElement(TechIconImg, { name: 'HTML5' }); },
  CSS3: function() { return React.createElement(TechIconImg, { name: 'CSS3' }); },
  JavaScript: function() { return React.createElement(TechIconImg, { name: 'JavaScript' }); },
  React: function() { return React.createElement(TechIconImg, { name: 'React' }); },
  Figma: function() { return React.createElement(TechIconImg, { name: 'Figma' }); },
  Sketch: function() { return React.createElement(TechIconImg, { name: 'Sketch' }); },
  AdobeXD: function() { return React.createElement(TechIconImg, { name: 'AdobeXD' }); },
  Photoshop: function() { return React.createElement(TechIconImg, { name: 'Photoshop' }); },
  MySQL: function() { return React.createElement(TechIconImg, { name: 'MySQL' }); },
  AWS: function() { return React.createElement(TechIconImg, { name: 'AWS' }); },
  Firebase: function() { return React.createElement(TechIconImg, { name: 'Firebase' }); },
  Python: function() { return React.createElement(TechIconImg, { name: 'Python' }); }
};

module.exports = TechIcons;
