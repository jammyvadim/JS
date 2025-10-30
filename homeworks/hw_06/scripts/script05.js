console.log('#59g0IsA')
console.log('– створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент')

// function doc_write_text_as_par(text_str){
// variant 1:
//     document.write('<p>' + text_str + '</p>')
// variant 2:
//     document.write(`<p>${text_str}</p>`)
// }

let text='abc'

let doc_write_text_as_par = (text_str) => document.write(`<p>${text_str}</p>`)

document.write('text="' + text +'"')
doc_write_text_as_par(text)