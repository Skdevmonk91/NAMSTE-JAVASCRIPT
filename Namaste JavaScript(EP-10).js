//Closure in javascript
/* closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment) even if it has no physical keywords or code to access it is still important part of javascript code */


//Basic example of closure
function x() {
    var a = 150;
    function y() {
        console.log(a); //closure
    }
    y();
}
x();




//If we try to put function in variable it will still valid javascript without errors 
// function x2() {
//     var a2 = function y2() {
//         console.log(a2);
//     }

//     console.log(a2);
//     // y2();
// }
// x2();




//If we try to put function inside a function it will still valid javascript
// function x3() {
//     var a3 = 150;

//      y3();
// }
// x3(function y3() {
//     console.log(a3);
// });




//also we can return function inside function
function x4() {
    var a4 = "Closure coding area";
    function y4() {
        console.log(a4);
    }
    return y4;
}
var z = x4(); //setting a call of function x4 by creating a variable
console.log(z); //this output will print code of function y4
//....... (multipleLine of code)
z(); //it will call main function and output


//Second way to return(it will still valid)
// function x5() {
//     var a5 = "Net Worth of JavaScript";
//     return function y5() {
//         console.log(a5);
//     }
// }
// var z2 = x5();
// console.log(z2);
// //....... (multipleLine of code)
// z2(); 




/* If we try to change of variable to new one from outside of function and then try to access its value it will convert from old to new value and give output */
function x5() {
    var a5 = "Work";
    function y4() {
        console.log(a5);
    }
    a5 = "Work Hard";
    return y4;
}
var z3 = x5();
console.log(z3);
z3();




/* If we try to access value of parent function and second value of even parent function it will still have access of those values and print the outcome(a5(part of its parent function),b(part of main function))  */
function z4() {
    var b = 150
    function x6() {
        var a5 = "Total counsel value: ";
        function y5() {
            console.log(a5, b);
        }
        y5();
    }
    x6();
}
z4();