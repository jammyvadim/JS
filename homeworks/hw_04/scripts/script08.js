console.log('#gEFoxMMO')
console.log('– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write')

function doc_write_arr_as_ul(arr){
    document.write('<ul>')
    for (let i = 0; i < arr.length; i++){
        document.write('<li>' + arr[i] + '</li>')
    }
    document.write('</ul>')
}
let arr=['abc', 25, true, 100500, 'bca', false, 0]
// document.write(`<p>${arr}</p>`)
doc_write_arr_as_ul(arr)