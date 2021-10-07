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
    edible: false,
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
    edible: false,
    size: "Extra Large"
  }
]

const highYieldVegetables = (minimumYield) => {
  // We need a new array to store the found items
  const foundVegetables = []


  // Iterate plantsArray
  for (const plantObject of plantsArray) {
    // Use an if statement to determine if quantity property value is equal or greater than minimumYield
    if (plantObject.quantity >= minimumYield) {
      // If the condition is true, add to our new array
      foundVegetables.push(plantObject)
    }
  }

  // return the new array
  return foundVegetables
}

const highYieldArray = highYieldVegetables(30)


for (const plantObject of highYieldArray) {
  console.log(`${plantObject.name} is a high yield vegetable`)
}








// Add a new plant object to the plant array
const addVegetableToGarden = (plantObject) => {

  const lastIndex = plantsArray.length - 1         // Get the position of the last item
  const currentLastPlant = plantsArray[lastIndex]  // Get the last item
  const maxId = currentLastPlant.id                // Get the id value of the last item
  const newId = maxId + 1                          // Add 1 to the value from line above

  plantObject.id = newId
  plantsArray.push(plantObject)
}


addVegetableToGarden({
  name: "Cumberland River Romanesco",
  sunnyLocation: true,
  color: "Toxic Green",
  quantity: 23,
  growingSeason: "Summer",
  edible: true,
  size: "Medium"
})

const shallot = {
  name: "Shelbyville Shallots",
  sunnyLocation: false,
  color: "Mild Purple",
  quantity: 7,
  growingSeason: "Spring",
  edible: true,
  size: "Small"
}

addVegetableToGarden(shallot)










const edibleVegetables = () => {
  //
}
