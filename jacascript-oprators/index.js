let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

let addtion = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

console.log("Addition:" , addtion);
console.log("Subtraction:" , subtraction);
console.log("multiplication:" , multiplication);
console.log("Division:" , division);
console.log("Modulus:" , modulus);

let savedEmail = "student@gmail.com";
let savedPassword = "12345" ;

let userEmail = prompt("Enter your email");
let userPassword = prompt("Enter yor password");

let loginSuccess = userEmail === savedEmail
&& userPassword === savedPassword;

console.log("login successful" , loginSuccess);

if (loginSuccess) {

    console.log("WellCome ! Login Successful");

} else {

    console.log("Invallid Email or Password");
    
    
}

let count = 0;
console.log(++count); // 1
console.log(++count); // 2
console.log(--count); // 1

let marks = prompt("Enter your marks out of 100:");

console.log("Pass:", marks >= 50);
console.log("Perfect Score:", marks == 100);

