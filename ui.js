var itemHeight,
    itemLength,
    item;


if (Modernizr.draganddrop) {
  // Browser supports HTML5 DnD.
} else {
  // Fallback to a library solution.
}

var loadNewChart = function() {
  $('.chart').hide();
  $('#new').show();
  $('.app').attr('class',' app app--search');
  $('.content').addClass('content--show-chart');
  $('#logo__icon').addClass('fa-arrow-up');
  $('#logo__icon').css('-webkit-transform','rotate(-90deg)')
  setTimeout(function() {}, 10);
  // $('.controls').hide();
}

var setSearchHeight = function() {
  var distance = $('.search__input').offset().top - $('.bar').offset().top
  $('.search__flyout').css('height',distance);
}

$(function() {

  $('.controls__btn').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('controls__btn--active');
  })

  $('.logo').click(function(e) {
    e.preventDefault();
    $('.content').removeClass('content--show-chart');
    $('.chart').hide();
    $('#logo__icon').removeClass('fa-arrow-up');
    $('#logo__icon').css('-webkit-transform','rotate(0)')
    $('.app').attr('class','app');
    // $('.controls').show();
  });

  $('#show-menu').click(function(e) {
    $('.app').toggleClass('app--menu');
  })

  $('.tile__item img').load(function() {
    var src = $(this).attr('src');
    $(this).parent('.tile__item').css({
      'display' : 'block',
      'background-image' : 'url(' + src + ')'
    });
    $(this).remove();
  })

  $('.tile').click(function() {
    var top = 0;
    item = $('.item')
    chart = $(this).data('chart');
    $('.content').addClass('content--show-chart');
    $('.controls__btn--active').removeClass('controls__btn--active');
    $('#completed').show();
    $('#logo__icon').addClass('fa-arrow-up');
    $('#logo__icon').css('-webkit-transform','rotate(-90deg)')
    if(chart === 'complete') {
      itemHeight = $('.item').outerHeight(),
      itemLength = $('.item').length;
      $('#complete').show();
      $('.countdown').css('height',(itemHeight * itemLength));
    }
    else if (chart === 'new') {
      loadNewChart();
    }
    $('.item').each(function() {
      // i = $()
      prevItemHeight = Math.max(item.prev().outerHeight()),
      itemHeight = Math.max($('.item').outerHeight()),
      itemLength = $('.item').length;
          i = prevItemHeight;
      $(this).css('top', top);
      top = top + i
    });
  });

  $('.menu__item').click(function() {
    loadNewChart();
  });

  $('.search__input').keyup(function(e) {
    var term = $(this).val();
    if(term.length > 3) {
      $('.search__flyout').css('display','block')
      // define short of 'a'
      if($('.search__flyout').is(':visible')) {
        console.log('cat');
        key('down', function(){
          alert('you pressed a!')
        });
      }
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
    $('.countdown').append(placeholder);
  });


});