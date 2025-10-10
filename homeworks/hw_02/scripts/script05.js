// #bAUsaq6LI – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let prompt_note='Введіть одне з наступних чисел: 1, 0, -3 або будь-яке інше число'
let str_x=prompt(prompt_note)
let x=+str_x
let y=false
let result_note= ''

if (Number.isNaN(x)){
    result_note='Введений вираз "' + str_x + '" не є числовимю. ' + prompt_note
    y=false
}else if (x!==0) {
    result_note='Ви ввели число ' + x
    y=true
}else if (x==0){
    result_note='Ви ввели число ' + x
    y=false
}else {
    result_note='Неідома помилка ' + x
    y=false
}

console.log('------- script 5: #bAUsaq6LI -------')

console.log(result_note)
console.log(y)