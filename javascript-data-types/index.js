//let myname = "Hunain";
//let myage = 22;
//let IsOnline = false;
//let city;
//let bike = null;
//let bigNumber = 1234567890123456789012345678901234567890n;
//let id1 = Symbol("id")
//let id2 = Symbol("id")

//console.log(typeof name);

//let num1 = 10;
//let num2 = 20;

// console.log(num1);
// console.log(num2);


let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let isStudent = prompt("Are you a student? (true/false)");
let favoriteNumber = prompt("Enter your favorite number:");
let nickname = prompt("Enter your nickname:");


name = String(name);
age = Number(age);
isStudent = Boolean(isStudent);
favoriteNumber = Number(favoriteNumber);
nickname = String(nickname);



console.log("Name:", name, "-", typeof name);
console.log("Age:", age, "-", typeof age);
console.log("Is Student:", isStudent, "-", typeof isStudent);
console.log("Favorite Number:", favoriteNumber, "-", typeof favoriteNumber);
console.log("Nickname:", nickname, "-", typeof nickname);


