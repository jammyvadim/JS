console.log('#dFeorS3m7u')
console.log('– Знайти та вивести довжину наступних стрінгових значень')
console.log('"hello world", "lorem ipsum", "javascript is cool"')

// function get_str_length(str){
//     return str.length
// }

// let get_str_length = (str) => str.length

let get_str_length = (str) => 'Дожина виразу "' + str + '" = ' + str.length

let sentence1 = 'hello world'
let sentence2 = 'lorem ipsum'
let sentence3 = 'javascript is cool'

console.log(get_str_length(sentence1))
console.log(get_str_length(sentence2))
console.log(get_str_length(sentence3))

document.write('<p>' + get_str_length(sentence1) +'</p>')
document.write('<p>' + get_str_length(sentence2) +'</p>')
document.write('<p>' + get_str_length(sentence3) +'</p>')