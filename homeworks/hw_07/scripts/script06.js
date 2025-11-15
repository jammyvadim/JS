console.log('#vV9a6584I5')
console.log('– Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:')
console.log('— drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`')
console.log('— info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`')
console.log('— increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed')
console.log('— changeYear (newValue) – змінює рік випуску на значення newValue')
console.log('— addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car')

function Car (model, brand, year_of_production, max_speed, engine_capacity) {
    this.model = model
    this.brand = brand
    this.year_of_production = year_of_production
    this.max_speed = max_speed
    this.engine_capacity = engine_capacity
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    };
    this.info = function () {
        for (let key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (speed_increase) {
        this.max_speed += speed_increase
    };
    this.changeYear = function (new_year) {
        this.year_of_production = new_year
    };
    this.addDriver = function (driver) {
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
