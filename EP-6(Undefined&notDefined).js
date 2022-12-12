//undefined vs not defined
/* "undefined" indicates that a variable has been declared but not given a value, while "not defined" indicates that a variable does not exist. */



//this will print the output with help of method hoisting(undefined)
console.log("Output using hoisting: ", b);
//Initializing a variable
var b = 45;
//running a variable without define or add print not defined error
// console.log(d); 
//this will print output using simple method
console.log("Outcome in regular: ", b);



//Putting condition to check undefined or not undefined
//new variable initialized
var c;
//for outcome
console.log("Printed value is: ", c);

//to check condition in second way
// c = 10;

//adding if condition is c is equal to undefined or not
if (c === undefined) {
    console.log("Value is undefined");
}

//adding else condition print if it is not undefined
else {
    console.log("Value is not undefined");
}



// Live example of loosely/weakly type language(A proper example) 
var a; //assign a value
console.log("assign a value outcome: ", a); //for outcome purpose
a = "You are using a string now" //re-assign a value
console.log("re-assign a value outcome: ", a); //for outcome purpose
a = 65; //re-assign a value
console.log("re-assign again for value outcome is: ", a); //for outcome purpose