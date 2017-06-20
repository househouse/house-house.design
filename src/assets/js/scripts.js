/* jshint esversion: 6 */
// Make eslint shutup about undef global vars
/* global window, document */

// Lazy Load
const sections = document.getElementsByClassName('c-card__image');
const cardImage = document.getElementsByClassName('js-card-visible');

window.onscroll = () => {
    // Don't run the rest of the code if every section is already visible
  if (document.querySelectorAll('.c-card__image:not(.js-card-visible)').length === 0) return;

  // Run the check for every section in sections; add the visibile class
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.75 && section.getBoundingClientRect().top > 0) {
      section.classList.add('js-card-visible');
    }
  }

  // If a card image is visible (above), swap out the `data-` attribute
  for (let i = 0; i < cardImage.length; i += 1) {
    if (cardImage[i].getAttribute('data-style')) {
      cardImage[i].setAttribute('style', cardImage[i].getAttribute('data-style'));
      cardImage[i].removeAttribute('data-style');
    }
  }
};


class Modal {
  /**
    * Create a new Modal instance
    *
    * @param {object} selectorName
    * @param {object} contents
    * @param {object} trigger
    */

  constructor(selectorName, contents, trigger = null) {
    this.self = selectorName;
    this.contents = contents;
    this.trigger = trigger;
    this.isOpen = false;
    this.openTimer = 250;
    this.openDelayTimer = null;

    this.init();
  }

  /**
    * Initialize the modal
    */

  init() {
    window.modalInner = Modal.contents;
    // Create a node with a random ID to hold markup for each instance
    console.log('>>>>>> I N I T    M O D A L <<<<<<');
    const modalNodeInstance = document.createElement('div');
    modalNodeInstance.id = `c-modal-instance-${Math.floor(Math.random() * 10000)}`;
    console.log("create container");
    // Create the container elements
    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('c-modal', 'u-stack-modal');
    console.log("Clone contents");
    // Clone the modal contents into the inner modal container
    const modalContents = this.contents.cloneNode(true);
    this.modalElement.appendChild(modalContents);

    console.log("Append everything");
    // Add the node to the DOM
    document.body.appendChild(modalNodeInstance);

    // Add inner container as a child element to the modal element
    this.modalElement.appendChild(modalContent);

    // Add modal element to the instance container
    modalNodeInstance.appendChild(this.modalElement);

    // Get the click region element (what triggers the modal)
    let trigger;
    if (this.trigger === null) {
      trigger = this.self;
    } else {
      trigger = this.trigger;
    }

    // Add event listeners for modal
    trigger.addEventListener('click', () => {
      if (this.isOpen) {
        console.log('>>>>>> T O G G L E    M O D A L   C L O S E <<<<<<');
        this.close();
      } else {
        console.log('>>>>>> T O G G L E    M O D A L   O P E N <<<<<<');
        this.open();
      }
    });
  }

  /**
    * Open the modal
    */

  open() {
    // Only open the modal if delay timer has expired
    if (this.openDelayTimer === null) {
      this.isOpen = true;
      console.log('>>>>>> O P E N I N G <<<<<<');
      this.self.classList.add('js-modal-show');
      this.modalElement.classList.add('js-modal-show');

      // if (this.trigger !== null) {
      //   this.trigger.classList.add('is-active');
      // }

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
      }, this.openTimer);
    }
  }

  /**
    * Close the modal
    */

  close() {
    // Close modal if delay timer is expired
    if (this.openDelayTimer === null) {
      this.isOpen = false;
      console.log('>>>>>> C L O S I N G <<<<<<');
      this.self.classList.remove('js-modal-show');
      this.modalElement.classList.remove('js-modal-show');

      // if (this.trigger !== null) {
        // this.trigger.classList.remove('is-active');
        // this.trigger.classList.add('js-modal-hide');
      // }

      this.openDelayTimer = setTimeout(() => {
        // if (this.trigger !== null) {
        //   this.trigger.classList.remove('js-modal-hide');
        // }
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
      }, this.openTimer);
    }
  }
}

