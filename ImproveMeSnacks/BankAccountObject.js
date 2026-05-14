const user = {
    acountName: "David",
    balance: -1};

function getBalance() {
    if(user.balance < 1000) {
        return "Low Balance";
    }
    else if (user.balance >= 1000) {
        return "Sufficient Balance";
    }
    else {
        return "Invalid balance";
    }
}

console.log(getBalance());
