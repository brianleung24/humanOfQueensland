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

		$.each(data.responseData.feed.entries, function(key, value){
            var thehtml = '<div class = "feed"><h3><a href="'+'" target="_blank">'+value.title+'</a></h3>';

            console.log(data.responseData.feed.entries);
            thehtml+="<img class='listImage' src=''><p class='listItem'>"+value.content+"</p></div>";
            $(container).append(thehtml);
            var key = document.getElementsByTagName("img");
            var img = document.getElementsByTagName("img")[key.length-1];
            var p = document.getElementsByTagName("p");
            var listP = document.getElementsByTagName("p")[p.length-2];
            var listImga = document.getElementsByClassName("listImage");
            var listImg = document.getElementsByClassName("listImage")[listImga.length-1];
            var a ;//= listP.childNodes[0];
            console.log(listP);
           if(listP.getElementsByTagName("img")[0]!=null){
                listImg.src = listP.getElementsByTagName("img")[0].src;
                //console.log(a.childNodes[0].src);
                listP.removeChild(0);
            }
            img.className = "rssImage";

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
