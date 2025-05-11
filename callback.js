// callback = function that is passed as an argument to another function.

// hello(wait);


// function hello(callback){
//     console.log("wait");
//     callback();
// }

// function wait(){
//     console.log("wait")
// }

// function goodby(){
//     console.log("good by");
// }

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}