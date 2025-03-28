/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

function grabCategories(object) {
  return Object.keys(object);
}

console.log(grabCategories(papaJohns));
console.log(grabCategories(papaJohns.pizzaToppings));

function verifyValues(object, number) {
  if (Object.values(object).length === number) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyValues(papaJohns, 9));

function getToppingsInfo(object, stringKey) {
  return Object.entries(object[stringKey]);
}

console.log(getToppingsInfo(papaJohns, "pizzaToppings"));

papaJohns.printAd = function (
  topping,
  address = "555 Main Street",
  slogan = "Better Ingredients. Better Pizza. Papa John's."
) {
  return `Welcome to Papa John's! We are located at ${address}.
This week, we are having a sale on ${topping} for $${this.pizzaToppings[topping]}. 
${slogan}`;
};

console.log(papaJohns.printAd("bacon"));
console.log(papaJohns.printAd("bacon", "555 New Street", "Good Ingredients. Good Pizza."));
