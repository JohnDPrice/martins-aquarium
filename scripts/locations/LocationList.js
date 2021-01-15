import {useLocation} from "./LocationDataProvider.js"
import {Location} from "./Location.js"

let locationContainer = document.querySelector("#location-list")

export function LocationCard() {
    const allTheLocations = useLocation()
    
    let locationListHTMLString = ""
    for(const currentLocationInLoop of allTheLocations) {
        console.log(currentLocationInLoop)
        locationListHTMLString += Location(currentLocationInLoop)
    }

    console.log(locationListHTMLString)
    locationContainer.innerHTML =  `<h2>Places I've Been</h2>
    <div class="container location-list">${locationListHTMLString}`
}