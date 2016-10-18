//= require jquery3
//= require jquery_ujs

$(function() {
  $('.home').addClass('load-in together');
});

var loadIn = $('.home').removeClass('load-in');

setTimeout(function(){
  loadIn.addClass('shrink');
}, 5000);
