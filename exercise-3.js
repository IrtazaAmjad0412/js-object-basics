// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace(object) {
  for (const pair of Object.entries(object)) {
    console.log(pair);
  }
}

printPizzaPlace(dominos);

function toppingsPriceRange(object) {
  const array = [];
  for (const values of Object.values(object.pizzaToppings)) {
    array.push(values);
  }
  const maxPrice = Math.max(...array);
  const minPrice = Math.min(...array);
  const result = [maxPrice, minPrice];
  return result;
}

console.log(toppingsPriceRange(dominos));

function calculateAverageRating(object) {
  const array = [];
  for (const values of Object.values(object.starReviews)) {
    array.push(values);
  }
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum = totalSum + array[i];
  }
  let arrayLength = 0;
  arrayLength = arrayLength + array.length;
  return Math.round((totalSum / arrayLength) * 10) / 10;
}

console.log(calculateAverageRating(dominos));
