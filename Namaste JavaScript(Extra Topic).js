//Event bubbling & Event capturing(tickling) methods in javascript

/* Without using any method it will print output in regular way from grandparent to parent and than child element */
document.querySelector("#grandParent")
    .addEventListener("click", () => {
        console.log("grandParent clicked in regular way");
    })

document.querySelector("#parent")
    .addEventListener("click", () => {
        console.log("parent clicked in regular way");
    })

document.querySelector("#child")
    .addEventListener("click", () => {
        console.log("child clicked in regular way");
    })



/* With bubbling effect it will print in child to parent and than grandParent in accessing element */
document.querySelector("#grandParent2")
    .addEventListener("click", () => {
        console.log("grandParent clicked in bubble method");
    }, true)

document.querySelector("#parent2")
    .addEventListener("click", () => {
        console.log("parent clicked in bubble method");
    }, true)

document.querySelector("#child2")
    .addEventListener("click", () => {
        console.log("child clicked in bubble method");
    }, true)



/* With using capturing aka tickling method it will goes  grandparent to parent and than child element   */
document.querySelector("#grandParent3")
    .addEventListener("click", () => {
        console.log("grandParent clicked in tickling method");
    }, false)

document.querySelector("#parent3")
    .addEventListener("click", () => {
        console.log("parent clicked in tickling method");
    }, false)

document.querySelector("#child3")
    .addEventListener("click", () => {
        console.log("child clicked in tickling method");
    }, false)



/* if there is mix up of both types in same thing it can affect code and it will print output on in its method means it will print true first and then false will be accessed inside element */
document.querySelector("#grandParent4")
    .addEventListener("click", () => {
        console.log("grandParent clicked in mix method");
    }, true) //bubbling

document.querySelector("#parent4")
    .addEventListener("click", () => {
        console.log("parent clicked in mix method");
    }, false) //tickling

document.querySelector("#child4")
    .addEventListener("click", () => {
        console.log("child clicked in mix method");
    }, true) //bubbling



/* we can also make stop to the propagation methods using declaring element and target that element with stopPropagation method referring to element it will only access that variable instead of whole code and print it  */
document.querySelector("#grandParent5")
    .addEventListener("click", (e) => {
        console.log("grandParent clicked in propagation");
        e.stopPropagation();
    })

document.querySelector("#parent5")
    .addEventListener("click", (e) => {
        console.log("parent clicked in propagation");
        e.stopPropagation();
    })

document.querySelector("#child5")
    .addEventListener("click", (e) => {
        console.log("child clicked in propagation");
        e.stopPropagation();
    })