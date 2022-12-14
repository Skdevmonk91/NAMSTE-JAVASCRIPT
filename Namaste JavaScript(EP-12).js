//Data Hiding(Data Encapsulation)
//data hiding is used when you have to stop  unnecessary access of data from outside or not given and hide access from important data
/* Creating function numbers for to make counts from 0 to n numbers */
function numbers() {
    var count = 0;
    return function counter() { //dont have straight access to call function from outside
        count++;
        console.log(count);
    }
}

/* We cant access internal function of some parent directly it will throw error of reference error not defined in data hiding */
// counter();

/* But we can access them through calling main function inside a variable and it will increase count each time we call that variable */
var time1 = numbers();
time1();
time1();

/* If we try to make new variable assigning same function it will work as new variable and starts counts from one not from last lefted in old variable */
var time2 = numbers();
time2(); time2(); time2(); time2(); time2();




//constructor in javascript
/* constructor is a special function that creates and initializes an object instance of a class In JavaScript, a constructor gets called when an object is created using the new keyword  */
/* Creating a function inside that function we can make increment and decrement named two function for + & -  */
function Repulse() {
    var nest = 0;

    this.increase = function () {
        nest++;
        console.log(nest);
    }

    this.decrease = function () {
        nest--;
        console.log(nest);
    }
}


/* Calling that constructor using new keyword and saving them inside a variable now we can add or minus with(.) to called inside function of that parent function that we cant directly access */
var examine = new Repulse();
examine.increase();
examine.increase();
examine.decrease();