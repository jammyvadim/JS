// #uwsz1RnTQJ1 – Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати, коли введені рівні числа.

let prompt_a=prompt('Введіть число а')
let prompt_b=prompt('Введіть число b')

let a = +prompt_a
let b = +prompt_b

let answ=''

if (Number.isNaN(a)){
    answ='Вираз а = "' + prompt_a + '" не являється числом'
}else if (Number.isNaN(b)){
    answ='Вираз а = "' + prompt_b + '" не являється числом'
}else if (a>b){
    answ='Число ' + a + ' більше ніж число ' + b
}else if (a<b){
    answ='Число ' + b + ' більше ніж число ' + a
}else if (a=b){
    answ='Число ' + a + ' дорівнює числу ' + b
}else{
    answ='Невідома помилка.'
}

console.log('------- script 9: #uwsz1RnTQJ1 -------')

console.log(answ)