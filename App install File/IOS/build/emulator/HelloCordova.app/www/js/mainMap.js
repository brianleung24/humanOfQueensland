/**
 * Created by kinngaileung on 23/9/15.
 */

(function (global) {
    "use strict";
alert("start");
    function onDeviceReady() {
        document.addEventListener("online", onOnline, false);
        document.addEventListener("resume", onResume, false);
        loadMapsApi();
    }

    function onOnline() {
        loadMapsApi();
    }

    function onResume() {
        loadMapsApi();
    }

    function loadMapsApi() {
        if (navigator.connection.type === Connection.NONE || (global.google !== undefined && global.google.maps)) {
            return;
        }
alert("load map");
        //TODO: Add your own Google maps API key to the URL below.

    }

    global.onMapsApiLoaded = function () {
        // Maps API loaded and ready to be used.
       initMap();
    };

    document.addEventListener("deviceready", onDeviceReady, false);
})(window);





$.getScript('https://maps.googleapis.com/maps/api/js?sensor=true&callback=initMap&key=AIzaSyDV-XQZ1hgN3sVtzscTqHcmgw9rMeJJDcI');

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: {lat:-23.5058643,lng:148.7691268},
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            maxZoom:6,
            minZoom:6
        });
        //draw polygon on map
        setupPolygons(map,mapList.black);
        setupPolygons(map,mapList.blue);
        setupPolygons(map,mapList.green);
        setupPolygons(map,mapList.pink);
        setupPolygons(map,mapList.purple);
        setupPolygons(map,mapList.red);
        setupPolygons(map,mapList.yellow);
        setupPolygons(map,mapList.orange);
        function setupPolygons(map,dis){
           var polygon =  new google.maps.Polygon({
                paths: dis.polygon,
                strokeColor: '#000000',
                strokeOpacity: 0.8,
                strokeWeight: 4,
                fillColor: dis.color,
                fillOpacity: 0.7
            });

            var marker = new google.maps.Marker({
                position: dis.markerLocation,
                map: map,
                title: dis.name,
                visible: false
            });
            var infowindow = new google.maps.InfoWindow({
                content: dis.name
            });
                infowindow.open(map, marker);

            polygon.setMap(map);
            polygon.addListener('click',goToResult);
            google.maps.event.addListener(polygon,"mouseover",function(){//change fill when move over
                this.setOptions({fillOpacity: 0});
            });
            google.maps.event.addListener(polygon,"mouseout",function(){
                this.setOptions({fillOpacity: 0.7});
            });
            function goToResult(event){//go to result page when click
            console.log("selected"+dis.name);
            window.location.href = "newsResults.html?"+"&location="+dis.postName;
            }
        }



    }


