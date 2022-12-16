//Higher Order Functions
/* Higher order functions are called when you to take callback function as argument to pass inside new functions and call it will work as higher order functions */

//callback function
//basic function to create and used inside bigger function
function x() {
    console.log("Welcome to javascript program!");
}

//higher order function
//used to call function inside a function & callback function
function y(add) {
    x();
}
y();





// There are two available methods to do coding in javascript


/* In this coding method all functions are same and used many time re-code or copy many times only one line logic changes in code before run to output */
//array for example demonstration
// const circle = [12, 8, 5, 9];
//First  function
// const calArea = function (circle) {
//     const outcome = [];
//     for (let i = 0; i < circle.length; i++) {
//         outcome.push(Math.PI * circle[i] * circle[i]); //logic of function
//     }
//     return outcome;
// }
// console.log(calArea(circle));

//Second  function
// const calCircumference = function (circle) {
//     const outcome = [];
//     for (let i = 0; i < circle.length; i++) {
//         outcome.push(2 * Math.PI * circle[i]); //logic of function
//     }
//     return outcome;
// }
// console.log(calCircumference(circle));

//Third  function
// const calDiameter = function (circle) {
//     const outcome = [];
//     for (let i = 0; i < circle.length; i++) {
//         outcome.push(2 * circle[i]); //logic of function
//     }
//     return outcome;
// }
// console.log(calDiameter(circle));



/* For second we can make code more re-usable only extract logic from function and without repeating code for function(Using Dont Repeat Yourself(DRY) Method) */
//array for example
const radius = [15, 7, 9, 13];

//Logic of first function(Using DRY)
const area = function (radius) {
    return Math.PI * radius * radius
}

//Logic of second function(Using DRY)
const circumference = function (radius) {
    return 2 * Math.PI * radius
}

//Logic of third function(Using DRY)
const diameter = function (radius) {
    return 2 * radius
}

//adding once a code of loops and then call only logic part of function
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

//to check output of all logic functions
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));





//To check higher order function using map and without map act like map 
//higher order function
Array.prototype.calculation = function (logic) {
    const prepare = [];
    for (let i = 0; i < this.length; i++) {
        prepare.push(logic(this[i]));
    }
    return prepare;
}

/* using map method it will call straight logic of area function inside console after adding current array/object/etc.map and calling the function */
console.log(radius.map(area));
/* Without using map we can do make it act like map using main function after adding current array/object we want to use and then (.)main function(()) inside calling logic function for output */
console.log(radius.calculation(area));