var ltd;
var map;
var mapProp;
var currentPositionMarker;
var currentPositionCenter;

const locations =
        [
                {
                        "ltd": [47.91618, 106.91946],
                        "properties": {
                                "name": "GS25 Чойжин",
                                "description": "Bluesky зүүн талд Ариг Аняатай залгаа",
                                "time": "09:00 - 22:00"
                        }
                },
                {
                        "ltd": [47.90117, 106.91049],
                        "properties": {
                                "name": "GS25 Цэнгэлдэх",
                                "description": "120-н автобусны урд талд Цэнгэлдэх хорооллын 210-р байр",
                                "time": "09:00 - 23:00"
                        }
                },
                {
                        "ltd": [47.9274, 106.92176],
                        "properties": {
                                "name": "GS25 Хатагтай эмнэлэг",
                                "description": "11-р хорооллын Дашчойлин хийдийн зүүн талд байрлах Хатагтай эмнэлгийн байр",
                                "time": "07:00 - 22:00"
                        }
                },
                {
                        "ltd": [47.91766, 106.91146],
                        "properties": {
                                "name": "GS25 Ард",
                                "description": "Цэцэг төвийн чанх урд талд байрлалтай",
                                "time": "07:00 - 22:00"
                        }
                }
        ];

function initMap() {
        mapProp = {
                center: new google.maps.LatLng(47.918942, 106.916744),
                zoom: 13,
        };
        map = new google.maps.Map(
                document.getElementsByClassName("googleMap")[0],
                mapProp
        );

        var infowindow = new google.maps.InfoWindow(), marker, i;

        for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i].ltd[0], locations[i].ltd[1]),
                        map: map
                });

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                                map.setZoom(15.5);
                                map.setCenter(marker.getPosition());
                                infowindow.setContent(""+locations[i].properties.name+"<br>"+locations[i].properties.description+"<br>"+locations[i].properties.time);
                                infowindow.open(map, marker);
                        }
                })(marker, i));
        }
}

function getlocation() {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
        } else {
                alert("Sorry! your browser is not supporting");
        }
}

function showPosition(position) {
        currentPositionMarker = new google.maps.Marker({
                position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                map: map,
                mapProp
        });
        currentPositionMarker.addListener("click", () => {
                map.setZoom(15.5);
                map.setCenter(currentPositionMarker.getPosition());
                center = map.getCenter();
                var infowindow = new google.maps.InfoWindow({
                        content: "Таны байршил",
                });
                infowindow.open(map, currentPositionMarker);

                var x = nearest(currentPositionMarker.position.lat(), currentPositionMarker.position.lng());
                alert(" "+x);
                console.log(x);
        });
}
function nearest(lat, lng) {
        var dists = [];
        for(var i = 0; i < locations.length; i++){
                dists[i] = [];
                dists[i][0] = distance(locations[i].ltd[0], locations[i].ltd[1], lat, lng);
                dists[i][1]=locations[i].properties.name;
        }

        dists = dists.sort((a, b) => a[0] - b[0]);
        return ""+dists[0][1]+", "+dists[0][0];
}

function distance(lat1, lon1, lat2, lon2) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
                dist = 1;
        }
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        dist = dist * 1.609344
        return dist
}
