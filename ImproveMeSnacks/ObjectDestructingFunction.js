function destructObject() {
    
    const employee = {
    
        name: "Dapo",
        role: "Engineer",
        salary: 50000,
        department: "Tech"
    }
    
    let {name, salary} = employee;;
    console.log(name, salary);
};

destructObject();

