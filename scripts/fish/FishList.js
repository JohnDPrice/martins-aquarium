import {useFish} from "./FishDataProvider.js"
import {Fish} from "./Fish.js"



let fishContainer = document.querySelector("#fish-list")

export function FishList() {
    const allTheFish = useFish()

    let fishListHTMLString = ""
    for (const currentFishInLoop of allTheFish) {
        fishListHTMLString += Fish(currentFishInLoop);
    }

    fishContainer.innerHTML = `<h2>My Fish</h2>${fishListHTMLString}`;
}