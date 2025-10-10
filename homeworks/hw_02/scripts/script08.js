// #KzrtqyQ – Скласти розклад на тиждень за домопогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let prompt_note = 'Введіть номер дня тижня, де 1 - понеділок, 7 - неділя'
let y, err=''
let prompt_value = prompt(prompt_note)
let i = +prompt_value

let schedule = [
    {Weekday: 'Monday', ls1: 'Maths', ls2: 'IT', ls3: 'Music', ls4: 'Physics', ls5: 'Biology'},
    {Weekday: 'Tuesday', ls1: 'English', ls2: 'Physics', ls3: 'PE', ls4: 'History', ls5: ''},
    {Weekday: 'Wednesday', ls1: 'Maths', ls2: 'IT', ls3: 'Music', ls4: '', ls5: 'Heals care'},
    {Weekday: 'Thursday', ls1: 'PE', ls2: '', ls3: 'IT', ls4: 'Physics', ls5: 'Biology'},
    {Weekday: 'Friday', ls1: 'IT', ls2: 'PE', ls3: 'Management', ls4: 'Maths', ls5: ''},
    {Weekday: 'Saturday', ls1: '', ls2: '', ls3: '', ls4: '', ls5: ''},
    {Weekday: 'Sunday', ls1: '', ls2: '', ls3: '', ls4: '', ls5: ''},
]


console.log('------- script 8: #KzrtqyQ -------')


if (Number.isNaN(i)) {
    console.log('Введений вираз "' + prompt_value + '" не являється числом. ' + prompt_note)
}else if (!Number.isInteger(i)) {
    console.log('Введене число ' + i + ' не являється цілим числом. ' + prompt_note)
}else if (i > 7) {
    console.log('Введене число ' + i + ' > 7. ' + prompt_note)
}else if (i <1) {
    console.log('Введене число ' + i + ' < 1. ' + prompt_note)
}else{
    console.log('Ви обрали день ' + i)

    switch (i) {
        case 1:
            console.log(schedule[0]);
            break;
        case 2:
            console.log(schedule[1]);
            break;
        case 3:
            console.log(schedule[2]);
            break;
        case 4:
            console.log(schedule[3]);
            break;
        case 5:
            console.log(schedule[4]);
            break;
        case 6:
            console.log(schedule[5]);
            break;
        case 7:
            console.log(schedule[6]);
            break;
        default:
            console.log('Неідома помилка. ' + prompt_note);
    }

    // альтернатиний варіант (без використання switch
    // i = i - 1
    // console.log(schedule[i])

}
