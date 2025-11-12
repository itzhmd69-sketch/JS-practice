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

// 1-  Object

/* Methods of Objects

Object.keys() , Object.values() , Object.entries() , Object.assign() , Object.hasOwnProperty() , Object.freeze() , Object.seal() , Object.create() , Object.defineProperty() , Object.defineProperties() , Object.getOwnPropertyNames() , Object.getOwnPropertySymbols() , Object.getPrototypeOf() , Object.setPrototypeOf() , Object.is() , Object.isExtensible() , Object.isFrozen() , Object.isSealed() , Object.preventExtensions()
*/

/* Properties of Objects,

constructor, __proto__, prototype, __defineGetter__, __defineSetter__, __lookupGetter__, __lookupSetter__, hasOwnProperty, isPrototypeOf, propertyIsEnumerable, toString, valueOf
*/

/*

1. **Create dynamically**  
   Build an object by looping through arrays and assigning keys/values.

2. **Rename and reorder keys**  
   Replace a key (e.g. `name` → `fullName`) and move it to the top using destructuring.

3. **Iterate over content**  
   Use `Object.keys`, `Object.values`, and `Object.entries` to loop through properties.

4. **Check, delete, and protect**  
   Use `hasOwnProperty`, `delete`, `Object.freeze`, and `Object.seal` to manage and secure objects.

5. **Transform and define**  
   Convert between objects and arrays with `Object.fromEntries`, clone with `Object.assign`, and define custom properties with `Object.defineProperty`.
*/

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
// console.log(updatedStudent1);


// 2- Arrays

/*
push(), pop() , shift() , unshift() , concat() , slice() , splice() , map() , filter() , reduce() , forEach() , find() , findIndex() , includes() , indexOf() , lastIndexOf() , sort() , reverse() , flat() , join() , every() , some
*/

const cities = ["Mailsi","Lahore","Islamabad","Vehari","Bahawalpur", "Multan", "Rawalpindi"]
const famousFood = ["Dahi-Bhallay", "Chanay" , "andayWalaBurger","Chawal-Chanay", "AndaShami", "Mango", "bhindi" , ]

/* 1. **Manipulate structure**  
   Add, remove, reorder items using `push`, `pop`, `shift`, `unshift`, `sort`, `reverse`, and check `length`. */

   cities.pop()
   cities.push('Fasilabad');
   cities.unshift('Karachi')
   cities.shift()
   cities.sort()
   cities.reverse()
//    console.log(cities.length);
   
/* 2. **Transform and filter**  
   Use `map`, `filter`, `forEach`, `some`, `every` to modify and validate array content.
*/
    const upperCaseFood = [];
// 1-
    // famousFood.map((e)=>{
    //     upperCaseFood.push(e.toLocaleUpperCase())
    // })
    // extract only food item that has Channay

// 2-
    // famousFood.filter((e, idx , arr)=>{
    //     if(e.includes('Chanay')){
    //         return console.log(`${arr[idx]}`);
    //     }
    // })

// 3-
    // cities.sort()
    //   cities.forEach((elem , idx , arr)=>{
    //     console.log(`${idx} : ${elem}`);
    //   })

// 4- 
    //  famousFood.some((elem , idx , arr)=>{
    //     if(elem.includes('Anda')){
    //         return console.log(`${true} at index of ${idx}`);
    //     }
    //  })
    
// 5- pushing 3 in food and checking if all food are string or not
// famousFood.push(3)
//     console.log(typeof famousFood[famousFood.length-1])

//     const allAreStrings = famousFood.every(food => typeof food === "string");
// console.log(allAreStrings); // false

// 6- count total number of characters in all foodNames
// famousFood.pop()
//     let reducedVal = famousFood.reduce((prev,curr)=>{
//         let sum = prev + curr.length;
//         return sum
//     },0)
  
//     console.log(reducedVal);
    
// 7- Find  use this method to find cities start with M
    // cities.find((str , idx, obj)=>{
    //     if(str.startsWith('M')){
    //         return console.log(`City that startsWith M is : ${obj[idx]} at index of ${idx}`);
    //     }
    // })

// 8- sort cities  A - Z and reversed.
    // cities.sort()
    // console.log(cities);
    // cities.reverse();
    // console.log(cities);

// 9- Create a comma seperated string of foodItems
    // const reducedArray = famousFood.reduce((prev, curr)=>{
    //     let reduced = `${prev} , ${curr}`;
    //     return reduced;
    // }," ")
    // console.log(reducedArray);
    
// 10- famous food with more then 10 char

//  let reduced = famousFood.find((str,idx, arr)=>{
//     let maxVal=0;;
//     for(let i=0; i<arr.length; i++){
//         if(arr[idx].length > maxVal){
//             maxVal = arr[idx].length;
//         }
//     }
// })

// console.log(reduced);

    