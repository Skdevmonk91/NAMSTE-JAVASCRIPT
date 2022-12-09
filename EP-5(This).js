//Window & This keyword
//It is object that initializes by default as global and uses as global object




//Variable Initialize & Declaration
var a = 25;

//Function Initialize & Declaration
function b() {
    var c = 145;
}



//with three different way we can access variables
/* If we try to access a defined variable with window function we can access that anywhere from because it is global */
console.log(window.a);

/* If we try to access that variable without any keyword and simply put that 
variable it will be access because it automatically assumes that variable global */
console.log(a);

/* If we try to access with this we can because this is also a global variable */
console.log(this.a);



/* It cant access inside variable of function it will throw an error but there is special case it will be access with window & this both but it will just print value undefined  */
// console.log(window.c);
// console.log(c);
// console.log(this.c);