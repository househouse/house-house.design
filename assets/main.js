//= require jquery3
//= require jquery_ujs

$(function() {
    $('.t-home').addClass('load-in together');
});

var loadIn = $('.t-home').removeClass('load-in');

setTimeout(function(){
    loadIn.addClass('shrink');
}, 3000);
