console.log('#bfoJuse4ZzP')
console.log('– Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.')
console.log('    let str = ‘Ревуть воли як ясла повні’;')
console.log('    let arr = stringToArray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]')


let str = 'Ревуть воли як ясла повні'

let stringToArray=(str)=>str.split(' ')

console.log(stringToArray(str))