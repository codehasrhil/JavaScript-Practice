//Promise = An Object that manages asynchronous operations. wrap a promise object around {asnchronous code}

 // promise object : promise to return a value
 
let promise = new Promise(function(resolve,Reject){
  
    resolve(56)
});

console.log(promise)

console.log("hello one")
setTimeout(() =>{
  console.log("hello again");
},2000)
console.log("hello my name is harshil")
