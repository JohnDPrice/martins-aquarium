import {useTemperatureTipCollection} from "./TipDataProvider.js"
import {useSalinityTipCollection} from "./TipDataProvider.js"
import {Tip} from "./Tip.js"
import {salinityTip} from "./Tip.js"

let tipContainer = document.querySelector("#tip-list")


// Temperature Tips Function Exporting to main.js
export function TipList() {
    const allTheTips = useTemperatureTipCollection()

    let tipListHTMLString = ""
    for (const currentTipInLoop of allTheTips) {
        tipListHTMLString += Tip(currentTipInLoop);
    }

    tipContainer.innerHTML = `<h2>Fish Tips</h2><h3>Temperature</h3><ul class = "tip-container">${tipListHTMLString}</ul>`;
}


// Salinity Tips Function Exporting to main.js
export function salinityTipList() {
    const allTheSalinityTips = useSalinityTipCollection()

    let salinityTipListHTMLString = ""
    for (const currentSalinityTipInLoop of allTheSalinityTips) {
        salinityTipListHTMLString += salinityTip(currentSalinityTipInLoop);
    }

    tipContainer.innerHTML += `<h3>Salinity</h3><ul class = "tip-container">${salinityTipListHTMLString}</ul>`;
}