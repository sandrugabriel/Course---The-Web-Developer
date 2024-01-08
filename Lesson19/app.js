const subreddits = ['game', 'lol', 'dogs'];

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

// const seatingChart = [
//     ['Ana', 'Eric', 'Gabi'],
//     ['Dan', 'Maria', 'Antonio', 'Kevin'],
//     ['Ion', 'Ioana', 'Jack', 'Erica']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char)
// }

let num = 0;
while(num<10){
    console.log(num);
    num++;
}

let maxi = parseInt(prompt("Enter the maxi number!"));
while (!maxi) {
    maxi = parseInt(prompt("Enter a valid number!"));
}

const targ = Math.floor(Math.random() * maxi) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let ct = 1;

while (parseInt(guess) !== targ) {
    if (guess === 'q') break;
    ct++;
    if (guess > targ) {
        guess = prompt("Too high!\n Enter a new guess:");
    } else {
        guess = prompt("Too low!\n Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("OK\n YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it!\n It took you ${ct} guesses`)
}