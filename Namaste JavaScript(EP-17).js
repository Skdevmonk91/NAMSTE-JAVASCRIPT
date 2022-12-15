//Problem with setTimeout in JavaScript
/* set all the timeouts to last 1 second at the same time. The loop doesn't wait for the timeout to occur. So you have 5 timeouts that all execute at the same time */



//this will start first execution
console.log("Starting new code");


/* setTimeout function for 5 seconds after that will display message from call queue and make them in call stack */
setTimeout(function trap() {
    console.log("Timeout Is Called");
}, 5000)


//this will executed second
console.log("End of code");




//Trying to create time gap in code using date function and while loop
// creating new variable with constructor for date & getTime 
let newDate = new Date().getTime();
//Trying to access variable through new variable
let oldDate = newDate;

//While loop
//this will work while loop and make time gap for 10 seconds and this will execute first 
while (oldDate < newDate + 10000) {
    oldDate = new Date().getTime();
}
//executed exact after 10 seconds
console.log("while loop expires");





//SetTimeout(0) Method
//this will start first execution
console.log("Starting code");


/* setTimeout function will be called after 0 seconds means exact after time ends but it still have to wait until all global elements are executed then it will come from callback queue and executed in call stack */
setTimeout(function trap() {
    console.log("0 second timeout");
}, 0)


//this will executed second
console.log("Ending code");