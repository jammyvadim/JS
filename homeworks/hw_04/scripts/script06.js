console.log('#hOL6126')
console.log('– створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий')

function doc_write_text_as_3_li_of_ul(text_str){
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        // variant 1:
        document.write('<li>' + text_str + '</li>')
        // variant 2:
        // document.write(`<li>${text_str}</li>`)
    }
    document.write('</ul>')
}
let text='abc'
document.write('text="' + text +'"')
doc_write_text_as_3_li_of_ul(text)