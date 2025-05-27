
// map function = accepts  a callback and applies that function to each element of a artray , then return a new array

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

const dates = ["2024-1-10","2025-2-20","2026-3-30"];

function formateDates(element){

}


console.log(squares);
console.log(cubes)

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

const students = ["spongebob","Patrick","squiward","sandy"];
const studentUpeercase = students.map(uppercase)

console.log(studentUpeercase)

function uppercase(element){
    return element.toUpperCase();
}


// filter  = 