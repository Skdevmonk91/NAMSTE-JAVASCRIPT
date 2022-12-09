//Hoisting In JavaScript(Namaste JavaScript)
/* In this concept you can call function before initialize them in code and later 
on you can create function but this method can store function and internal code 
with values but cant be help with single variable because it can declare variable 
but it cannot take any initialize values in hoisting */



//Before initialize & Declaring values calling it
console.log(one);

//Before initialize & Declaring values calling a function
newRole();
//console.log(newRole2()); (don't support hoisting)



//Creating and initialize & Declaring values
var one = 15;

//Creating and initialize & Declaring values for function
function newRole() {
    console.log("Initiating new role for hoisting");
}

//Creating function in second way(don't support hoisting)
var newRole2 = function () {
    console.log("Function defined in another way");
}


console.log("Structure of function: ", newRole);
//After initialization checking for outcome will get regular output
//After initialize & Declaring values calling it
console.log(one);

//After initialize & Declaring values calling a function
newRole();
console.log(newRole2());