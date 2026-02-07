/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const input = require("readline-sync");
let num1 = input.question("Enter num1: ");
num1 = Number(num1);
let num2 = input.question("enter num2: ");
num2 = Number(num2);
let result=0;

if(num1 > num2){
    result = 2*num1;
}
else{
    result=num1 + num2;
}
console.log("Result is : "+result);