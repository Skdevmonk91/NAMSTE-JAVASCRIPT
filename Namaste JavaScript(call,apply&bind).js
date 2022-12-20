//call,apply & bind in javascript

//creating new function
let fullName = function (town) {
    console.log(this.firstName + " " + this.lastName + " " + "From " + town);
}


//variables to use in demonstration
let name1 = {
    firstName: "Ray",
    lastName: "Miller",
}

let name2 = {
    firstName: "Anthony",
    lastName: "Waller",
}

let name3 = {
    firstName: "Andy",
    lastName: "Trail",
}

let name4 = {
    firstName: "River",
    lastName: "Fall",
}



//function borrowing & Call Method
//call function use to call one function inside another functions
/* we can use function borrowing means creates new variable with function and use them and call them through(call function) */
fullName.call(name1, "California");
fullName.call(name2, "Japan");



//Apply Method
/* Difference between apply method and call method is call method possible to 
pass individual arguments and in apply method we have to pass second arguments 
and inside that we can pass all values */
fullName.apply(name3, ["USA"]);



//Bind Method
/* Bind method uses same format like call method difference is it can straight call
instead we have to store inside new variable and call it like function */
let nameBind = fullName.bind(name4, "Brazil");
//we cant access values with console log it will give code instead of actual value
console.log(nameBind);
//calling variable like function(For output)
nameBind();