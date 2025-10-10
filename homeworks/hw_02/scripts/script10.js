// #iBvqtjEm – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код, який буде присвоювати змінній х значення “default”,
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let prompt_note='Введіть будь-яке значення х'
let prompt_value = prompt(prompt_note)
let prompt_value_number= +prompt_value
let x=''
let answ_note=''

console.log('------- script 10: #iBvqtjEm -------')

answ_note = 'Ви ввели "' + prompt_value +'"'

if (!prompt_value){
    x = 'default'
}else if (!Number.isFinite(prompt_value_number)){
    x = '"' + prompt_value + '"'
}else if (!prompt_value_number) {
    x = 'default'
}else if (Number.isFinite(prompt_value_number)){
    x = prompt_value_number
}else{
    x = prompt_value
}

console.log(answ_note)
console.log('x=' + x)