console.log('#SIdMd0hQ')
console.log('– створити функцію, яка приймає масив та виводить кожен його елемент')

// function consol_log_arr_items(arr){
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }

let arr=[1, true, '', null, 100500, 'aaa']

let consol_log_arr_items = (arr) => {for (const arrElement of arr) {console.log(arrElement)}}

console.log('arr=[' + arr + ']')
consol_log_arr_items(arr)