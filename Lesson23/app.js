//Default Params
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 4;
}


function greet(person, msg = "Hello", punc = '!') {
    console.log(`${msg}, ${person}${punc}`);
}


//Spread
const nums = [1,2,3,4,5,6,7,56];
Math.max(nums); //NaN
Math.max(...nums); //53456


const cats = ['Blue', 'Max'];
const dogs = ['Bella', 'Bruno'];
const allPets = [...cats, ...dogs];


const feline = { legs: 4, family: 'Unknown' };
const canine = { isFurry: true, family: 'Caninae' };
const catDog = { ...feline, ...canine };


const dataFromForm = {
    email: 'gabi@gmail.com',
    password: '1234',
    username: 'gabi'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }


//Rest
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`Thanks to everyone else: ${everyoneElse}`)
}


//Destructuring
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'ana@gmail.com',
    password: 'ana1234',
    firstName: 'Ana',
    lastName: 'Maria',
    born: 1920,
    died: 2023,
}
const user2 = {
    email: 'gabi@gmail.com',
    firstName: 'S',
    lastName: 'Gabi',
    born: 2006,
}
const { email, firstName, lastName} = user;

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}


const movies = [
    {
        title: 'SpiderMan',
        score: 88,
        year : 2000
    },
    {
        title: 'SpiderMan 2',
        score: 66,
        year : 2006
    },
    {
        title: 'SpiderMan 3',
        score: 98,
        year : 2009
    },
    {
        title: 'SpiderMan 4',
        score: 78,
        year : 2016
    },
    {
        title: 'IronMan',
        score: 80,
        year : 2016
    }
]


movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`;
})