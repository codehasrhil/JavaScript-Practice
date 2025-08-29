

// callBack HEll = situation in js where callbacks are nested within other callbackes to the degree where the code is difficult to read.
//Promise = An Object that manages asynchronous operations. wrap a promise object around {asnchronous code}  romise to return a value

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalkd = true;

            if (dogwalkd) {
                resolve("You Walk The dog");  // this is hoe we sue resolve
            }
            else {
                reject("You didn't walk the dog") // THis is how we use rejct
            }


        }, 2000);
    })
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");
        }, 2000)
    })
}


function task3() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const Takeouttras = false;

            if (Takeouttras) {
                resolve("You take out the trash");
            } else {
                reject("You didn't take out the trash");
            }

        }, 1000)
    })
}

function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You finished all the chores!");
        }, 1000);
    })
}


// This is the exmple of callback hell  now we are gone use Promis to solve callback hell isuue

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                  console.log("now you are free");
//             })
//         })
//     })
// });

// This is promise


// task1().then(value => { console.log(value); return task2() })
//     .then(value => { console.log(value); return task3() })
//     .then(value => { console.log(value); return task4() })
//     .then(value => { console.log(value); console.log("now you are free") })
//     .catch(error => console.error(error))
// // task2().then(value => console.log(value)); // if i worte like that it will run imdittaly not wait for first to get complete and then run
// console.log(task1())


async function dotask() {


    try {
        const task = await task1();
        console.log(task);

        const kitchentask = await task2();
        console.log(kitchentask);

        const trashout = await task3();
        console.log(trashout)

        const chors = await task4();
        console.log(chors)
    } catch (error) {
        console.error(error);
    }


}

dotask()