var ltd;
var map;
var mapProp;
var marker;
var center;

function initMap() {
        mapProp = {
                center: new google.maps.LatLng(47.918942, 106.916744),
                zoom: 13,
        };
        map = new google.maps.Map(
                document.getElementsByClassName("googleMap")[0],
                mapProp
        );
        ltd = new google.maps.LatLng(47.928942, 106.916744);
        var marker = new google.maps.Marker({
                position: ltd,
                map: map,
        });
        marker.addListener("click", () => {
                map.setZoom(14);
                map.setCenter(marker.getPosition());
                center = map.getCenter();
                var infowindow = new google.maps.InfoWindow({
                        content:""+center,
                });
                infowindow.open(map, marker);
        });
}

var x = document.getElementById("location");
function getlocation() {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
        } else {
                alert("Sorry! your browser is not supporting");
        }
}

function showPosition(position) {
        marker = new google.maps.Marker({
                position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                map: map,
                mapProp
        });
}