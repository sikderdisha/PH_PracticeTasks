/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const input = require("readline-sync");
let age = input.question("Enter age: ");
age = Number(age);
let isStudent = input.question("Are you a student? (yes/no): ");

let regular_fare= 800;

if(age <10){
    regular_fare = 0;
    console.log("Free");
}
else if(age >=60){
    let final_fare = regular_fare - (regular_fare * 15 /100);
    console.log("You will get 15% discount.Your fare is "+final_fare);
}
else if(isStudent.toLowerCase() === 'yes'){
    let finalFare = regular_fare - (regular_fare*50/100);
     console.log("You will get 50% discount.Your fare is "+finalFare);

}
else{
    console.log("Regular ticket fare 800 tk");
}