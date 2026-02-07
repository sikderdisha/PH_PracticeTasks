/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const input = require("readline-sync");
let grade = input.question("Enter your mark: ");
grade = Number(grade);

if(grade >=0 && grade <=59){
    console.log("Your grade is F.");
}
else if(grade >=60 && grade <= 69){
     console.log("Your grade is D.");
}
else if(grade >=70 && grade <= 79){
     console.log("Your grade is C.");
}
else if(grade >=80 && grade <= 89){
     console.log("Your grade is B.");
}
else if(grade >= 90 && grade <= 100){
     console.log("Your grade is A.");
}
else{
     console.log("Invalid mark.");
}