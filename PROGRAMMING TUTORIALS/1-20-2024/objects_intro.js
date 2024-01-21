// objects
// two syntax
// - object constructor syntax
let user = new Object();
// - object literal syntax
let user1 = {};

let user2 = {
  first_name: "Anish",
  last_name: "Budha",
  "is good programmer": false, // multiword property
};

console.log(user2.first_name + " " + user2.last_name);

// adding additional properties to the object
user2.age = 21;

console.log(user2.age);

// deleting the properties
delete user2.last_name;

console.log(user2.last_name); // undefined

console.log(user2["is good programmer"]); // should be inside square brackets and inside quotes

let birds = "like birds";
user2[birds] = true;

console.log(user2[birds]); // true
console.log(user2["like birds"]); //true

// let fruit = prompt("Which fruit you would like to buy", "apple"); // apple is a placeholder
// let bag = {
//   [fruit]: 5,
// };
// alert(bag.apple);

// "in" keyword

console.log("last_name" in user2); // return boolean value base on its existence

// for in loop

for (key in user2) {
  console.log(key);
  console.log(user2[key]);
}
