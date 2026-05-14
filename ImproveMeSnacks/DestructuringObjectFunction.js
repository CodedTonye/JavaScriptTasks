function destructObject() {
    
    const user = {
    
        name: "Amaka",
        age: 25,
        country: "Nigeria"
    }
    
    let {name, age} = user;;
    console.log(name, age);
};

destructObject();

