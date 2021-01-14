// Hello, World Lightining Exercise
console.log("Welcome to the main module")

let greeting = document.querySelector("#hello-container");

greeting.innerHTML = "Hello, world!";



// Chores Lightning Exercise
let choresArray = ["laundry", "dishes", "vacuum"]
let list = document.querySelector("#chores-container")

choresArray.forEach(function(choresArray) {
    let li = document.createElement("li");
    li.textContent = choresArray;
    list.appendChild(li);
});


// Movie Poster

let movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }

let title = document.querySelector("#title");
let genre = document.querySelector("#genre");
let releaseDate = document.querySelector("#release-date");

title.innerHTML = movieObject.title;
genre.innerHTML = movieObject.genre;
releaseDate.innerHTML = movieObject.releaseDate



// Downtown Restaurants

let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

let restaurantsList = document.querySelector("#restaurants-list")

function listRestaurants(array) {
    for(let i = 0; i < downtownRestaurants.length; i++) {
        restaurantsList.innerHTML += `<li>${downtownRestaurants[i]}</li>`;
    }
}
listRestaurants(downtownRestaurants);

// downtownRestaurants.forEach(function(downtownRestaurants) {
//     let li = document.createElement("li");
//     li.textContent = downtownRestaurants;
//     list.appendChild(li);
// });


// Sandwich Toppings

let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]
let sandwichList = document.querySelector("#sandwich-container")


function listSandwiches(array) {
    for(let i = 0; i < sandwichToppings.length; i++) {
        sandwichList.innerHTML += `<li>${sandwichToppings[i]}</li>`;
    }
};
listSandwiches(sandwichToppings);


// Movie Schedule

let movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: ""
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png"
    }
  ];

  let movieList = document.querySelector("#movie-schedule")

  function scheduler(array) {
      let htmlBuilder = ""
      for(let i = 0; i < movieSchedule.length; i++) {
        if(movieSchedule[i].currentlyPlaying === true && movieSchedule[i].rating === "G"){
         htmlBuilder += `<div class="movie-display now-playing-g"><h1 class="movie-title">${movieSchedule[i].title}</h1>
        <h2 class="movie-rating">${movieSchedule[i].rating}</h2>
        <h3>${movieSchedule[i].currentlyPlaying}</h3>
        <img src =${movieSchedule[i].poster}><img></div>`; 
        } else if (movieSchedule[i].rating === "PG") {
            htmlBuilder += `<div class="movie-display now-playing-pg"><h1 class="movie-title">${movieSchedule[i].title}</h1>
        <h2 class="movie-rating">${movieSchedule[i].rating}</h2>
        <h3>${movieSchedule[i].currentlyPlaying}</h3>
        <img src =${movieSchedule[i].poster}><img></div>`;
        } else if (movieSchedule[i].rating === "PG-13") {
            htmlBuilder += `<div class="movie-display now-playing-pg-13"><h1 class="movie-title">${movieSchedule[i].title}</h1>
        <h2 class="movie-rating">${movieSchedule[i].rating}</h2>
        <h3>${movieSchedule[i].currentlyPlaying}</h3>
        <img src =${movieSchedule[i].poster}><img></div>`;
        } else if (movieSchedule[i].rating === "R") {
            htmlBuilder += `<div class="movie-display now-playing-r"><h1 class="movie-title">${movieSchedule[i].title}</h1>
        <h2 class="movie-rating">${movieSchedule[i].rating}</h2>
        <h3>${movieSchedule[i].currentlyPlaying}</h3>
        <img src =${movieSchedule[i].poster}><img></div>`;
        } 
      } 
        movieList.innerHTML = htmlBuilder
  }

  scheduler(movieSchedule);



  // Cohort Website 

// let cohorOne = document.querySelector("#cohort-one-container")
// let cohorTwo = document.querySelector("#cohort-two-container")
// let cohorThree = document.querySelector("#cohort-three-container")
// let htmlBuilder = ""

//   let cohort1 = {
//     name: "Cohort One",
//     startDate: "January 15, 2018",
//     endDate: "July 12, 2019",
//     instructors: ["Kim", "Josh", "Jordan"],
//     techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
//   }
  
//   let cohort2 = {
//    name: "Cohort Two",
//    startDate: "August 15, 2019",
//    endDate: "Feb 10, 2020",
//    instructors: ["Tommy", "Jordan"],
//    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
//   }
  
//   let cohort3 = {
//    name: "Cohort Three",
//    startDate: "April 6, 2020",
//    endDate: "August 20, 2020",
//    instructors: ["Tommy", "Jordan"],
//    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
//   }
  
//   function buildHtmlString(cohortObjectParameter){
//     for (let i = 0; i < )
//   }
  
//   function printHtmlString(htmlStringParameter, elementIdParameter){
//     // YOUR CODE GOES HERE
//   }
