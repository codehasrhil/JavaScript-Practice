// 1. functions : functions is a block of code that is reuseble

let a = 1;
let b = 2
let c = 5;


function sum(x,y){     // this is basic syntax of function in (x,y) we are having parameter  we need to store rertun in varible to console or direct sue console.log
  return 1 + (x+y)/2 
}


console.log(sum(a,b))


// 2. arrow function:  This is arrow function


 const NumSum = (a,b) =>{
    console.log("sum is done")
    return a+b;
    
 }


 console.log(NumSum(a,b));


 // 3. callback function  : a function that we pass to another function as an argument taht calld callback


function greet(name,callback){
  console.log(name);
  callback(name);
}

function sayby(name){
    console.log(name,",GoodBye")
}


greet("Harshil",sayby);

