/* 
Types of Data types
1- Primitive  2- Non-primitive
*/

// Primitive
let num = 6;  // number
let str = "Hammad"; 
let isFollow = false;
let netWorth = undefined;
let currentWorth = null;
let futureBankBalance = 1_000_000_000;
let moto = Symbol("If you're reading this Message.Thanks for visiting my github!");

// console.table([num, str, isFollow , netWorth , currentWorth , futureBankBalance , moto])


// Non-Primitive 

//  Object
const student = {  
    name : "Hammad",
    age  : 24, 
isFollow : false,
netWorth : undefined,
currentWorth : null,
futureBankBalance : 1_000_000_000,
}

// const { name, ...rest } = student;
// const updatedStudent = {
//   fullName: name,
//   ...rest
// };

// console.log(updatedStudent);


// Task try to change any value of the Object and try to change key of the Object

student["name"] = "Hammad Muneer"; // task-1

// Iteration over whole object
// for (const [key, value] of Object.entries(Student)) {
//     console.log(`${key} : ${value}`);
// }


// Iteration over keys only  - Changing name key to fullName
for (const key of Object.keys(student)) {
    if(key === "name"){
        student.fullName = student.name;
        delete student.name        
    }
}
// console.log(student);


// Changing fullName key to Name and keeping it on top of object
const {fullName , ...rest} = student;
const updatedStudent1 = {
    name : fullName,
    ...rest
} 

console.log(updatedStudent1);