const statementSelector = document.querySelector('.c-modal[data-modal="statement"]');
const statementContent = document.querySelector('[data-modal-inner="statement"]');
const statementTrigger = document.querySelector('[data-modal-trigger="statement"]');
const statement = new Modal(statementSelector, statementContent, statementTrigger);
export default statement;

// Old Modal
// (function(e) {
//   'use strict';
//
//   function i() {}
//
//   var t = function() {
//     var e = {
//       transition: 'transitionend',
//     };
//
//     var i = document.createElement('b');
//     var t;
//     for (t in e) {
//       if (i.style[t] !== null) {
//         return e[t];
//       }
//     }
//   }();
//
//   function n(e, i) {
//     var t = document.querySelectorAll(e);
//     var n = -1;
//     var o = t.length;
//     while (++n < o) {
//       t[n].addEventListener('click', i);
//     }
//   }
//
//   function o(e, l) {
//     var a = this;
//
//     l = l || {};
//
//     if (!(a instanceof o)) {
//       return new o(e, l);
//     }
//     a.elem = e;
//     a.onShow = l.onShow || i;
//     a.onShowEnd = l.onShowEnd || i;
//     a.onHide = l.onHide || i;
//     var s = l.onHideEnd || i;
//
//     a.onHideEnd = function() {
//       e.style.display = 'none';
//       s(e);
//     };
//
//     var r = a.fade = t ? l.fade : false;
//
//     a.scrollTop = l.scrollTop !== null ? l.scrollTop : true;
//     a.isVisible = false;
//
//     var c = e.querySelector(l.dialogSelector);
//
//     n(l.showSelector || '.js-modal-show', function(e) { a.show(e.target); });
//     n(l.hideSelector || '.js-modal-hide', function(e) { a.hide(e.target); });
//
//     e.addEventListener('click', function(i) {
//       i.target === e && a.hide(e);
//     });
//
//     if (r) {
//       var u = (r.duration || '0.25s') + ' ' + (r.timingFunction || 'ease') + ' opacity';
//       e.style.cssText += 'transition:' + u + ';';
//       e.addEventListener(t, function() {
//           (a.isVisible ? a.onShowEnd : a.onHideEnd)(e);
//       });
//     }
//   }
//
//   o.prototype.show = function(e) {
//     var i = this;
//     var t = i.elem;
//     var n = t.style;
//     if (!i.isVisible) {
//       document.body.style.overflow = 'hidden';
//       if (i.fade) {
//         n.opacity = 0;
//       }
//       n.display = 'block';
//       if (i.scrollTop) {
//         t.scrollTop = 0;
//       }
//       if (i.fade) {
//         setTimeout(function() {
//           n.opacity = 1;
//         }, 0)
//       }
//       i.isVisible = true;
//       i.onShow(t, e);
//       !i.fade && i.onShowEnd(t);
//     }
//   };
//
//   o.prototype.hide = function (e) {
//     var i = this;
//     var t = i.elem;
//     if (i.isVisible) {
//       document.body.style.overflow = '';
//       if (i.fade) {
//         t.style.opacity = 0;
//       }
//       i.isVisible = false;
//       i.onHide(t, e);
//       !i.fade && i.onHideEnd(t);
//     }
//   };
//
//   if (typeof module === 'object') {
//     module.exports = o;
//   } else {
//     e.modal = o;
//   }
// })(this);
//
// var elem = document.querySelector('.c-modal');
//
// var opts = {
//   showSelector: '.js-modal-show',
//   hideSelector: '.js-modal-hide',
//   dialogSelector: '.c-modal__content',
//   fade: {
//     duration: '0.25s',
//     timingFunction: 'linear'
//   }
// };
//
// modal(elem, opts);


// Google Analytics
/* eslint-disable */
!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,'script','https://www.google-analytics.com/analytics.js','ga'),ga('create','UA-87162611-1','auto'),ga('send','pageview');
/* eslint-enable */
