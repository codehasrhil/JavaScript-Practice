//call stack : where javascrit track the exucation of a function and it follow sa the lifo , menig that last fucntion wee right we get the first output of that function 

function greet(){
    console.log("hello")
    sayhello();
}


function sayhello(){
    console.log("i am harshil Rana");
    hii()
}

function hii(){
     console.log("i am looking for intership")
}

greet()