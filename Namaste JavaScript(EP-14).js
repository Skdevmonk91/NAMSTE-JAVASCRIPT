//Callback function & Event Listeners

//Callback function in javascript
/* callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. */
//Timeout function will executed at last after those functions are done with work
setTimeout(function () {
    console.log("New Timer Started");
}, 6000)

//this will be executed first 
function x(y) {
    console.log("X printed"); //print value for function x
    y(); //to call function y
}

x(function y() {
    console.log("Y printed"); //adding values for function y
})




//trying with basic event listener attached with basic html button
document.getElementById("clickTo").addEventListener("click", function raise() {
    alert("You have clicked button");
})




//Closure demo with event listener 
//First way to do that(Main method)
/* or we can create main function and inside that create a variable and add that in (++) in later to make count number each time we have clicked that button and called that function it will work properly because it can access internal function because of closure effect */
function timeEventList() {
    let counted = 0;
    document.getElementById("clickSubmit").addEventListener("click", function or() {
        console.log("Closure demo in console of events", counted++);
    })
}
timeEventList();

//Second way to do that
/* We can create a variable and add that in (++) in later to make count number each time we have clicked that button */
let count = 0;
document.getElementById("clickMe").addEventListener("click", function you() {
    console.log("You have clicked button in console", count++);
})




//Garbage collection
/* Automatic memory management is also known garbage collection(GC) in javascript */

//removeEventListener
/* when we don't need to use in code because event listener takes big amount of space unnecessarily that make code heavy and slow in execution */