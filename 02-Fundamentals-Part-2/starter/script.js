//@ts-check
'use strict';


let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);


//Lecture 38
//// Coding Challenge #1

const calcAvg = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

const avgDolphins = calcAvg(88, 54, 41);
const avgKoalas = calcAvg(23, 34, 27);


function checkWinner(teamOne, teamTwo) {
    if (teamOne >= teamTwo * 2) {
        console.log(`Dolphins win (${teamOne} vs ${teamTwo})`);
    } else if (teamTwo >= teamOne * 2) {
        console.log(`Koalas win (${teamTwo} vs ${teamOne})`);
    } else {
        console.log(`Nobody won`);
    }
}
//console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);


//////////////////////Lecture 41 
//Coding challange #2

//arrow function example in use
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.2;
//     }
//     return tip;
// }

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totalValue = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totalValue);


///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']

];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 28,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // //can add function to the object
    // calcBirth: function () {
    //     return 2020 - this.age

    //can store result of the function inside of the object
    calcBirth: function () {
        // @ts-ignore
        this.birthYear = 2020 - this.age;
        return this.birthYear;
    },

    getSummary: function () {
        return `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license. Was born in ${jonas.calcBirth()}.`
    }
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

console.log(jonas.calcBirth());

// const calcBirth = age => 2020 - age;

// const myYearOfBirth = calcBirth(jonas.age);
// console.log(myYearOfBirth);

console.log(jonas.birthYear);

//Challange
console.log(jonas.getSummary());


//Lecture 45
//Coding challange #3

const personOne = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {

        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const personTwo = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {

        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
personOne.calcBMI();
personTwo.calcBMI();

console.log(`${personOne.fullName}'s BMI (${personOne.BMI}) is ${personOne.BMI > personTwo.BMI ? 'higher' : 'lower'} than ${personTwo.fullName}'s ${personTwo.BMI}`)


//Lecture 46
////////////////Loops////////////////
/*1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
*/
const billsOne = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsOne = [];
const totalsOne = [];



for (let i = 0; i < billsOne.length; i++) {
    tipsOne.push(calcTip(billsOne[i]));
    totalsOne.push(billsOne[i] + tipsOne[i])
}
console.log(tipsOne);
console.log(totalsOne);

const calcAvarage = function (arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
    return sum / arr.length;
}
calcAvarage(totalsOne);
calcAvarage(tipsOne);

/*HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀*/

