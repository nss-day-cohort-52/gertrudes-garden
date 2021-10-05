



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
  }
]

// console.log(plants.size)

for (const plantObj of plantsArray) {
  console.log(plantObj.name)
}

