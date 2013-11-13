
var data, doRequest, handleResponse, url;

url = 'http://ws.audioscrobbler.com/2.0/';

data = {
  api_key: '556717aa07990447a306688c12b23e2b',
  format: 'json',
  method: 'album.search',
  artist: '',
  limit: 5
};

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var result = _.template('<div class="result"><div class="result__img"><img src="{{imgUrl}}"></div><div class="results__body"><h4>{{name}}</h4></div></div>'),

printAlbums = function(res) {
  var albums = res.results.albummatches.album;
  for(i in albums) {
    var imgUrl = albums[i].image[1]['#text'],
        name = albums[i].name,
        html = result({name: name, imgUrl: imgUrl});
    $('#results').append(html);
  }
};

findAlbum = function(album) {
  data.album = album;
  return $.ajax({
    url: url,
    cache: false,
    dataType: 'json',
    data: data
  }).done(printAlbums);
};

var triggerSearch = _.debounce(function() {
    var val = $('#search').val();
    if (val.length > 3) {
      findAlbum(val);
    }
}, 500);

jQuery(function($) {
	
  $('#search').keyup(triggerSearch);

});

