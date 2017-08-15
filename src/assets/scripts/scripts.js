/* jshint esversion: 6 */
// Make eslint shutup about undef global vars
/* global window, document */

// Init new Modals
/* eslint-disable */
import Modal from './modal'
const statement = new Modal('statement')
/* eslint-enable */

// Lazy Load
const sections = document.getElementsByClassName('c-card__image');
const cardImage = document.getElementsByClassName('js-card-visible');

window.onscroll = () => {
  // Don't run the rest of the code if every section is already visible
  if (document.querySelectorAll('.c-card__image:not(.js-card-visible)').length === 0) return;

  // Run the check for every section in sections; add the visibile class
  for (let i = 0; i < sections.length; i += 1) {
    // eslint-disable-next-line
    if (sections[i].getBoundingClientRect().top <= window.innerHeight * 0.75 && sections[i].getBoundingClientRect().top > 0) {
      sections[i].classList.add('js-card-visible');
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

// Google Analytics
/* eslint-disable */
!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,'script','https://www.google-analytics.com/analytics.js','ga'),ga('create','UA-87162611-1','auto'),ga('send','pageview');
/* eslint-enable */
