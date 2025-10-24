console.log('#0Kxco1edSN')
console.log('– створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write')

function doc_write_text_as_x_li_of_ul(text_str, repeat_count_numb){
    document.write('<ul>')
    for (let i = 0; i < repeat_count_numb; i++) {
        // variant 1:
        // document.write('<li>' + text_str + '</li>')
        // variant 2:
        document.write(`<li>${text_str}</li>`)
    }
    document.write('</ul>')
}
let text='abc'
let repeat_count = 7
document.write('<p>text="' + text +'"</p>')
document.write('<p>repeat_count=' + repeat_count +'</p>')
doc_write_text_as_x_li_of_ul(text, repeat_count)