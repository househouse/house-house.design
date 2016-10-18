//= require jquery3
//= require jquery_ujs

jQuery(document).ready(function($) {
  $('.househouse').on('click', function(){
    $(this).addClass('shrink-ray');
    $('.copy').addClass('fadein');
    return false;
  });  
});
