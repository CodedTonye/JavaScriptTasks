const prompt = require("prompt-sync")();
const firstNumber = Number(prompt("Enter First Number: "));
const secondNumber = Number(prompt("Enter Second Number: "));

function getSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log(getSum(firstNumber, secondNumber));
