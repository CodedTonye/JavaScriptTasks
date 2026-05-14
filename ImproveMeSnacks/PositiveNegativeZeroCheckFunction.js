const prompt = require("prompt-sync")();

const number = prompt("Enter number to check even: ");


function checkNumbers(number) {
    if (number > 0) {
        return "positive number";
    }
    else if (number < 0) {
        return "negative number";
    }
    else {
        return "is Zero";
    }   
}

console.log(checkNumbers(number));
