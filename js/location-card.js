class LocationCardItem {
        constructor(name, desc, time, lat, long) {
                this.name = name;
                this.desc = desc;
                this.time = time;
                this.lat = lat;
                this.long = long;
        }
        render() {
                return `
                <li>
                        <div class="location-card" id="location">
                                <div>
                                        <h4>${this.name}</h4>
                                        <p>${this.desc}</p>
                                        <p>${this.time}</p>
                                        <p>${this.lat}, ${this.long}</p>
                                </div>
                        </div>
                </li>
                `;
        }
}

export default class LocationCard {
        constructor(locationUrl) {
                this.locationUrl = locationUrl;
        }
        Download(targetElement) {
                fetch(`${this.locationUrl}`)
                .then( result => {
                        result.json()
                                .then(jsob => {
                                        document.getElementsByClassName(targetElement)[0].innerHTML =
                                                jsob.map(locationCard => {
                                                                const _locationCard = new LocationCardItem(
                                                                        locationCard.name,
                                                                        locationCard.desc,
                                                                        locationCard.time,
                                                                        locationCard.lat,
                                                                        locationCard.long
                                                                );
                                                                return _locationCard.render();
                                                })
                                                .reduce((prevVal, curVal) => prevVal + curVal, "")
                                        ;
                                })
                })
                .catch(err => {console.log(err)});
        }
}