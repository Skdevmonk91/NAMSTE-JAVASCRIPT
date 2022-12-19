// Map,Filter & Reduce in JavaScript

//Map(Mapping) In JavaScript
//It maps values of different types and give output inside console/window 
//array for to demonstrate map
const arr = [15, 62, 34, 98, 22];

//To find of double current array using logic 
function double(x) {
    return x * 2;
}


//To find of triple current array using logic 
function triple(x) {
    return x * 3;
}


//To find of binary current array using logic 
function binary(x) {
    return x.toString(2);
}



//putting logic of number of array using variable
let outDouble = arr.map(double);
//putting logic of number of array using variable
let outTriple = arr.map(triple);
//putting logic of number of array using variable
let outBinary = arr.map(binary);



//For output of double number of array
console.log("double value of array:", outDouble);
//For output of triple number of array
console.log("triple value of array:", outTriple);
//For output of binary number of array
console.log("binary value of array:", outBinary);




//Different way add code in javascript for map,filter & reduce(ex with map)
//still a valid format for code
// let onBinary = arr.map(function binary(x) {
//     return x.toString(2);
// });
// console.log(onBinary);

//it will be valid even if use through arrow function
// let allBinary = arr.map((x) => x.toString(2));
// console.log(allBinary); 





//filter in javascript
//it actually filters values in javascript
//array for to demonstrate map
const arr2 = [25, 32, 44, 58, 71];

//Function to find odd value of a array in filter
function isOdd(x) {
    return x % 2;
}


//Function to find even value of a array in filter
function isEven(x) {
    return x % 2 === 0;
}


//Function to find greater value of a array in filter
function isGreater(x) {
    return x > 30;
}



//variable to use function of filter for odd numbers in array
const odd = arr2.filter(isOdd);
//variable to use function of filter for even numbers in array
const even = arr2.filter(isEven);
//variable to use function of filter for greater numbers in array
const greater = arr2.filter(isGreater);



//For output of odd number
console.log("Odd value of array is: ", odd);
//For output of even  number
console.log("Even value of array is: ", even);
//For output of Greater number
console.log("Greater value of array is: ", greater);





//Reduce in JavaScript
//reduce() method returns a single value: the function's accumulated result
//Reduce method passes two parameters and one value to start the iteration of values 
/* accumulator(accum) values: it passed initial value and count with current value to store final result in accumulator */
// Current(curr) values: it passes current value to do work with accumulator 
/* 0 or other any value passed through at end of function to iterate or start the comparison of values from different array/obj/string(if we pass 0 value and call the maximum value function and pass no values it have 0 so it will print 0 as max value therefore they have to pass value) */

//new array to demonstrate reduce function
const array3 = [51, 42, 33, 24, 15];

//to find sum
//using regular method
function findSum(array3) {
    let sum = 0;
    for (let i = 0; i < array3.length; i++) {
        sum = sum + array3[i];
    }
    return sum;
}
console.log("Final sum is: ", findSum(array3));

//using reduce function
const getSum = array3.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log("Final sum using reduce: ", getSum);



//To find maximum 
//using regular method
function findMax(array3) {
    let max = 0;
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] > max) {
            max = array3[i];
        }
    }
    return max;
}
console.log("Max value: ", findMax(array3));

//using reduce function
const getMax = array3.reduce(function (max, values) {
    if (values > max) {
        max = values;
    }
    return max;
}, 0);
console.log("Max value using reduce: ", getMax);





//Tricky map example
//Creating a new object to check map values(with pre-stored data inside object)
const user = [
    { firstName: "Steve", lastName: "jobs", age: 56 },
    { firstName: "Jeff", lastName: "bezos", age: 58 },
    { firstName: "Sundar", lastName: "Pichai", age: 34 },
    { firstName: "Mark", lastName: "zuckerberg", age: 45 },
    { firstName: "Alex", lastName: "Remes", age: 26 },
    { firstName: "Owen", lastName: "wilson", age: 67 },
]

/* Trying to access all user full name using map method(feels more real time example) in javascript coding */
const outUser = user.map((x) => x.firstName + " " + x.lastName);
//for output of user's fullName 
console.log(outUser);




//Tricky reduce example
//Creating a new object for reduce example(with pre-stored data inside object)
const users = [
    { firstName: "Steve", lastName: "jobs", age: 26 },
    { firstName: "Jeff", lastName: "bezos", age: 58 },
    { firstName: "Sundar", lastName: "Pichai", age: 34 },
    { firstName: "Mark", lastName: "zuckerberg", age: 45 },
    { firstName: "Alex", lastName: "Remes", age: 26 },
]

/* trying to access values of same age or different age from data in numbers that are available using reduce function(real-time example)  */
const outUsers = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }

    else {
        acc[curr.age] = 1;
    }

    return acc;
}, {})
//For output of same age
console.log(outUsers);




//Tricky filter and mix example
//Creating a new object for filter/mix example(with pre-stored data inside object)
const userMenu = [
    { firstName: "Steve", lastName: "jobs", age: 26 },
    { firstName: "Jeff", lastName: "bezos", age: 58 },
    { firstName: "Sundar", lastName: "Pichai", age: 34 },
    { firstName: "Mark", lastName: "zuckerberg", age: 45 },
]

/* We can use multiple methods(map,filter,reduce) in same object/function/code to use and make it more effective or useful code */
//to target firstname only through age basis using mix(all) methods in same code
const outUserMenu =
    userMenu.filter((a) => a.age > 30) //filter will print people age is greater than 30
        .map((a) => a.firstName); //map will print only first name
console.log(outUserMenu); //for output of firstName through age basis