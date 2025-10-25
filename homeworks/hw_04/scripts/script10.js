console.log('#pghbnSB')
console.log('– створити функцію яка повертає найменьше число з масиву')

function min_item_of_arr(arr){
    let result=''
    let arr_with_numbers=[]
    // створюємо окремий масив виключно з чисел, які є в основному масиві
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arr_with_numbers.push(arr[i])
        }
    }
    // якщо в основному масиві немає жодного числа, виводимо помилку
    if (arr_with_numbers.length===0){
        result = 'У масиві немає числових елементів'
    }else {
        let min_item = arr_with_numbers[0]
        for (let i = 1; i < arr_with_numbers.length; i++) {
            if (arr_with_numbers[i] < min_item) {
                min_item = arr_with_numbers[i]
            }
        }
        result = 'Мінімальне число з масиву = ' + min_item
    }
    return result
    // return arr_with_numbers
    // document.write(result)
}

let arr=[0, 10, -5, null, false, true]
document.write('<p>arr=[' + arr + ']</p>')
document.write(min_item_of_arr(arr))
