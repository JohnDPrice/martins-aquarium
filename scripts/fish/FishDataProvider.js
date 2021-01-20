const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        locationHarvested: "Gulf of Mexico",
        length: 3,
        typeOfFish: "Coy"
    },
    {
        name: "Tony",
        food: "tacos",
        locationHarvested: "Ohio River",
        length: 6,
        typeOfFish: "Sun Fish"
    },
    {
        name: "Bob",
        food: "tomatos",
        locationHarvested: "Coal River",
        length: 15,
        typeOfFish: "Bass"
    },
    {
        name: "Bill",
        food: "Seals",
        locationHarvested: "Atlantic",
        length: 75,
        typeOfFish: "Shark"
    },
    {
        name: "Mike Tyson",
        food: "Ears",
        locationHarvested: "Pool",
        length: 77,
        typeOfFish: "Barracuda"
    },
    {
        name: "Charley Crockett",
        food: "Salad",
        locationHarvested: "Jamestown Ferry",
        length: 68,
        typeOfFish: "Tarpon"
    },
]

// This function allows us to use our fishCollection array of objects in other files
export function useFish() {
    return fishCollection.slice()
}

// Returns an array of fish that are multiples of 3 inches in length
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            console.log(fish)
            holyFish.push(fish)

        }
    }

    return holyFish
}



// Returns an array of fish that are multiples of 5 inches in length
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const mostSoldierFish = []

    for (const armyFish of fishCollection) {
        if (armyFish.length % 5 === 0) {
            console.log(armyFish)
            mostSoldierFish.push(armyFish)
        }
    }       
    return mostSoldierFish 
}



// Returns an array of all the other fish that are not multiple of 5 or 3
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const mostNormalFish = []

    for (const normalFish of fishCollection) {
        if (normalFish.length % 3 != 0 && normalFish.length % 5 != 0) {
            console.log(normalFish)
            mostNormalFish.push(normalFish)
        }
    }
    return mostNormalFish
}