
let total = 0;
function collecteggs() {
    total = 6;
}
console.log(total);
collectEggs();
console.log(total);

function bank() {
    const heroes = ['Spiderman', 'Wolverine', 'Iron Man', 'Batman']
    function help() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    help();
}

const add = function (x, y) {
    return x + y;
}


function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 10) + 1
    console.log(roll)
}

callTwice(rollDie)

function makeFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congrats!")
            console.log("You win!!")
        }
    } else {
        return function () {
            alert("You have been injaction of virus!")
        }
    }
}


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}


const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },

    cube(num) {
        return num ** 3;
    }
}

const dog = {

    name: 'Bela',
    color: 'grey',
    breed: 'unknown',

    bark() {
        console.log("THIS IS:", this)
        console.log(`${this.name}`);
    }

}

const barks2 = dog.bark;

// try {
//     hello.toUpperCase();
// } catch {
//     console.log("Error!!!!")
// }
// hello.toUpperCase();

// console.log("Adsf!")

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please asdf!")
    }
}