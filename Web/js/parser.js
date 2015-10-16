/**
 * parses any RSS/XML feed through Google and returns JSON data
 * source: http://stackoverflow.com/a/6271906/477958
 */
function parseRSS(url, container) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      //console.log(data.responseData.feed);
      $(container).html('<li><h2>'+capitaliseFirstLetter(data.responseData.feed.title)+'</h2></li>');
	   var thehtml = "";
		$.each(data.responseData.feed.entries, function(key, value){
		  thehtml = '<tr>'+value+'</tr>';
        thehtml = '<tr><div class = "feed"><h3><a href="'+'" target="_blank">'+value.title+'</a></h3>';
        console.log(data);
        console.log(data.responseData.feed.entries);
        thehtml+=value.content+"</div></li>";
		$(container).append(thehtml);
		var key = document.getElementsByTagName("img");
		var img = document.getElementsByTagName("img")[key.length-1];
		img.className = "rssImage";
		//img.height = "1000";
		//img.width = "1000";
		//$(container).append(" ");

      });
    }
  });
}

/**
 * Capitalizes the first letter of any string variable
 * source: http://stackoverflow.com/a/1026087/477958
 */
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
