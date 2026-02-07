// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

const input = require("readline-sync");
let Balance = input.question("I have: ");
Balance = Number(Balance);

let cost = input.question("Cost of 1 kg Orange and Apple: ");
cost = Number(cost);

let return_money = Balance - cost;
console.log("The shopkeeper will return: "+return_money)