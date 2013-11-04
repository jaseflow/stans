
var mobile = 'only screen and (max-width: 480px)';
var tabletUp = 'only screen and (min-width: 768px)';

var barLineHeight;

var setBars = function() {
  $('.bar').css('height',barLineHeight + 'px')
}

$(function() {

<<<<<<< HEAD
    FastClick.attach(document.body);

    barLineHeight = $('.bar__line:first-child').height();

    setBars();

   $('.recent__nav a').click(function(e) {
      e.preventDefault();
      $('.recent__nav').toggleClass('recent__nav--toggled');
   });

  $('#follow').click(function(e) {
    e.preventDefault();
=======
  FastClick.attach(document.body);

  barLineHeight = $('.bar__line:first-child').height();

  // setBars();

  $('.recent__nav a').click(function(e) {
    e.preventDefault();
    $('.recent__nav').toggleClass('recent__nav--toggled');
  });

  $('#follow').click(function(e) {
    e.preventDefault();
    $(this).css('background-color','rgb(0, 143, 255)');
    $(this).html('<i class="icon-ok"></i> Following')
>>>>>>> gh-pages
  });

  if (matchMedia(mobile).matches) {

<<<<<<< HEAD
    $('#follow').click(function(e) {
      e.preventDefault();
      $(this).css('-webkit-transform','translateY(100px)');
      $('#content').css('-webkit-transform','translateY(-81px)')
    });

=======
>>>>>>> gh-pages
    $('.bar').click(function(e) {
      $('.bar__canvas').toggleClass('bar__canvas--switch')
    });

  };


});