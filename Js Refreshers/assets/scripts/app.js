// import { apiKey } from "./utils.js";

// import  apiKey  from "./utils.js"

// import { apiKey,abc } from "./utils.js";
// import { apiKey,abc as api2 } from "./utils.js";
// import *  as utils from './utils.js';

// console.log(apiKey, api2);

// console.log(utils.abc);
// console.log(utils.apiKey);


// function greetUser(userName, msg="hello"){
//     console.log(userName, msg);
// }

// greetUser("abhi", "world");


// function greetUser(userName, msg="hello"){
//     console.log(userName, msg);
// }

// const funuser= greetUser("abhi", "world");
// funuser();

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);


const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);




























