

// forloop : it used to reap the block of code a specifi number of times

let star = '*';

let row =3;

for(let i = 1; i<=row;i++){
    let pattern = " ";
    for(let j = 1; j<=i;j++){
        pattern += star
    }
    console.log(pattern)
}

// while loop : while loop we use condition and then run code and  last amke increment

let i = 0;

while (i<=5) {
    console.log("free time")
    i++;
}

// switch = 

let day = 5;

switch(day){
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;
    
    case 3:
        console.log("wednesday");
        break;
    
    case 4:
        console.log("thursday");
        break;

    case 5:
        console.log("friday");
        break;

    case 6:
        console.log("saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("invalid day");

}