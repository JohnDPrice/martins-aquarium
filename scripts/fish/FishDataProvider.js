const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        locationHarvested: "Gulf of Mexico",
        length: "3 inches",
        typeOfFish: "Coy"
    },
    {
        name: "Tony",
        food: "tacos",
        locationHarvested: "Ohio River",
        length: "6 inches",
        typeOfFish: "Sun Fish"
    },
    {
        name: "Bob",
        food: "tomatos",
        locationHarvested: "Coal River",
        length: "1 foot 3 inches",
        typeOfFish: "Bass"
    },
    {
        name: "Bill",
        food: "Seals",
        locationHarvested: "Atlantic",
        length: "6 feet",
        typeOfFish: "Shark"
    },
    {
        name: "Mike Tyson",
        food: "Ears",
        locationHarvested: "Pool",
        length: "6 foot 5 inches",
        typeOfFish: "Barracuda"
    },
    {
        name: "Charley Crockett",
        food: "Salad",
        locationHarvested: "Jamestown Ferry",
        length: "5 foot 8 inches",
        typeOfFish: "Tarpon"
    },
]

// This function allows us to use our fishCollection array of objects in other files
export function useFish() {
    return fishCollection.slice()
}