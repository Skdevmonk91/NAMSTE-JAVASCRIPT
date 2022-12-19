//Callback Hell In JavaScript
/* callback hell will occur when too many callbacks/functions/objects/etc... inside one to another and build nesting of code it can affect when there are too many lines of this type of code available it becomes unmaintainable which can lead to this situation */


//Simple example of callback
console.log("Welcome to my javascript code");

/* adding simple anonymous function and console message with settimeout for callback(with pre-defined time of execution) */
setTimeout(function () {
    console.log("a simple callback function introduced");
}, 5000);

console.log("End of javascript callback code");




//Callback Hell(using api example)
// const items = ["Sport Shoes", "Redbull", "Track Pants", "Jacket", "Full Sleeve T-shirt"];

// api.Order(cart, function () {

//     api.Payments(function () {

//         function summary() {
//             console.log("received payment");

//             api.print(function () {

//             })
//         }

//     })

// })