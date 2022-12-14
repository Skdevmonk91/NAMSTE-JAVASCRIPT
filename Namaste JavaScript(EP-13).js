/* function statements can be called with use of hoisting and output will be regular without throwing error */
// a();
/* whether in function expression it will call like regular variable so it doesn't allow to use hoisting and throw an error  */
// b();

//Function Statements
//they are regular function and statement/structure is normal
function a() { //creating a function named 'a'
    console.log("Regular function called");
}
a(); //for outcome


//Function expression
//they can store function inside created new variable
var b = function () { //creating a variable named 'b' to create function
    console.log("function expression called");
}
b(); //for outcome





//Anonymous function
//they are function without name
//it can not allow a function without name it will throw error
// function () {

// }





//Named function expression
var c = function red() { //creating a variable named 'c' to create function
    // console.log(red); //still have access inside the function
    console.log("Named function expression called in javascript");
}
//for outcome
c();
/* difference between function expression and named function expression is it have variable and function name both allowed in code but it wont allow at calling time only variable can be called function name will throw error */
// red();





//Difference between parameters & arguments
//creating a variable named 'd' to create function
var d = function (a, b) { //a and b are parameters
    return a + b;
}
//putting values inside this d is an actual argument
//for outcome
console.log(d(22, 47));





//First class function
//first method
var e = function (para1) { //passing parameter in function
    console.log(para1); // calling parameter 
}

e(function () { //passing function as value of a function parameter(still valid)

})



//second method
//passing parameter in function
var f = function (para1) {
    // calling parameter 
    console.log(para1);
}

//creating function with named 'ex1'
function ex1() {

}

//passing function named 'ex1' as parameter argument and it is still valid in javascript
f(ex1);



//third method
//passing function for return inside a function we can still do that it will a valid javascript function
var g = function (param1) { //creating a variable named 'g' to create function
    return function () {

    }
}

console.log(g()); //for output of function

var h = function (param2) { //creating a variable named 'h' to create function
    return function ex2() {

    }
}

console.log(h()); //for output of function