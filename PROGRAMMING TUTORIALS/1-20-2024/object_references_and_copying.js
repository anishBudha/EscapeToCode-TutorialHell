// copying

let message = "This is Anish Budha";
let copy_message = message;
console.log(copy_message);

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

// user [an object] --reference--> name [property]
let user = {
  first_name: "Anish",
};
let copy_user = user; // copies the reference
// hence two variables; each storing a reference to the same object

// user-- > first_name < --copy_user

copy_user.first_name = "Ram";
console.log(user.first_name); // Ram

// cloning, copying on the primitive level, completely different objects not a reference

let user1 = {
  first_name: "Anish",
  last_name: "Budha",
};

let clone_user1 = {};

for (key in user1) clone_user1[key] = user1[key];

console.log(clone_user1.first_name);
clone_user1.first_name = "changed";
console.log(clone_user1.first_name);
console.log(user1.first_name);

let adate = new Date("Jan 20, 2024 10:30:00").getDate();
console.log(adate);
