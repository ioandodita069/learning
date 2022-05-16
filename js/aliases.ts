type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {

    year: CarYear;
    type: CarType;
    model: CarModel
};

const carYear: CarYear = 2020
const carType: CarType = "Volkswagen"
const carModel: CarModel = "Jetta"
const car: Car = {

    year: carYear,
    type: carType,
    model: carModel
};

console.log(car)