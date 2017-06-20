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
    * @param {object} content
    * @param {object} trigger
    */

  constructor(selectorName, content, triggers = null) {
    this.self = selectorName;
    this.content = content;
    this.triggers = triggers;
    this.isOpen = false;
    this.openTimer = 250;
    this.openDelayTimer = null;

    this.init();
  }

  /**
    * Initialize the modal
    */

  init() {
    for (const trigger of this.triggers) {
      trigger.addEventListener('click', (e) => {
        if (this.isOpen) {
          e.preventDefault();
          this.close();
        } else {
          e.preventDefault();
          this.open();
        }
      });
    }
  }

  /**
    * Open the modal
    */

  open() {
    // Only open the modal if delay timer has expired
    if (this.openDelayTimer === null) {
      this.isOpening = true;
      this.self.style.display = 'block';

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
        this.isOpening = false;
        this.isOpen = true;
      }, this.openTimer);
    }
  }

  /**
    * Close the modal
    */

  close() {
    // Close modal if delay timer is expired
    if (this.openDelayTimer === null) {
      this.isClosing = true;
      this.content.style.animation = 'slide-out 0.5s forwards';
      this.self.style.opacity = 0;

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
        this.isClosing = false;
        this.isOpen = false;
        this.self.style.display = 'none';
        this.self.style.opacity = 1;
      }, this.openTimer);
    }
  }
}

const statementSelector = document.querySelector('.c-modal[data-modal="statement"]');
const statementContent = document.querySelector('[data-modal-inner="statement"]');
const statementTrigger = document.querySelectorAll('[data-modal-trigger="statement"]');
const statement = new Modal(statementSelector, statementContent, statementTrigger);


// Google Analytics
/* eslint-disable */
!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,'script','https://www.google-analytics.com/analytics.js','ga'),ga('create','UA-87162611-1','auto'),ga('send','pageview');
/* eslint-enable */
