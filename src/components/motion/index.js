'use strict';

var React = require('react');
var fm = require('framer-motion');

var motion = fm.motion;
var AnimatePresence = fm.AnimatePresence;

var EASE_OUT = [0.22, 1, 0.36, 1];
var VIEWPORT = { once: true, margin: '-48px', amount: 0.12 };

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

function getMotionTag(as) {
  var tag = as || 'div';
  return motion[tag] || motion.div;
}

function MotionReveal(props) {
  var MotionTag = getMotionTag(props.as || 'section');
  var reduced = prefersReducedMotion();
  var className = (props.className || '').trim();
  var passThrough = {};
  if (props.id) passThrough.id = props.id;

  return React.createElement(MotionTag, Object.assign({}, passThrough, {
    className: className || undefined,
    initial: reduced ? false : { opacity: 0, y: 32 },
    whileInView: reduced ? false : { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: { duration: 0.65, ease: EASE_OUT }
  }), props.children);
}

var heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.06 }
  }
};

var heroItemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: EASE_OUT }
  }
};

function MotionHero(props) {
  var reduced = prefersReducedMotion();
  var className = (props.className || '').trim();

  if (reduced) {
    return React.createElement('div', { className: className || undefined }, props.children);
  }

  return React.createElement(motion.div, {
    className: className || undefined,
    initial: 'hidden',
    animate: 'visible',
    variants: heroContainerVariants
  },
    React.Children.map(props.children, function(child, i) {
      if (child == null) return null;
      return React.createElement(motion.div, { key: i, variants: heroItemVariants }, child);
    })
  );
}

function MotionStagger(props) {
  var MotionTag = getMotionTag(props.as || 'div');
  var reduced = prefersReducedMotion();
  var className = (props.className || '').trim();
  var stagger = props.stagger != null ? props.stagger : 0.08;
  var delay = props.delay != null ? props.delay : 0.04;

  if (reduced) {
    return React.createElement(MotionTag, { className: className || undefined }, props.children);
  }

  return React.createElement(MotionTag, {
    className: className || undefined,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: VIEWPORT,
    variants: {
      hidden: {},
      visible: {
        transition: { staggerChildren: stagger, delayChildren: delay }
      }
    }
  }, props.children);
}

function MotionItem(props) {
  var MotionTag = getMotionTag(props.as || 'div');
  var reduced = prefersReducedMotion();
  var className = (props.className || '').trim();
  var offsetY = props.y != null ? props.y : 22;
  var passThrough = {};
  var keys = [
    'href', 'target', 'rel', 'onClick', 'role', 'tabIndex', 'onKeyDown',
    'aria-label', 'aria-current', 'aria-expanded', 'aria-haspopup', 'type', 'id'
  ];

  keys.forEach(function(key) {
    if (props[key] !== undefined) passThrough[key] = props[key];
  });

  if (reduced) {
    return React.createElement(MotionTag, Object.assign({}, passThrough, {
      className: className || undefined
    }), props.children);
  }

  return React.createElement(MotionTag, Object.assign({}, passThrough, {
    className: className || undefined,
    variants: {
      hidden: { opacity: 0, y: offsetY },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.52, ease: EASE_OUT }
      }
    }
  }), props.children);
}

function MotionHover(props) {
  var MotionTag = getMotionTag(props.as || 'div');
  var reduced = prefersReducedMotion();
  var className = (props.className || '').trim();

  if (reduced) {
    return React.createElement(MotionTag, { className: className || undefined }, props.children);
  }

  return React.createElement(MotionTag, {
    className: className || undefined,
    whileHover: { y: -5, transition: { duration: 0.22, ease: EASE_OUT } },
    whileTap: { scale: 0.985, transition: { duration: 0.14 } }
  }, props.children);
}

function MotionFade(props) {
  var MotionTag = getMotionTag(props.as || 'div');
  var reduced = prefersReducedMotion();
  var className = (props.className || '').trim();

  return React.createElement(MotionTag, {
    className: className || undefined,
    initial: reduced ? false : { opacity: 0 },
    animate: { opacity: 1 },
    exit: reduced ? undefined : { opacity: 0 },
    transition: { duration: props.duration || 0.35, ease: EASE_OUT }
  }, props.children);
}

module.exports = {
  motion: motion,
  AnimatePresence: AnimatePresence,
  MotionReveal: MotionReveal,
  MotionHero: MotionHero,
  MotionStagger: MotionStagger,
  MotionItem: MotionItem,
  MotionHover: MotionHover,
  MotionFade: MotionFade,
  EASE_OUT: EASE_OUT,
  prefersReducedMotion: prefersReducedMotion
};
