/* function work and behavior are so simple and linear it will get output in line even if has same name variable used in function because variables are limited to that specific function in whole code so it will allow same name variable outcome in multiple time without bothering */

//declare and initialize variable
var x = 10;

//Executed first
a();
//Executed second
b();
//Executed third
console.log(x);

//Added new function
function a() {
    var x = 100;
    console.log(x);
}

//Adding new function
function b() {
    var x = 1000;
    console.log(x);
}