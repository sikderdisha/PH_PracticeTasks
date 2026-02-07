/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const input = require("readline-sync");
let Burger = input.question("Enter amount: ");
Burger = Number(Burger);

if(Burger > 500){
    console.log("You get a free coke.")
}
else{
    console.log("Coke:30 taka");
}