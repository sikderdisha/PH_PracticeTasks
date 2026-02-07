/*
Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.
*/

const input = require("readline-sync");
let number = input.question("Enter number: ");
number = Number(number);

let mod = number % 5;
console.log(mod);