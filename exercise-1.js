/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const shiraziKarahiRest = {
  name: "Shirazi Karahi",
  cuisines: ["South Asian"],
  numberOfStars: 0,
  favorited: true,
};

const newObjectPropertyAddress = "address";
shiraziKarahiRest[newObjectPropertyAddress] = "183-10 Horace Harding Expressway, Queens, NY";

const newObjectPropertyZipcode = "zipcode";
shiraziKarahiRest[newObjectPropertyZipcode] = 11365;

const newObjectPropertyAcceptsReservations = "acceptsReservations";
shiraziKarahiRest[newObjectPropertyAcceptsReservations] = false;

shiraziKarahiRest.numberOfStars = 1;

shiraziKarahiRest.favorited = false;

shiraziKarahiRest.cuisines = ["South Asian", "Pakistani"];

function retrieveProperty(object, stringKey) {
  for (const key in object) {
    if (stringKey === key) {
      return object[key];
    }
  }
  return "The information you requested does not exist.";
}

console.log(retrieveProperty(shiraziKarahiRest, "cuisines"));
console.log(retrieveProperty(shiraziKarahiRest, "favorited"));
console.log(retrieveProperty(shiraziKarahiRest, "name"));
console.log(retrieveProperty(shiraziKarahiRest, "nickName"));
console.log(retrieveProperty(shiraziKarahiRest, "state"));
