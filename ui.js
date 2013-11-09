var itemHeight,
    itemLength;


$(function() {

  $('.logo')

  $('.controls__btn').click(function(e) {
    e.preventDefault();
    $('.controls__btn--active').removeClass('controls__btn--active');
    $(this).addClass('controls__btn--active');
  })

  $('.logo').click(function(e) {
    e.preventDefault();
    $('.content').removeClass('content--show-chart');
    $('.chart').hide();
    $('#logo__icon').removeClass('fa-arrow-up');
    $('#logo__icon').css('-webkit-transform','rotate(0)')
  });

  $('#show-menu').click(function(e) {
    $(this).html('<i class="fa fa-times"></i>');
    $('.app').toggleClass('app--menu');
  })

  $('.tile__item img').load(function() {
    console.log('ready');
    $(this).parent('.tile__item').css('display','block');
  })

  $('.tile').click(function() {
    chart = $(this).data('chart');
    $('.content').addClass('content--show-chart');
    $('.controls__btn--active').removeClass('controls__btn--active');
    $('#completed').show();
    $('#logo__icon').addClass('fa-arrow-up');
    $('#logo__icon').css('-webkit-transform','rotate(-90deg)')
    if(chart === 'complete') {
      itemHeight = $('.item').outerHeight(),
      itemLength = $('.item').length;
      console.log(itemLength);
      $('#complete').show();
      $('.countdown').css('height',(itemHeight * itemLength));
    }
    else if (chart === 'new') {
      $('#new').show();
    }
  });

  $('.search__input').keyup(function(e) {
    var term = $(this).val();
    if(term.length > 3) {
      $('.search__flyout').css('display','block')
    }
  });

  $('.search__input').blur(function() {
    $('.search__flyout').attr('style','');
  });

  $('.shuffle__arrow--down').click(function() {
    var item = $(this).parents('.item');
    item.insertAfter(item.next());
    item.css('-webkit-transform','translateY(0)');
    prevItem.css('-webkit-transform','translateY(-0)');
  });

  $('.shuffle__arrow--up').click(function() {
    var item = $(this).parents('.item'),
        prevItem = $(this).parents('.item').prev('.item');
    item.insertBefore(item.prev());
    item.css('-webkit-transform','translateY(-0)');
    prevItem.css('-webkit-transform','translateY(0)');
  });

  $('.delete__icon').click(function() {
    var item = $(this).parents('.item'),
        placeholder = "<li class='item item--placeholder'><div class='item__body'>Search for another album</div></li>";
    item.remove();
    console.log(placeholder);
    $('.countdown').append(placeholder);
  });

});