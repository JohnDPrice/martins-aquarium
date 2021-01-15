export function Fish(fishObject) {
    return `
    <section class="fish-card">
    <img
      class="fish-card__image"
      src="https://static.hollywoodreporter.com/sites/default/files/2014/12/dory_a_l.jpg"
      alt="Fish"
    />
    <div class="fish-card__text">
      <p>${fishObject.name}</p>
      <p>${fishObject.typeOfFish}</p>
      <p>${fishObject.length}</p>
      <p>${fishObject.locationHarvested}</p>
      <p>${fishObject.food}</p>
    </div>
    </section>`
}