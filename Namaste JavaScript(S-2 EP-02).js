//Promise in JavaScript
// Promise is object that eventually completes/failure of asynchronous operation  
/* Difference between passing callback function and attaching callback function is first one just pass function and second actually attaches function to promise object */


//Example One
//creating simple array to demonstrate example of promise with named cart 
// const cart = ["Formal Shoes", "Track Pants", "Jackets", "T-shirt"];

/* like other e-websites we can make to call cart then its order id function and payment proceed with its order id function inside main api for demonstration purpose */
// createOrder(cart, function (orderId) {
//     proceedPayment(orderId);
// });


/* the order inside that createOrder will store cart and inside array and add as promise creating in code(initialize/create new promise) */
//only call function pass values undefined
// const promise = createOrder(cart);

/* trying to access variable(promise) and using then with inside using old function code to execute */
/* Promise ensures to run the code inside it at least once because it is guaranteed to code function or any code will run and it is only run once in code cycle it also used as risk minimization in code running */
//this will allow us to check values inside data/code
// promise.then(function (orderId) {
//     proceedPayment(orderId);
// });




//Example using fetch
//link object(new)
const GITHUB_API = "https://api.github.com/users/Skdevmonk91"

//object of promise(fetch use as promise)
const user = fetch(GITHUB_API);

//to get user data from website
console.log(user);

//to attach promise to callback function
// user.than(function (data) {
//     console.log(data)
// });




/* if code starts to work horizontally instead of vertical(regular way) it is known as pyramid of doom this is also can lead to callback hell */
//Example two
//initialize new array
// const carts = ["Formal Shoes", "Track Pants", "Jackets", "T-shirt"];

//nesting of callbacks
// createOrder(carts, function (orderId) {
//     proceedPayment(orderId, function (paymentInfo) {
//         orderSummary(paymentInfo, function () {
//             updateBalance();
//         });
//     });
// });

//preventing them by attaching each objects one by one to code
// createOrder(carts)
// .then(function (orderId){
// return proceedPayment(orderId)
// })

// .then(function (paymentInfo){
// return  orderSummary(paymentInfo)
// })

// .then(function (paymentInfo){
// return updateBalance(paymentInfo)
// });