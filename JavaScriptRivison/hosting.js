//hosting = hosting  is a default behavior where variable and function declarations are moved to the  top of their scop before the code is executed.


// Hosting in var  : so in var the declaration of varibel is hosted but not the initialization(value assigment)

console.log(a);        // so when we try to get output even before it declear we get undfined
var a = 10;           // This code will work but when we put console on upside of var  so like we try to get output even before declaration
console.log(a);

// Hosting in let and const : they are also hoisted but they remain in the temporal dead zone until the line of declaration 

// console.log(b);  // so we get the error that cannot access b before initialization
// let b = 20;


// // same happen with const

// console.log(c);
// const c = 30;


// Hosting in function : function are fully hoisted so you can invok them even befor them declrations

arr()                      // you can see it it work perfact 
function arr(){
    console.log("hello world")
}  

// but it not work with function expresion that function are stord insde the var and it goes same for the error function 
