//Block & Block Scope
/* It uses to combine multiple statement code into one group ({}) is called as block scope/block */

//we can create and use single statement of code
if (true) console.log('just an example');

/* but we can also use or create a block of multiple statements */
if (true) {
    a = 150;
    console.log(a);
}



//example of block chain execution in code
{
    var b = 670; //Initialization of b inside a block
    let c = 250; //Initialization of c inside a block
    const d = 160; //Initialization of d inside a block
    //all statements will be executed because they are inside of block 
    console.log(b);
    console.log(c);
    console.log(d);
}
//b will be accessible because of global variable
console.log(b);
// whether c & d cant be accessed because it have no access outside of block
// console.log(c);
// console.log(d);




//Shadowing in JavaScript
/* when a variable declared in a certain scope (has the same name as a variable in an outer scope */
/* in using var it will not just shadow the variable but also exchange value from old one to take new one from the block */
var e = "to the document";

{
    var e = 56;
    let f = "text";
    const g = 45;
    console.log("Output of e var without shadowing: ", e);
}

console.log("Output of e var after shadowing: ", e);


/* In let it will just shadow the variable and only show the output of inside different that we have given inside block and it will change the input outside of block it will also change outcome */
let f = "350";

{
    var e = 56;
    let f = "text";
    const g = 45;
    console.log("Output of f var without shadowing: ", f);
}

console.log("Output of let f after shadowing: ", f);


/* Also in const will just shadow the variable and only show the output of inside different that we have given inside block and it will change the input outside of block it will also change outcome */
const g = 145;

{
    var e = 56;
    let f = "text";
    const g = 45;
    console.log("Output of f var without shadowing: ", g);
}

console.log("Output of const g after shadowing: ", g);




//Illegal shadowing in javascript
//block variables don't have access outside of scope or can't change value
/* It will not allowed var to be change value of same name let had  used */
// let k = 100;
// {
//     var k = "you";
// }


/* var can allow to change value of current var to new var declared in block because they are global */
var l = "Not available";
{
    var l = "you";
}


/* also can change var to let of same named variable because var have global access variable so inside block let can change to new value */
var m = 100;
{
    let m = "Shorted";
}


//it will be still applicable inside of function because it don't have access outside function(limited to function)
var n = 150;

function x() {
    let n = "Knock to loud";
}


//it can applicable to rule of lexical environment that we check give outcome of nearest variable in the code
const o = false;

{
    const o = "Road Block";
    {
        const o = 350;
        console.log(o);
    }
}