
// block scop : let and const is block scop it like the varible declear inside the { } then it can not be accesb by outside

let a  = 8;    // hear i am able to use but now
{
    let b = 10   // now i am not able to use  becuase i am calling it outsid end its block scop so i cant use it
    console.log(b)// if i call inside it will work
} 

// console.log(b)


// function scop : same goes to fucntions scop it work like block scop the diffrenc is in block scop var will work and abl;e to call from outside but not in fucntion

function sum(){
    var num = 5;
    console.log(num)
}

// console.log(num)

sum();

// global scop : to make globle scop you need to amek it outside the fucntiona and block of code then you call it froma ny where like from block of code or from function also
