// destructuring :  extract value from arrays and objects,
//                  then assign them to variables in convenient way
//                  [] = to perform array destructring
//                  {} = to perform object destuctring


// Ex 1   : Swap the value of two variables

let a = 1;
let b = 2;

[a,b] = [b,a];


console.log(a,b);

//Ex 2 : swap 2 elements in an array

const colors = ["red","green","blue","black","white"];

[colors[0] , colors[4]] = [colors[4] , colors[0]];

let  [first , second , third] = colors; // assiagn them to the variable

console.log(first);

// Ex 3  extarct value from object


const person = {
    name:"harshil",
    age:18,
    job:"berojgar"
}


const {name, age , job} = person;

console.log(name);