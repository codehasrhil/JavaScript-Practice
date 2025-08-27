// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elemnts


let number = "harshil"  // its like taking entire  sting and then dived into multiple string taking one char
let num2 = [...number]

console.log(num2)


let fruits = ["apple", "banana" , "orange"];
let vegetables = ["celery" , "pateto"]

let newFruits = [...fruits , ...vegetables]  // use to join two array creat one var and then 

console.log(newFruits)