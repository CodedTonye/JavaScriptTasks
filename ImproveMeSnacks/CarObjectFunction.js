const car = {
        brand: "Toyota",
        model: "Camry",
        available: true
    };

function checkCarAvailabilty(car) {    
    if (car.available == true) {
        console.log("This car is available.");
    }
    else {
        console.log("This car is not available.");
    }
}

checkCarAvailabilty(car);
