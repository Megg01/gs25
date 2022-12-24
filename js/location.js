const locations = [
        {
                id: 1,
                ltd: [47.91618, 106.91946],
                properties: {
                        name: "GS25 Чойжин",
                        description: "Bluesky зүүн талд Ариг Аняатай залгаа",
                        time: "09:00 - 22:00",
                },
        },
        {
                id: 2,
                ltd: [47.90117, 106.91049],
                properties: {
                        name: "GS25 Цэнгэлдэх",
                        description: "120-н автобусны урд талд Цэнгэлдэх хорооллын 210-р байр",
                        time: "09:00 - 23:00",
                },
        },
        {
                id: 3,
                ltd: [47.9274, 106.92176],
                properties: {
                        name: "GS25 Хатагтай эмнэлэг",
                        description:
                                "11-р хорооллын Дашчойлин хийдийн зүүн талд байрлах Хатагтай эмнэлгийн байр",
                        time: "07:00 - 22:00",
                },
        },
        {
                id: 4,
                ltd: [47.91766, 106.91146],
                properties: {
                        name: "GS25 Ард",
                        description: "Цэцэг төвийн чанх урд талд байрлалтай",
                        time: "07:00 - 22:00",
                },
        },
        {
                id: 5,
                ltd: [47.92087, 106.90252],
                properties: {
                        name: "GS25 8 шарга",
                        description:
                                "8 шаргын зам дагуу Бөртэ оёдлын үйлдвэрын чанх урд талд байрлалтай 5 давхар барилга",
                        time: "07:00 - 22:00",
                },
        },
        {
                id: 6,
                ltd: [47.92198, 106.94286],
                properties: {
                        name: "GS25 Сансар",
                        description: "Сансарын туслах замаар Баянцээлээс хойшоо зам дагуу",
                        time: "07:00 - 22:00",
                },
        },
        {
                id: 7,
                ltd: [47.90438, 106.92443],
                properties: {
                        name: "GS25 Нархан",
                        description: "Хоум плаза-н баруун талд Нархан хороолол",
                        time: "07:00 - 22:00",
                },
        },
        {
                id: 8,
                ltd: [47.9194, 106.94433],
                properties: {
                        name: "GS25 Зүүн 4н зам",
                        description:
                                "Зүүн 4 замын уулзварын зүүн хойно Кемпинский зочид буудлын урд",
                        time: "08:00 - 23:00",
                },
        },
        {
                id: 9,
                ltd: [47.89828, 106.89496],
                properties: {
                        name: "GS25 Хан-Уул",
                        description:
                                "ХУД хан-уул товер шилэн барилгын урд талын 32р байр баруун хойд буланд",
                        time: "07:00 - 00:00",
                },
        },
        {
                id: 10,
                ltd: [47.90295, 106.92494],
                properties: {
                        name: "GS25 Бүти Таун",
                        description: "ХУД И-мартын British school ард Бүти таун хороололд",
                        time: "07:00 - 00:00",
                },
        },
        {
                id: 11,
                ltd: [47.90295, 106.92494],
                properties: {
                        name: "GS25 ГССҮТ",
                        description: "Гэмтэлийн эмнэлгийн төв хаалганы хажууд",
                        time: "06:00 - 22:00",
                },
        },
        {
                id: 12,
                ltd: [47.91481, 106.921],
                properties: {
                        name: "GS25 Олимп",
                        description:
                                "Олимпын гудамж Шангри-ла моллын хойшоо зам дагуу Голомт банкны хажууд",
                        time: "07:00 - 23:00",
                },
        },
];
var map;
var mapProp;
var currentPositionMarker;
var currentPositionCenter;
var markers = [];

