'use strict';

/**
 * GSAP ScrollTrigger animations for the scroll homepage.
 * All triggers are scoped inside `root` via gsap.context for safe cleanup on unmount.
 */

var gsap = require('gsap').gsap;
var ScrollTrigger = require('gsap/dist/ScrollTrigger').ScrollTrigger;

function initScrollHomeGsap(root) {
  if (!root) {
    return function noop() {};
  }

  gsap.registerPlugin(ScrollTrigger);

  var ctx = gsap.context(function() {
    /* --- Hero: subtle parallax on gradient layer --- */
    var hero = root.querySelector('.scroll-homepage__hero');
    var heroGrad = root.querySelector('.scroll-homepage__hero-gradient');
    if (hero && heroGrad) {
      gsap.to(heroGrad, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    /* --- Mobile App Development panel --- */
    var mobilePanel = root.querySelector('.scroll-panel--mobile');
    if (mobilePanel) {
      var phoneGroup = mobilePanel.querySelector('.js-phone-group');
      var android = mobilePanel.querySelector('.js-android');
      var ios = mobilePanel.querySelector('.js-ios');
      var mobileText = mobilePanel.querySelector('.js-mobile-text');

      if (phoneGroup) {
        gsap.fromTo(
          phoneGroup,
          { y: 120, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: mobilePanel,
              start: 'top 78%',
              end: 'top 38%',
              scrub: 1
            }
          }
        );
      }

      if (android) {
        gsap.fromTo(
          android,
          { x: -110, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: mobilePanel,
              start: 'top 72%',
              end: 'top 36%',
              scrub: 1
            }
          }
        );
      }

      if (ios) {
        gsap.fromTo(
          ios,
          { x: 110, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: mobilePanel,
              start: 'top 72%',
              end: 'top 36%',
              scrub: 1
            }
          }
        );
      }

      if (mobileText) {
        gsap.fromTo(
          mobileText,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: mobilePanel,
              start: 'top 68%',
              end: 'top 40%',
              scrub: 1
            }
          }
        );
      }
    }

    /* --- Website Development: monitor + Chrome --- */
    var websitePanel = root.querySelector('.scroll-panel--website');
    if (websitePanel) {
      var monitorGroup = websitePanel.querySelector('.js-monitor-group');
      var chromeLogo = websitePanel.querySelector('.js-chrome-logo');
      var websiteText = websitePanel.querySelector('.js-website-text');

      if (monitorGroup) {
        gsap.fromTo(
          monitorGroup,
          { scale: 0.82, opacity: 0, y: 80 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: websitePanel,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1
            }
          }
        );
      }

      if (chromeLogo) {
        gsap.fromTo(
          chromeLogo,
          { scale: 0.35, y: 70, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: websitePanel,
              start: 'top 72%',
              end: 'top 38%',
              scrub: 1
            }
          }
        );
      }

      if (websiteText) {
        gsap.fromTo(
          websiteText,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: websitePanel,
              start: 'top 65%',
              end: 'top 36%',
              scrub: 1
            }
          }
        );
      }
    }

    /* --- Web App Development --- */
    var webappPanel = root.querySelector('.scroll-panel--webapp');
    if (webappPanel) {
      var stack = webappPanel.querySelector('.js-webapp-stack');
      var reactBadge = webappPanel.querySelector('.js-react-badge');
      var webappText = webappPanel.querySelector('.js-webapp-text');

      if (stack) {
        gsap.fromTo(
          stack,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: webappPanel,
              start: 'top 78%',
              end: 'top 40%',
              scrub: 1
            }
          }
        );
      }

      if (reactBadge) {
        gsap.fromTo(
          reactBadge,
          { scale: 0.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: webappPanel,
              start: 'top 70%',
              end: 'top 38%',
              scrub: 1
            }
          }
        );
      }

      if (webappText) {
        gsap.fromTo(
          webappText,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: webappPanel,
              start: 'top 65%',
              end: 'top 36%',
              scrub: 1
            }
          }
        );
      }
    }

    /* --- UI/UX Design --- */
    var uiuxPanel = root.querySelector('.scroll-panel--uiux');
    if (uiuxPanel) {
      var canvas = uiuxPanel.querySelector('.js-uiux-canvas');
      var figmaBadge = uiuxPanel.querySelector('.js-figma-badge');
      var uiuxText = uiuxPanel.querySelector('.js-uiux-text');

      if (canvas) {
        gsap.fromTo(
          canvas,
          { scale: 0.88, opacity: 0, y: 60 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: uiuxPanel,
              start: 'top 78%',
              end: 'top 40%',
              scrub: 1
            }
          }
        );
      }

      if (figmaBadge) {
        gsap.fromTo(
          figmaBadge,
          { rotation: -12, scale: 0.5, opacity: 0 },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: uiuxPanel,
              start: 'top 70%',
              end: 'top 38%',
              scrub: 1
            }
          }
        );
      }

      if (uiuxText) {
        gsap.fromTo(
          uiuxText,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: uiuxPanel,
              start: 'top 65%',
              end: 'top 36%',
              scrub: 1
            }
          }
        );
      }
    }

    /* --- Lower homepage sections (platforms, about, etc.) --- */
    gsap.utils.toArray(root.querySelectorAll('.sh-reveal')).forEach(function(el) {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, root);

  return function scrollHomeCleanup() {
    ctx.revert();
  };
}

module.exports = { initScrollHomeGsap };
