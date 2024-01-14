//forEach
const numbers = [1, 2,3, 4, 5,6,7,8, 9,10,75,100,69,86,99];

numbers.forEach(function (e) {
    if (e % 2 === 0) {
        console.log(e)
    }
})

const movies = [
    {
        title: 'SpiderMan',
        score: 88,
        year : 2000
    },
    {
        title: 'IronMan',
        score: 80,
        year : 2016
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})


//map
const doubles = numbers.map(function (num) {
    return num * 2;
})

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

//arrow functions

const add = (a, b) => a + b;

const square = (num) => {
    return num * num;
}

const rollDie = () => {
    return Math.floor(Math.random() * 10) + 1;
}


const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

//setTimeout

console.log("Hello...");

setTimeout(()=> {
    console.log("Hello");
},4000)

//setInterval

const id = setInterval(()=>{
    console.log(Math.random())
},2000);

//clearInterval(id);


//filter
numbers.filter(n=>{
    return n<10;
})

const badMovies = movies.filter(m => m.score < 70);

const recentMovies = movies.filter(m => m.year > 2000);

movies.filter(m => m.score > 80).map(m => m.title);


//some and every
numbers.every(score => score>= 75);//false

numbers.some(score => score >= 75);//true


//reduce
const prices = [5.99, 2.75, 20.99, 19.09, 2.20];

const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 100) //120

//ArrowFunctionsThis
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}