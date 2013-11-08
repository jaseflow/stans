
$(function() {


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
    $('.chart').append(placeholder);
  });

});