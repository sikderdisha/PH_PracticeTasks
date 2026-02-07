/* Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

const input = require("readline-sync");
console.log("Enter the numbers of the following subjects.")
let Bangla = input.question("Bangla: ");
Bangla = Number(Bangla);

let Biology = input.question("Biology: ");
Biology = Number(Biology);

let Mathematics = input.question("Mathematics: ");
Mathematics = Number(Mathematics);

let Chemistry = input.question("Chemistry: ");
Chemistry= Number(Chemistry);

let Physics = input.question("Physics: ");
Physics = Number(Physics);

let avg = (Bangla + Biology + Mathematics + Chemistry + Physics)/5;
console.log("Average mark is "+avg.toFixed(2));