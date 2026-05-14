const user = {
    userName: "admin",
    password: 12345
};

function removePassword() {
    delete user.password
    console.log(user);
}

removePassword();
