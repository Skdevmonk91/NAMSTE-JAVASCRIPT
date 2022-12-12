//Scope,Scope Chain & Lexical Environment
/* Scope: Scope is current context of code, which determines the accessibility of variables to JavaScript. */

/* Lexical Environment: It have access variable from a parent and use when it comes to terms of execution  */

/* Scope Chain: It will check code on three phases first it start it with local level and then its parent level if it cant find it then it will check on global level all these process to find variable of code that we have defined/used called scope chain */



//Checking Whole code for that variable one by one(in Three level is called scope chain)
//Checking code using simple scope(Current code)
function a() { //Creating a new function
    console.log(b); //calling variable using hoisting inside function
}

var b = 10; //Initialize & Declaring variable
a(); //To call initialized function




//Checking code using lexical environment
function c() { //Creating a new function
    var e = 25; //Initialize & Declaring variable
    d(); //Calling a function inside a function
    function d() { //Initialize a function inside a function
        console.log(e);
    }
}

c(); //To call initialized function




//accessing variable from inside of function
function x() { //Creating a new function
    var y = 25; //Initialize & Declaring variable
    z(); //Calling a function inside a function
    function z() { //Initialize a function inside a function

    }
}

x(); //To call initialized function
console.log(y); //Trying to access variable from inside of function