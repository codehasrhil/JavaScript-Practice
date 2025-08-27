 //  there are primitive data type and objects

  // 1. primitive datatype = primtvie data type is set of  basic data types

let a =  null; //  null datatype
let num = 50; // number datatype
let name = "Harshil"; // string datatype
let isTrue = true; // boolean datatype
let symbol = Symbol("I am symbol"); // symbol datatype
let g = undefined; // undefined datatype
let bigint = BigInt(743634687);


console.log(a, num, name, isTrue, symbol, g, bigint);


// 2. object: is not primitive data type; that has key-value pairs

const person = {
    name: "Harshil",
    LastName : "Rana",
    age:18,
    IsStudent: true,
    Profesion:"Berojgar"
}

person.name = "King";

console.log(person.name);
console.log(person.LastName)
console.log(person.age)
console.log(person.IsStudent)

