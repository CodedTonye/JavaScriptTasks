function mergeObjects() {
    
    const personal = {
    
        name: "Kemi",
        age: "27"
    };
    
    const professional = {
    
        role: "Designer",
        company: "TechCorp",
        ...personal
    }
    return professional;
}

console.log(mergeObjects());
