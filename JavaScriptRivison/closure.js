//closure : A fucntion defind inside of another function , the inner function has access to the variables and scop of the outer function

 function outer(){

    let x = 10;

    function inner(){
        console.log(x);
    }

    inner()
 }

 x=20; // if i try to updatew it don't work becuse its from diffrent block of code

 outer()


// Ex : 2

let count = 0;

count = 10000;


function increment(){
    let count = 0;   // when we declear it insdie it get call every time and after incres it get destroy the varibel and when we call it agin it creta new and take value 0
    count+
    console.log(`count increased to ${count}`);
}

increment();
increment();
increment();
increment();