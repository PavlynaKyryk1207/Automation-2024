let objectCar1 = {
    brand: 'Range Rover',
    model: 'Evoque',
    year: 2020,
}

let objectCar2 = {
    brand: 'BMW',
    model: 'SmartClass',
    year: 2018,
}

let objectCar3 = { ...objectCar1,  objectCar2 };
console.log(objectCar3)