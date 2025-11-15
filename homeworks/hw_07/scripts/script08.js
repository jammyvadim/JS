console.log('#zg6Fifnqig')
console.log('– створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок')
console.log('Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.')
console.log('За допомоги циклу знайти, яка попелюшка повинна бути з принцом.')
console.log('! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку')


class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('asd1', 17, 36),
    new Cinderella('asd2', 18, 37),
    new Cinderella('asd3', 19, 38),
    new Cinderella('asd4', 20, 39),
    new Cinderella('asd5', 21, 40),
    new Cinderella('asd6', 22, 41),
    new Cinderella('asd7', 23, 42),
    new Cinderella('asd8', 24, 43),
    new Cinderella('asd9', 25, 44),
    new Cinderella('asd10', 26, 45)
];

console.log(cinderellas)

const prince = new Prince('qweqwe', 40, 37);

console.log(prince)

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }
}

console.log('prince.wife (find by iteration):')
console.log(prince.wife)

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

prince.wife = cinderellaMain;


console.log('prince.wife (find by array function Find and relative callback):')
console.log(prince.wife)
