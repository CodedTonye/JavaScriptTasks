const prompt = require("prompt-sync")();

const number = prompt("Enter number to check even: ");

if (number % 2 == 0) {
    console.log(number + " is an Even number");
}
else {
    console.log(number + " is an Odd number");
}
