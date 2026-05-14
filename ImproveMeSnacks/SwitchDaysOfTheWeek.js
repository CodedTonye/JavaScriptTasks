const prompt = require("prompt-sync")();
const username = prompt("Enter day of the week: ");

const day = username.toLowerCase(); 

switch(day) {

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("Weekday");
    break;

    case "saturday":
    case "sunday":
        console.log("Weekend");
    break;
    default: 
        console.log("Invalid day")
};
