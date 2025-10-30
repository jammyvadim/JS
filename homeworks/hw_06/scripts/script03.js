console.log('#ClDsAm7xba7')
console.log('– Перевести до нижнього регістру наступні стрінгові значення')
console.log(' "HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL" ')

let sentence1 = 'HELLO WORLD'
let sentence2 = 'LOREM IPSUM'
let sentence3 = 'JAVASCRIPT IS COOL'

let get_LowerCase_str = (str) => str.toLowerCase()

console.log(get_LowerCase_str(sentence1))
console.log(get_LowerCase_str(sentence2))
console.log(get_LowerCase_str(sentence3))

document.write('<p>' + get_LowerCase_str(sentence1) +'</p>')
document.write('<p>' + get_LowerCase_str(sentence2) +'</p>')
document.write('<p>' + get_LowerCase_str(sentence3) +'</p>')