setTimeout(() => {
    console.log("i am Harshil");
}, 3000);

console.log("i want intership")



// Event loop : The Event Loop is the system that manages the execution of synchronous and 
//asynchronous code in JavaScript by coordinating the call stack, microtask queue, and macrotask queue.


// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");
// Explain Output step by step:

// "Start" → runs immediately (synchronous).

// "End" → runs immediately (synchronous).

// Promise callback goes into microtask queue → executed first.

// setTimeout callback goes into macrotask queue → executed later.

// 👉 Final Output:

// sql
// Copy code
// Start
// End
// Promise
// Timeout