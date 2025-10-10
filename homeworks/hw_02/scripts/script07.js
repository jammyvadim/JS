// #UMoNq4biWGe – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let input_day_note='Введіть ціле число в діапазоні [1; 31]'
let str_day= prompt(input_day_note)
let y=input_day_note
let day=0.001

day = +str_day

if (Number.isNaN(day)){
    y='Введений вираз "' + str_day + '" не являється числом. ' + input_day_note
}else if (!Number.isInteger(day)){
    y='Введене число ' + day + ' не являється цілим числом. ' + input_day_note
}else if (day > 31){
    y='Введене число ' + day + ' > 31. ' + input_day_note
}else if (day > 20){
    y='Число ' + day + ' попадає в третю декаду місяця (20; 31]'
}else if (day > 10){
    y='Число ' + day +  ' попадає в другу декаду місяця (10; 20]'
}else if (day > 0){
    y='Число ' + day + ' попадає в першу декаду місяця (0; 10]'
}else if (day <= 0){
    y='Введене число ' + day + ' <= 0. ' + input_day_note
}else{
    y='Невідома помилка. ' + input_day_note
}

console.log('------- script 7: #UMoNq4biWGe -------')

console.log(y)