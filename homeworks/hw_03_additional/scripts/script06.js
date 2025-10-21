console.log('reLkOkTB29Q')
console.log('створити масив книжок (назва, кількість сторінок, автори , жанри).')
let arr_books=[
    {
        book_name: 'Harry Potter',
        pages_count: 100,
        authors: [
            {author_name: 'J.K.Rowling'},
            {author_name: 'Petya'}
        ],
        genres: [
            {genre: 'Fantasy'}
        ]
    },
    {
        book_name: 'The Lord of the Rings',
        pages_count: 300,
        authors: [
            {author_name: 'J.R.R.Tolkien'}
        ],
        genres: [
            {genre: 'Fantasy'}
        ]
    },
    {
        book_name: 'Invisible Man',
        pages_count: 200,
        authors: [
            {author_name: 'Ralph Ellison'},
            {author_name: 'Vasia'},
            {author_name: 'Marusia'}
        ],
        genres: [
            {genre: 'Fantastic'},
            {genre: 'Triller'}
        ]
    },
    {
        book_name: 'Things Fall Apart',
        pages_count: 300,
        authors: [
            {author_name: 'Chinua Achebe'},
            {author_name: 'Petya'}
        ],
        genres: [
            {genre: 'Drama'},
            {genre: 'History'}
        ]
    }
]

console.log(arr_books)
console.log('---------------------------------')

console.log('створити масив книжок (назва, кількість сторінок, автори , жанри)')
document.write('<h3>створити масив книжок (назва, кількість сторінок, автори , жанри)</h3>')
let max_pages_count=0
let biggest_book=''
for (const book of arr_books) {
    if (book.pages_count > max_pages_count) {
        max_pages_count = book.pages_count
        biggest_book = book.book_name
    } else if (book.pages_count === max_pages_count) {
        biggest_book = biggest_book + ', ' + book.book_name
    }
    console.log('"' + book.book_name + '" (' + book.pages_count + ' сторінок,' + book.genres.length + ' жанр/ів)')
    document.write('<p>"' + book.book_name + '" (' + book.pages_count + ' сторінок, ' + book.genres.length + ' жанр/ів)</p>')
}
console.log('---------------------------------')
console.log('– знайти найбільшу книжку.')
document.write('<h3>– знайти найбільшу книжку.</h3>')
console.log('Найбільша книжка: ' + biggest_book + ' (' + max_pages_count + ' сторінок)')
document.write('Найбільша книжка: ' + biggest_book + ' (' + max_pages_count + ' сторінок)')
console.log('---------------------------------')

console.log('– знайти книжку/ки з найбільшою кількістю жанрів')
document.write('<h3>– знайти книжку/ки з найбільшою кількістю жанрів.</h3>')
let max_genres_count=0
let max_genres_book=''
for (const book of arr_books) {
    if (book.genres.length > max_genres_count) {
        max_genres_count = book.genres.length
        max_genres_book = book.book_name
    } else if (book.genres.length === max_genres_count) {
        max_genres_book = max_genres_book + ', ' + book.book_name
    }
}
console.log('Книжка/ки з найбільшою кількістю жанрів: ' + max_genres_book + ' (' + max_genres_count + ' жанр/ів)')
document.write('Книжка/ки з найбільшою кількістю жанрів: ' + max_genres_book + ' (' + max_genres_count + ' жанр/ів)')
console.log('---------------------------------')

console.log('– знайти книжку/ки з найдовшою назвою')
document.write('<h3>– знайти книжку/ки з найдовшою назвою</h3>')
let book_longest_name_count = 0
let book_longest_name=''
for (const book of arr_books) {
    if (book.book_name.length > book_longest_name_count) {
        book_longest_name_count = book.book_name.length
        book_longest_name = book.book_name
    } else if (book.book_name.length === book_longest_name_count) {
        book_longest_name = book_longest_name + ', ' + book.book_name
    }
}
console.log('Книжка/ки з найдовшою назвою: ' + book_longest_name + ' (' + book_longest_name_count + ' символів)')
document.write('Книжка/ки з найдовшою назвою: ' + book_longest_name + ' (' + book_longest_name_count + ' символів)')
console.log('---------------------------------')

console.log('– знайти книжку/ки, які писали 2 автори')
document.write('<h3>– знайти книжку/ки, які писали 2 автори</h3>')
for (const book of arr_books) {
    if (book.authors.length === 2){
        console.log(book.book_name + ', author 1: ' + book.authors[0].author_name + ', author 2: ' + book.authors[1].author_name)
        document.write('<p>' + book.book_name + ', author 1: ' + book.authors[0].author_name + ', author 2: ' + book.authors[1].author_name + '</p>')
    }
}
console.log('---------------------------------')

console.log('– знайти книжку/ки, які писав 1 автор')
document.write('<h3>– знайти книжку/ки, які писав 1 автор</h3>')
for (const book of arr_books) {
    if (book.authors.length === 1){
        console.log(book.book_name + ', author: ' + book.authors[0].author_name)
        document.write('<p>' + book.book_name + ', author: ' + book.authors[0].author_name + '</p>')
    }
}