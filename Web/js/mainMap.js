/**
 * Created by kinngaileung on 23/9/15.
 */
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: {lat:-23.1252682,lng:141.6150639},
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            maxZoom:7,
            minZoom:5.5
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
            polygon.setMap(map);
            polygon.addListener('click',goToResult);
            function goToResult(event){//go to result page when click
           alert (dis.color);
            }
        }



    }


