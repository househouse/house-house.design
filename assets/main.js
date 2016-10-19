//= require jquery3
//= require jquery_ujs

// Animation #1
$(function() {
    $('.c-logo').addClass('c--animate-fade-in c--animate-together');
});

// Animation #2
setTimeout(function(){
    $('.c-hero').addClass('c--animate-shrink');
}, 3000);