function initMap() {
        mapProp = {
                center: new google.maps.LatLng(47.918942, 106.916744),
                zoom: 13,
        };
        map = new google.maps.Map(
                document.getElementsByClassName("googleMap")[0],
                mapProp
        );

        var infowindow = new google.maps.InfoWindow(),
                marker,
                i;

        // let returnValue = "";

        for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                        position: new google.maps.LatLng(
                                locations[i].ltd[0],
                                locations[i].ltd[1]
                        ),
                        map: map,
                        icon: "../img/map-marker.webp",
                });
                markers.push(marker);
                let obj = render(locations[i]);
                let returnValue = obj;

                document
                        .getElementsByClassName("location-ul")[0]
                        .insertAdjacentHTML("beforeend", returnValue);
                google.maps.event.addListener(
                        marker,
                        "click",
                        (function (marker, i) {
                                return function () {
                                        map.setZoom(15);
                                        map.setCenter(marker.getPosition());
                                        infowindow.setContent(
                                                "<strong>" +
                                                locations[i].properties.name +
                                                "</strong><br>" +
                                                locations[i].properties.description +
                                                "<br>" +
                                                locations[i].properties.time
                                        );
                                        infowindow.open(map, marker);
                                        var item = document.getElementById("location-" + (i + 1));
                                        item.childNodes[1].style.borderColor = "#007cff";
                                };
                        })(marker, i)
                );
        }
}
function render(location) {
        return `
        <li id="location-${location.id}" class="for-location-search">
                <div class="location-card">
                                <h4>${location.properties.name}</h4>
                                <p>${location.properties.description}</p>
                                <p>${location.properties.time}</p>
                                <p>${location.ltd[0]}, ${location.ltd[1]}</p>
                </div>
        </li>
        `;
}
function getMarkerList() {
        let returnValue = "";

        let obj = new LocationCardItem(
                locations[i].properties.name,
                locations[i].properties.description,
                locations[i].properties.time,
                locations[i].ltd[0],
                locations[i].ltd[1]
        );
        returnValue += obj.render();

        document
                .getElementsByClassName("location-ul")[0]
                .insertAdjacentHTML("beforeend", returnValue);
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
                position: new google.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude
                ),
                map: map,
                icon: "../img/map-marker-my.webp",
                mapProp,
        });
        map.setZoom(15.5);
        map.setCenter(currentPositionMarker.getPosition());
        center = map.getCenter();
        var infowindow = new google.maps.InfoWindow({
                content: "Таны байршил",
        });
        infowindow.open(map, currentPositionMarker);

        var nearestLocId = nearest(
                currentPositionMarker.position.lat(),
                currentPositionMarker.position.lng()
        );

        var listContainer = document.getElementsByClassName("location-ul")[0];

        var nearestElement = document.getElementById("location-" + nearestLocId);

        listContainer.innerHTML = nearestElement.innerHTML;

        var nearestMarkers =
                nearestElement.childNodes[1].childNodes[7].textContent.split(", ");
        deleteMarkers(nearestMarkers[0], nearestMarkers[1]);

        const directionsRenderer = new google.maps.DirectionsRenderer();
        const directionsService = new google.maps.DirectionsService();

        directionsRenderer.setMap(map);
        calculateAndDisplayRoute(
                directionsService,
                directionsRenderer,
                currentPositionMarker.position.lat(),
                currentPositionMarker.position.lng(),
                nearestMarkers[0],
                nearestMarkers[1]
        );
        document.getElementById("direction-mode").addEventListener("change", () => {
                calculateAndDisplayRoute(
                        directionsService,
                        directionsRenderer,
                        currentPositionMarker.position.lat(),
                        currentPositionMarker.position.lng(),
                        nearestMarkers[0],
                        nearestMarkers[1]);
        });
}
function calculateAndDisplayRoute(
        directionsService,
        directionsRenderer,
        lat1,
        lon1,
        lat2,
        lon2
) {
        const selectedMode = document.getElementById("direction-mode").value;

        directionsService
                .route({
                        origin: { lat: lat1, lng: lon1 },
                        destination: { lat: parseFloat(lat2), lng: parseFloat(lon2) },

                        travelMode: google.maps.TravelMode[selectedMode],
                })
                .then((response) => {
                        directionsRenderer.setDirections(response);
                })
                .catch((e) => window.alert("Directions request failed due to " + e));
}

function nearest(lat, lng) {
        var dists = [];
        for (var i = 0; i < locations.length; i++) {
                dists[i] = [];
                dists[i][0] = distance(locations[i].ltd[0], locations[i].ltd[1], lat, lng);
                dists[i][1] = locations[i].properties.name;
        }
        dists.sort((a, b) => a[0] - b[0]);

        for (var i = 0; i < locations.length; i++) {
                if (locations[i].properties.name == dists[0][1]) return i + 1;
        }
        return -1;
}

function distance(lat1, lon1, lat2, lon2) {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
                Math.sin(radlat1) * Math.sin(radlat2) +
                Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
                dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
}
function deleteMarkers(lat, lng) {
        //Loop through all the markers and remove
        for (var i = 0; i < markers.length; i++) {
                if (markers[i].position.lat() != lat && markers[i].position.lng() != lng) {
                        markers[i].setMap(null);
                }
        }
}

function searchLocation() {
        // Declare variables
        var input, filter, ul, li, i, name, desc;
        input = document.getElementById("locationInput");
        filter = input.value.toUpperCase();
        ul = document.getElementsByClassName("location-ul")[0];
        li = document.getElementsByClassName("for-location-search");
        
        console.log(filter);

        for (i = 0; i < li.length; i++) {
                name = li[i].childNodes[1].childNodes[1].textContent;
                desc = li[i].childNodes[1].childNodes[3].textContent;

                if (name.toUpperCase().indexOf(filter) > -1 || desc.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                } else {
                        li[i].style.display = "none";
                }
        }
}