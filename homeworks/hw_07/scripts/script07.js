console.log('#5kla3yMpgp')
console.log('– (Те саме, тільки через клас)')

// function Car (model, brand, year_of_production, max_speed, engine_capacity) {

class Car {
    constructor(model, brand, year_of_production, max_speed, engine_capacity) {
        this.model = model
        this.brand = brand
        this.year_of_production = year_of_production
        this.max_speed = max_speed
        this.engine_capacity = engine_capacity
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    };

    info () {
        for (let key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    };

    increaseMaxSpeed (speed_increase) {
        this.max_speed += speed_increase
    };

    changeYear (new_year) {
        this.year_of_production = new_year
    };

    addDriver (driver) {
        this.driver = driver
    }
}

const car = new Car('Civic', 'Honda', 2008, 200, 1800)
console.log(car);

car.drive()
car.info()
car.increaseMaxSpeed(10)
car.changeYear(2011)
car.addDriver({name: 'Vadim', surname: 'Kuznetsov', age: 25})
car.info()
console.log(car);
