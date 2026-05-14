const prompt = require("prompt-sync")();
const userGrade = prompt("Enter Student Grade: ");

function getGrade(grade) {
    if(userGrade >= 70) {
        return "A";
    }
    else if (userGrade >= 60 && userGrade <= 69) {
        return "B";
    }
    else if (userGrade >= 50 && userGrade <= 59) {
        return "C";
    }
    else if (userGrade >= 40 && userGrade <= 49) {
        return "D";
    }
    else {
        return "F";
    }
}

console.log(getGrade(userGrade));
