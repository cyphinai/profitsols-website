'use strict';

var React = require('react');
var useEffect = React.useEffect;
var useRef = React.useRef;

/**
 * Adds .cyber-reveal--visible when the section enters the viewport.
 */
function RevealSection(props) {
  var ref = useRef(null);
  var Tag = props.as || 'section';
  var className = (props.className || '').trim();
  var children = props.children;

  useEffect(function() {
    var node = ref.current;
    if (!node) return undefined;

    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('cyber-reveal--visible');
      return undefined;
    }

    var obs = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('cyber-reveal--visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -5% 0px' }
    );
    obs.observe(node);
    return function() {
      obs.disconnect();
    };
  }, []);

  return React.createElement(Tag, { ref: ref, className: (className + ' cyber-reveal').trim() }, children);
}

module.exports = RevealSection;
