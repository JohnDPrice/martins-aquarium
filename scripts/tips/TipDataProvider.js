// Temperature tips
const temperatureTipCollection = [
  {
    tip: "Very hot",
  },
  {
    tip: "Basically boiling",
  },
  {
    tip: "Lava"
  }
]

// Salinity tips
const salinityTipCollection = [
  {
    tip: "Keep it salty",
  },
  {
    tip: "Just dump in some salt",
  },
  {
    tip: "Ionized",
  }
]


// Exporting to TipList.js
export function useTemperatureTipCollection() {
  return temperatureTipCollection.slice()
}

// Exporting to TipList.js
export function useSalinityTipCollection() {
  return salinityTipCollection.slice()
}
