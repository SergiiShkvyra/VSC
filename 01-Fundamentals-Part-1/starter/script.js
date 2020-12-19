//@ts-check

let js = 'amazing';
//if (js === 'amazing') alert("Javascript is FUN");

console.log(40 + 8 + 23 - 10);

let country = "Ukraine";
let continent = "Europe";
let population = 45000000;

//converting to Template string and assigning it to new variable result
let result = `${country} is located in ${continent} and the population of it is around ${population}`;

const resultTwo = country + " is in EU, and its " + population + " speaks Ukrainian."

console.log(result);
console.log(resultTwo);

//type of operator
console.log(typeof null);

let x, y;

x = y = 15 - 5;
console.log(x, y);

console.log('String with \n\
multiple \n\
lines');

//with the help of `` Template literal can do same this way
console.log(`String
multiple
lines`);

const inputYear = `1991`;
const testOne = Number(inputYear);
console.log(inputYear, testOne);
console.log(Boolean(0));


//Lecture 25 coding challange
const avgDolphins = (96 + 108 + 100) / 3;
const avgKoalas = (95 + 108 + 100) / 3;
console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`Winner is Dolphins with the avg score of ${avgDolphins}`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log(`Winner is Koalas with the avg score of ${avgKoalas}`);
} else if (avgKoalas === avgDolphins && avgDolphins >= 100
    && avgKoalas >= 100) {
    console.log(`Draw. Both teams scored ${avgDolphins}`);
} else {
    console.log(`Nobody won 😢`);
}


////////////////////////////////////
// Lecture 28
//The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


//Lecture 29 Coding challange #4

const bill = 40;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`Bill is: ${bill},
Tip is: ${tip},
Total is ${bill + tip}`);