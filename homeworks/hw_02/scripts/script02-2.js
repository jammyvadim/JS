// #sA3Gg1sCp – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.



let book1_add={
    title:'Майстер і Маргарита',
    pageCount: 300,
    genre: 'Фантастика',
    authors: [
        {Name:'Михайло булгаков', Age: 134},
        {Name: 'Неідомий соавтор', Age: 0}
    ]
}

let book2_add={
    title:'1984',
    pageCount: 500,
    genre: 'Антиутопія',
    authors: [
        {Name:'George Orwell', Age: 122},
        {Name: 'Eric Arthur Blair ', Age: 122}
    ]
}

let book3_add={
    title:'Енеїда',
    pageCount: 400,
    genre: 'Поема',
    authors: [
        {Name:'Іван Котляревський', Age: 256},
        {Name: 'Publius Vergilius Maro ', Age: 2095}
    ]
}

console.log('------- script 2-2: #sA3Gg1sCp -------')

console.log(book1_add)
console.log(book2_add)
console.log(book3_add)