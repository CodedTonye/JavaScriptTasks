const prompt = require("prompt-sync")();
const color = prompt("Enter Trafic Light Color: ").toLowerCase();

if (color == "red") {
    console.log("Stop");
}
else if (color == "yellow") {
    console.log("Get Ready");
}
else if (color == "green") {
    console.log("Go");
}
else {
    console.log("Invalid color");
}
