const prompt = require("prompt-sync")();
const username = prompt("Enter your username: ");
const password = prompt("Enter your password: ");

function validateLogin(username, password) {
    if(username.toLowerCase() == "tyger" && password == "12345") {
        return "Login Successful!";
    } 
    else {
        return "Invalid Username and Password...Abort!"
    }
}

console.log(validateLogin(username, password));
