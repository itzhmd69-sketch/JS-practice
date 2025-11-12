const accountId = 143144
let accountEmail = "itzhmd69@gmail.com"
var accountPassword = "myPassword123"
accountCity = "Mailsi"



accountEmail = "hammadmuneer974@gmail.com"
accountPassword = "newPassword456"
accountCity = "Lahore"


console.table ([typeof accountId, typeof accountEmail, typeof accountPassword, typeof accountCity]);


// prefer to use const and let
// avoid using var
// avoid using global variables like accountCity
// use uppercase for constants that never change like PI = 3.14
const PI = 3.14
console.log("Value of PI:", PI);
// PI = 3.14159; // not allowed

// use descriptive names for variables
const userFirstName = "Hammad"
const userLastName = "Muneer"
console.log("User Full Name:", userFirstName, userLastName);

// use camelCase for variable names
let userAge = 25
console.log("User Age:", userAge);
userAge += 1

console.log("User New Age:", userAge);

// avoid using reserved keywords as variable names
// let let = 5; // not allowed
let score = 100
console.log("Score:", score);
score += 50
console.log("New Score:", score);

// declare multiple variables in one line
let x = 10, y = 20, z = 30
console.log("Values:", x, y, z);

// use template literals for string interpolation
const greeting = `Hello, ${userFirstName} ${userLastName}! You are ${userAge} years old.`
console.log(greeting);

// use const for arrays and objects that won't be reassigned
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log("Numbers Array:", numbers);

const user = { name: "Hammad", age: 25 }
user.age = 26
console.log("User Object:", user);

// avoid using magic numbers, use named constants instead
const MAX_USERS = 100
let currentUsers = 50
if (currentUsers < MAX_USERS) {
    console.log("You can add more users.");
} else {
    console.log("User limit reached.");
}

// use meaningful variable names for booleans
let isLoggedIn = false
console.log("Is Logged In:", isLoggedIn);
isLoggedIn = true
console.log("Is Logged In:", isLoggedIn);

// use underscores for large numbers for better readability
const population = 1_000_000
console.log("Population:", population);

// use const for function expressions and arrow functions
const add = (a, b) => a + b
console.log("Sum:", add(5, 10));

const multiply = function(a, b) {
    return a * b
}
console.log("Product:", multiply(5, 10));

// avoid using global variables by encapsulating code in functions or blocks
{
    let localVariable = "I am local"
    console.log(localVariable);
}
// console.log(localVariable); // not allowed

// use descriptive names for function parameters
const calculateArea = (length, width) => length * width
console.log("Area:", calculateArea(5, 10));

// use const for values that should not change
const DAYS_IN_WEEK = 7
console.log("Days in a Week:", DAYS_IN_WEEK);

// avoid using single-letter variable names except for loop counters
for (let i = 0; i < 5; i++) {
    console.log("Loop Counter:", i);
}

// use const for values that are not reassigned
const gravity = 9.81
console.log("Gravity:", gravity);

// avoid using global variables by using modules or closures
(() => {
    const privateVariable = "I      am private"
    console.log(privateVariable);
})();
// console.log(privateVariable); // not allowed

// use descriptive names for boolean variables
let hasAccess = true
console.log("Has Access:", hasAccess);
hasAccess = false
console.log("Has Access:", hasAccess);

// use const for values that should not change
const SPEED_OF_LIGHT = 299_792_458 // in meters per second
console.log("Speed of Light:", SPEED_OF_LIGHT);
// SPEED_OF_LIGHT = 300_000_000; // not allowed

// avoid using magic strings, use named constants instead
const STATUS_ACTIVE = "active"
const STATUS_INACTIVE = "inactive"
let userStatus = STATUS_ACTIVE
console.log("User Status:", userStatus);
userStatus = STATUS_INACTIVE
console.log("User Status:", userStatus);
