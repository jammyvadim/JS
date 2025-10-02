// #6Qb97gsv
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName= 'Вадим'
let middleName= 'Миколайович'
let lastName= 'Коваленко'

let person = `${lastName} ${firstName} ${middleName}`
// альтернативний варіант: let person = lastName + ' ' + firstName + ' ' + middleName

console.log(person)