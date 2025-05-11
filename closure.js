//closure = A function defined inside of another function, the inner function has access to the variables and scop of the outer function.
//          allow for private variables and state maintenance used frequently in js frameworks.


function outer() {

    let msg = "hello";
    function inner() {
        console.log(msg)
    }
    inner();

}


outer();

function creatcounter() {

    let count = 0;

    function incremnt() {
        count++;
        console.log(`count increased to ${count}`);
    }

    function getcount() {
        return count;
    }

    return { incremnt, getcount };
}

let counter = creatcounter()
counter.incremnt();
counter.incremnt();
counter.incremnt();
counter.incremnt();

console.log(`the counter is ${counter.getcount()}`);


function creategame() {
    let score = 0;

    function increasesScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreasescore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getscore() {
        return score;
    }

    return{getscore,decreasescore,increasesScore}

}

const game = creategame();

game.increasesScore(5);
game.increasesScore(6);
game.decreasescore(3)

console.log(`This is total score ${game.getscore()}pts`);


