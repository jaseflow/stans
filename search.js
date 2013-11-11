
var data, doRequest, handleResponse, url;

url = 'http://ws.audioscrobbler.com/2.0/';

data = {
  api_key: '556717aa07990447a306688c12b23e2b',
  format: 'json',
  method: 'artist.search',
  artist: 'action bronson'
};

handleResponse = function(res) {
  return console.log(res);
};

doRequest = function(artist) {
  data.artist = artist;
  return $.ajax({
    url: url,
    cache: false,
    dataType: 'json',
    data: data
  }).done(handleResponse);
};

jQuery(function($) {
	
	doRequest('Spark Master Tape');

});
