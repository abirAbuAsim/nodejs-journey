/**
 * If you are conscious about securing the the scope of your function
 * and the variables within it then Immediately Invoked Function Expression
 * is a nice way to go for it.
 */

// Step 1:
// Think of a normal function definition,

function normalPrintFunction() {
    console.log('This is a message');
}


// Step 2
// Remove the function name, 
// wrap the function with ();

// This is now a Function Expression

(function () {
    console.log('This is a message');
});


// Step 3
// Add a pair of brackets () to be able to call this function

(function () {
    console.log('This is a message');
})();