// #3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let input_time_note='Введіть число в діапазоні [0; 60)'
let str_time= prompt(input_time_note)
let y=input_time_note
let time=0.001
time = +str_time

if (Number.isNaN(time)){
    y='Введений вираз "' + str_time + '" не являється числом. ' + input_time_note
}else if (time>=60){
    y='Введене число ' + time + ' >= 60. ' + input_time_note
}else if (time>=45){
    y='Число ' + time + ' попадає в четверту частину години [45; 60)'
}else if (time >=30){
    y='Число ' + time + ' попадає в третю частину години [30; 45)'
}else if (time >=15){
    y='Число ' + time + ' попадає в другу частину години [15; 30)'
}else if (time >=0){
    y='Число ' + time + ' попадає в першу частину години [0; 15)'
}else if (time < 0){
    y='Введене число ' + time + ' < 0. ' + input_time_note
}else{
    y='Невідома помилка. ' + input_time_note
}

console.log('------- script 6: #3ckURgvs -------')

console.log(y)