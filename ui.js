
var mobile = 'only screen and (max-width: 480px)',
    tabletUp = 'only screen and (min-width: 768px)',
    barLineHeight;

var setBars = function() {
  $('.bar').css('height',barLineHeight + 'px')
}

var applyOrder = function() {
  var order = 1;
  $('.card').each(function() {
    $(this).css('order' , order);
    order++;
  });
}

$(function() {

  FastClick.attach(document.body);

  barLineHeight = $('.bar__line:first-child').height();

  applyOrder();

  // setBars();

  $('.recent__nav a').click(function(e) {
    e.preventDefault();
    $('.recent__nav').toggleClass('recent__nav--toggled');
  });

  $('#follow').click(function(e) {
    e.preventDefault();
    $(this).css('background-color','rgb(0, 143, 255)');
    $(this).html('<i class="icon-ok"></i> Following')
  });

  if (matchMedia(mobile).matches) {

    $('.bar').click(function(e) {
      $('.bar__canvas').toggleClass('bar__canvas--switch')
    });

  };


});