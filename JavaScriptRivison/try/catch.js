

// error = an object that is created to represnt a problem

//try{} = Enclose code that might potentially cause am error

// catch{} = catch and handle any throw errors from try{}

// finally {} = (optional) Always executes . Used mosrtly for clean up

try{
    console.log(x)
} catch(error){
    console.error(error);
}
finally{
   console.log("this always exucte")  
}

console.log("You have reached the end");