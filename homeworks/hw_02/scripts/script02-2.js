// #sA3Gg1sCp – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.


console.log('------- script 2-2: #sA3Gg1sCp -------')


// let book1_add={
//     title:'Майстер і Маргарита',
//     pageCount: 415,
//     genre: 'Фантастика',
//     authors: [
//         {Name:'Михайло Булгаков', Age: 134},
//         {Name: 'Неідомий соавтор', Age: 0}
//     ]
// }
//
// let book2_add={
//     title:'1984',
//     pageCount: 368,
//     genre: 'Антиутопія',
//     authors: [
//         {Name:'George Orwell', Age: 122},
//         {Name: 'Eric Arthur Blair ', Age: 122}
//     ]
// }
//
// let book3_add={
//     title:'Енеїда',
//     pageCount: 440,
//     genre: 'Поема',
//     authors: [
//         {Name:'Іван Котляревський', Age: 256},
//         {Name: 'Publius Vergilius Maro ', Age: 2095}
//     ]
// }
//
// console.log(book1_add)
// console.log(book2_add)
// console.log(book3_add)

let book1={
    title:'Майстер і Маргарита',
    pageCount: 415,
    genre: 'Фантастика'
}

let book2={
    title:'1984',
    pageCount: 368,
    genre: 'Антиутопія'
}

let book3={
    title:'Енеїда',
    pageCount: 440,
    genre: 'Поема'
}

book1.authors = [
    {Name:'Іван Котляревський', Age: 256},
    {Name: 'Publius Vergilius Maro ', Age: 2095}
]

book2.authors = [
    {Name:'George Orwell', Age: 122},
    {Name: 'Eric Arthur Blair ', Age: 122}
]

book3.authors = [
    {Name:'Іван Котляревський', Age: 256},
    {Name: 'Publius Vergilius Maro ', Age: 2095}
]

console.log(book1)
console.log(book2)
console.log(book3)

