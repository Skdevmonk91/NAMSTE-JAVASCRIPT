//setTimeout & Closures in javascript
/* setTimeout - sets a timer which executes a function or specified piece of code once the timer expires */

//Basic Timeout Function Demonstration
function a() {
    var i = 100;
    setTimeout(function () {
        console.log(i);
    }, 1000)
}
a();




//Timeout function with new extra text(that text without affecting Timeout function)
//it means it will display text first and then timeout will runs on pre code time
function b() {
    var x = 1000;
    setTimeout(function () {
        console.log(x);
    }, 2000)
    //This will runs first without affecting any timeout function
    console.log("setTimeout function called by me");
}
b();




//Timeout function with new extra text and sequence of numbers(that text without affecting Timeout function)(with logical error)
//it means it will display text first and then timeout will runs on pre code time
function time() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 3000)
    }
    //This will runs first without affecting any timeout function
    console.log("New to javascript");

}
time();




//Timeout function with new extra text and sequence of numbers(that text without affecting Timeout function)(with logical error solving)
//it means it will display text first and then timeout will runs on pre code time
function d() {
    for (var k = 1; k <= 10; k++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 3000)
        }
        close(k);
    }
    //This will runs first without affecting any timeout function
    console.log("Proud language initialized");
}
d();