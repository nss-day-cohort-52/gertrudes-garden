



const roseyJalapeñosObj = {
  id: 1,
  name: "Rosey Jalapeños",
  sunnyLocation: true,
  color: "Red",
  quantity: 1.5,
  growingSeason: "Summer",
  edible: true,
  size: "Large"
}

const tennesseeTurnipGreensObj = {
  id: 2,
  name: "Tennessee Turnip Greens",
  sunnyLocation: false,
  color: "Purple",
  quantity: 20,
  growingSeason: "Fall",
  edible: true,
  size: "Extra Large"
}

// console.log( roseyJalapeños )
// console.log( tennesseeTurnipGreens )

const plantsArray = [
  {
    id: 1,
    name: "Rosey Jalapeños",
    sunnyLocation: true,
    color: "Red",
    quantity: 1.5,
    growingSeason: "Summer",
    edible: true,
    size: "Large"
  },
  {
    id: 2,
    name: "Tennessee Turnip Greens",
    sunnyLocation: false,
    color: "Purple",
    quantity: 20,
    growingSeason: "Fall",
    edible: true,
    size: "Extra Large"
  },
  {
    id: 3,
    name: "Brentwood Beets",
    sunnyLocation: false,
    color: "Red",
    quantity: 30,
    growingSeason: "wiNtEr",
    edible: true,
    size: "Extra Large"
  },
  {
    id: 4,
    name: "Donelson Dates",
    sunnyLocation: false,
    color: "Brown",
    quantity: 30,
    growingSeason: "winTer",
    edible: true,
    size: "Extra Small"
  },
  {
    id: 5,
    name: "Memphis Kale",
    sunnyLocation: false,
    color: "Forest Green",
    quantity: 50,
    growingSeason: "Fall",
    edible: true,
    size: "Extra Large"
  }

]

// Gasp! There has been a drought! All plant's quantity is cut in half DONE!

// for (const plantObj of plantsArray) {
//   // set quantity equal to the quantity divided by two
//   const newPlantObjQuantity = plantObj.quantity / 2
//   // The Memphis Kale is currently yielding 25 crops.
//   // String Template: Entire string
//   // Interpolation: "We are interpolating the plantObj.name into the string template"
//   console.log(`The ${plantObj.name} is currently yielding ${newPlantObjQuantity} crops!`)
// }

// See all the plants that are currently in season.

const currentSeason = "Winter"

for ( const plantObj of plantsArray ) {

  if ( currentSeason.toUpperCase() === plantObj.growingSeason.toUpperCase() ) {
    // It's time to plant the __
    console.log( `It's time to plant the ${ plantObj.name }!` )
    // console.log( plantObj.growingSeason.toUpperCase(), "Growing Season Uppercase")
  }
}
