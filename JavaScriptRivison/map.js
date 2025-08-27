

// // 1.  map : creats a new array by performing some operation on each array element


const arr = [34,34,45]

let a = arr.map((value , index) => {
    console.log(value , index)
    return value + 1 // so we are adding 1 in the current array and creating new one
})

console.log(a)



// // 2. Filter : fillter is use to filter the vaule from the array and creat a new array taking that fillter array

let arr2 = [48,345,56,0,1,3,45,6];

let a2 = arr2.filter((a)=>{
    return a<50;
})

console.log(a2 , arr2) 


//3. reduce : reduce an a array to a single value it return value


let arr3 = [1,2,3,4,5,2,1];


let a3 =arr3.reduce((x,y) => {
  return  x+y;
})

console.log(a3);


// 4. forEach : method used to iterate over the elements of an array andd apply a specified function to each element

let a4 = [1,2,3,4,5];


a4.forEach(triple)
a4.forEach(display)




function double(e,i,a){
  a[i] = e*2;
}

function triple(e,i,a){
    a[i] = e*3;
}


function display(e){
    console.log(e)
}

