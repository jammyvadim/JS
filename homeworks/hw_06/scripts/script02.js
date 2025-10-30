console.log('#8lld9HMxXWB')
console.log('– Перевести до великого регістру наступні стрінгові значення')
console.log('"hello world", "lorem ipsum", "javascript is cool"')

let sentence1 = 'hello world'
let sentence2 = 'lorem ipsum'
let sentence3 = 'javascript is cool'

let get_upper_str = (str) => str.toUpperCase()

console.log(get_upper_str(sentence1))
console.log(get_upper_str(sentence2))
console.log(get_upper_str(sentence3))

document.write('<p>' + get_upper_str(sentence1) +'</p>')
document.write('<p>' + get_upper_str(sentence2) +'</p>')
document.write('<p>' + get_upper_str(sentence3) +'</p>')