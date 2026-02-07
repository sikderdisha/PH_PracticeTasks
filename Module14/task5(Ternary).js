const input = require("readline-sync");

let num1 = Number(input.question("Enter num1: "));
let num2 = Number(input.question("Enter num2: "));

let result = (num1 > num2) ? (2 * num1) : (num1 + num2);

console.log("Result is:", result);
