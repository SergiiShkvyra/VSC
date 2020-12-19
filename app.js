//@ts-check

//VS Code allows you to leverage some of TypeScript's advanced type checking and error reporting functionality in regular JavaScript files. 
//This is a great way to catch common programming mistakes. 
//These type checks also enable some exciting Quick Fixes for JavaScript, including Add missing import and Add missing property.


//"use strict"; applies globally and makes you you define all the variables. Can be used inside of function only as well
//"use strict";


alert('hello world!')

let num = 1;
num = 2;

const nameConst = "SOME-NAME";
//can not reassign value to const variable below
//nameConst = "new value";

let name1 = "check";
console.log(nameConst + " adding new text");

const arr = [5, 4, 3, 2, 1];
arr.push(7);
arr.push(6);
let letters = ['d', 'a', 'b', 'c', 'e', 'g', 'f'];
console.log(arr);

const obj = {
    name: "Sergii",
    age: 15
}

console.log(obj.name + " is " + obj.age + " years old");

console.log("hello world ".concat(obj.name));

console.log(obj.name.toUpperCase());

//sorts the content of an array
arr.sort();


console.log(arr);

//prints sorted content of an array
console.log(letters.sort());

letters[8] = 12;
letters[9] = 'Sergii'
console.log(letters);

arr[4] = 6;
console.log(arr);

//regular loop from java
for(let i = 0; i < arr.length; i++){
    if(arr[i] != undefined){
        console.log(arr[i])
    }
        
}
//for OF loop through array
for(let num of letters){
    if(num != undefined){
        console.log('second way ' + num)
    }
    
}   
//for IN loop for object
for(let key in obj){
    console.log(key, obj[key])
}

//funtion

function add(first, second){

    //CAN be accessed from another function 
    isGlobal = "Global";

    //CAN'T be accessed from another function
    var notGlobal = "Not global";
    return first + second
}

function minus(){
    //accessing function from another function without VAR
    console.log(isGlobal + " can be accessed in other function");
    //accessing function from another function with VAR
    //console.log(notGlobal + " cant be accesed");
}

console.log(add(5, 5));

//arrow function
(a, b) => a + b

console.log(arr.map((a, b) => a + b))

//String "" '' test
let name3;
name3 = 'Test of double "single" string inside the same text';
console.log(name3)

console.log(minus())


//Global vs non global
var outerWear = "T-shirt";
console.log(outerWear + " from outside");

function myOutfit(){
   

    let outerWear = "sweater";
    return outerWear;
}

//printing myOutfit function
var newName = myOutfit;
console.log(newName);

// Strict operator === checks strictly for same data type. "3" and 3 - FALSE
// Where == would consider "3" and 3 to be equal - TRUE

//Same applies to !==. "3" and 3 wont be equal - TRUE
//Where for != "3" and 3 will be considered equal - FALSE
function isEqual(num){

   return 3 === num ? "Ternary ex TRUE" : "Ternary ex False";

    // if('3' === num){
    //     return 'Yes, it is true. "3" equals ' + num;
    // }else{
    //     return 'No, "3" does not equal ' + num;
    // }

}



//return random number using Math.round(Math.random) 
//                        or Math.floor(Math.random)

var testRandomNum = Math.round(Math.random() * 5);

console.log(testRandomNum);

//passing random number into isEqual() function from line 114
console.log(isEqual(testRandomNum));


//declaring with var and let in the function()
function varLet(){
    let job = "Function SDET"; //var declared globally, and if this one was var, and then job variable inside of the block
    if(true){                  //was job = "new value", then it would change value globally 
                                        //where if both declared with let - the one inside of IF block would only change there, but not for the function
        let job = "Block Boss";
        console.log(job);
    }
        console.log(job);
}

varLet();

//cant reassign value to const varianble, but chan mutate values of the array and objects.
const change = "Old value";
//change = "New value";


//Freeze object to prevent mutation
const MATH_CONSTANT = {
    PI: 3.14
}

Object.freeze(MATH_CONSTANT);

try {
    MATH_CONSTANT.PI = 69;
} catch(ex) {                     //CHECK HOW EXCEPTION MUST BE PROVIDED IN CATCH
    console.log(ex);
}
    
console.log(MATH_CONSTANT.PI);

//Concise Anonymous function = use arrow function =>

var magic = function(){
    return new Date();
};
//SAME AS
const magic2 = () => new Date(); //if return one value - dont need return keyword