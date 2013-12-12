var itemHeight,
    itemLength,
    item;

var items = [
  '<div class="item"><div class="item__body"><div class="item__thumb" style="background-image: url(http://userserve-ak.last.fm/serve/500/89294613/Watching+Movies+with+the+Sound+Off+PNG.png)"></div><h4 class="item__title"><span>Watching Movies with the Sound Off</span><small>Mac Miller</small></h4></div><div class="delete"><i class="fa fa-times-circle delete__icon"></i></div> </div>',
  '<div class="item"><div class="item__body"><div class="item__thumb" style="background-image: url(http://userserve-ak.last.fm/serve/500/92879483/Old.jpg)"></div><h4 class="item__title"><span>Old</span><small>Danny Brown</small></h4></div><div class="delete"><i class="fa fa-times-circle delete__icon"></i></div> </div>',
  '<div class="item"><div class="item__body"><div class="item__thumb" style="background-image: url(http://userserve-ak.last.fm/serve/500/92652447/Nostalgic+64+curry.jpg)"></div><h4 class="item__title"><span>Nostalgic 64</span><small>Denzel Curry</small></h4></div><div class="delete"><i class="fa fa-times-circle delete__icon"></i></div> </div>',
  '<div class="item"><div class="item__body"><div class="item__thumb" style="background-image: url(http://userserve-ak.last.fm/serve/500/94315297/Action+Bronson++Party+Supplies++Blue+Chips+2+00cover.jpg)"></div><h4 class="item__title"><span>Blue Chips 2</span><small>Action Bronson &amp; Party Supplies</small></h4></div><div class="delete"><i class="fa fa-times-circle delete__icon"></i></div> </div>',
  '<div class="item"><div class="item__body"><div class="item__thumb" style="background-image: url(http://userserve-ak.last.fm/serve/500/92119511/The+SWOUP+Serengeti+cover.jpg)"></div><h4 class="item__title"><span>The #SWOUP Serengeti</span><small>Spark Master Tape</small></h4></div><div class="delete"><i class="fa fa-times-circle delete__icon"></i></div> </div>'
]

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

var itemCount = 0;
var itemTop = 0;
var addItem = function() {

  $('.search__flyout').hide();
  $('.search__input').val('').focus();

  $('.items').append(items[itemCount]);
  $('.countdown__count li:nth-child('+ (itemCount + 1) +')').css('display','flex');
  itemCount++;
  
}

$(function() {

  $('.prompt').click(function(e) {
    e.preventDefault();
    $('.overlay').css({
      '-webkit-transform' : 'translateX(-100%)',
      '-moz-transform' : 'translateX(-100%)',
      'transform' : 'translateX(-100%)'
    });
    $('#message').css({
        '-webkit-animation' : 'fadeIn 0.5s ease',
        '-webkit-transform' : 'translateY(1300px)',
        '-moz-transform' : 'translateY(1300px)',
        'transform' : 'translateY(1300px)'
    });
    $('.app').addClass('app--message');
    $('#logo__icon').addClass('fa-arrow-up');
    $('#logo__icon').css('-webkit-transform','rotate(-90deg)');
    _gaq.push(['_trackEvent', 'cosigns', 'click']);
  })

  $('.controls__btn').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('controls__btn--active');
  })

  $('.logo').click(function(e) {
    e.preventDefault();
    $('#message').css('-webkit-transform','translateY(-1400px)');
    $('.app').removeClass('app--message');
    $('#logo__icon').removeClass('fa-arrow-up');
    $('#logo__icon').css('-webkit-transform','rotate(0)')
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
    $('#logo__icon').css('-webkit-transform','rotate(-90deg)');
    $('.search__input').focus();
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
        key('down', function(){
          alert('you pressed a!')
        });
      }
    }
  });

  $('.result').click(function() {
    addItem();

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