/*
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

let books = ['me before you', 'me after you', 'the rain'];
let tour = ["lalbager kella", "cox's bazar", "Sylhet"];
let age = 35;

// check & print message
console.log(Array.isArray(books) ? "books is an array" : "books is NOT an array");
console.log(Array.isArray(tour) ? "tour is an array" : "tour is NOT an array");
console.log(Array.isArray(age) ? "age is an array" : "age is NOT an array");
