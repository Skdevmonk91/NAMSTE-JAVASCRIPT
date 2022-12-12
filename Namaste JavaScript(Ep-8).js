/* Temporal dead zone is between time of hoisting and outcome(output) value is being printed or not always applicable in terms of "let & const" for both of them */



//can't access before initialization
// console.log(a); 
//can access before initialization but without any value(undefined)
console.log("Using Hoisting Value Of b: ", b);

let a = 100;
console.log(a); //can access after initialization

var b = 1000;

//Window & This both are global object can access of values of globally in code
/* can access variable of var because they are available on globally on code and print the value whether in case of this it can't be accessed because let have blocked and not available global so it will print error */
// window.a
// this.a
// window.b
// this.b




//To check reference error of not defined 
// console.log(t);




// once a value is initialized in code it can change value is possible or not 
/* for let it is applicable and once assigned value it can change value without using let (let have less strict rule than const) */
let c = 100;
c = 50;

/* tried to give/assign new value for let declared variable using different types but each time it will (print syntax error of identifier is declared) */
/* Problem with syntax error is once this error get it stops whole code execution and until it get solved it doesn't other code output */
// let c = 45;
// var c = 150;
// const c = 160;

//for outcome of c
console.log(c);


/* for var it is applicable and once assigned value it can change value with using var  (var have less strict rule than let) */
var d = "York is now";
var d = 35;

//for outcome of d
console.log(d);


/* Const have most strict rule in hierarchy of variables initialization */
// const e; //it will print syntax error(missing initializer)

/* It cant access value before initialize them after initialize them we can access those value(rule is applicable for const & let)  */
// console.log(e);

const e = "to be defined";
/* This will throw an error(assignment to const variable)  means once value is initialized in const it cant be changed */
// e = 976;

console.log(e);