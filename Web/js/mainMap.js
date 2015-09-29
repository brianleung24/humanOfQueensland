/**
 * Created by kinngaileung on 23/9/15.
 */
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -27.4073899, lng: 153.0028595},// use Brisbane as default
        zoom: 8
    });
}
