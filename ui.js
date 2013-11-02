
var mobile = 'only screen and (max-width: 480px)';
var tabletUp = 'only screen and (min-width: 768px)';

var barLineHeight;

var setBars = function() {
  $('.bar').css('height',barLineHeight + 'px')
}

$(function() {

    FastClick.attach(document.body);

    barLineHeight = $('.bar__line:first-child').height();

    setBars();

   $('.recent__nav a').click(function(e) {
      e.preventDefault();
      $('.recent__nav').toggleClass('recent__nav--toggled');
   });

  $('#follow').click(function(e) {
    e.preventDefault();
  });

  if (matchMedia(mobile).matches) {

    $('#follow').click(function(e) {
      e.preventDefault();
      $(this).css('-webkit-transform','translateY(100px)');
      $('#content').css('-webkit-transform','translateY(-81px)')
    });

    $('.bar').click(function(e) {
      $('.bar__canvas').toggleClass('bar__canvas--switch')
    });

  };


});