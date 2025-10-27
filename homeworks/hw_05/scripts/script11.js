console.log('#EKRNVPM')
console.log('– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13')

// function sum_items_of_arr(arr){
//     let arr_with_numbers=[]
//     // створюємо окремий масив виключно з чисел, які є в основному масиві
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             arr_with_numbers.push(arr[i])
//         }
//     }
//     // якщо в основному масиві немає жодного числа, виводимо помилку
//     if (arr_with_numbers.length===0){
//         return 'У масиві немає числових елементів'
//     }else {
//         let sum_of_items = 0
//         for (let i = 0; i < arr_with_numbers.length; i++) {
//             sum_of_items = sum_of_items + arr_with_numbers[i]
//         }
//         return sum_of_items
//     }
// }

let arr=[0, 10, -5, null, false, true]
let arr2=['sasd', '10', '', null, false, true]

let sum_items_of_arr=(arr)=>{
    let arr_with_numbers=[]
    // створюємо окремий масив виключно з чисел, які є в основному масиві
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arr_with_numbers.push(arr[i])
        }
    }
    // якщо в основному масиві немає жодного числа, виводимо помилку
    if (arr_with_numbers.length===0){
        return 'У масиві немає числових елементів'
    }else {
        let sum_of_items = 0
        for (let i = 0; i < arr_with_numbers.length; i++) {
            sum_of_items = sum_of_items + arr_with_numbers[i]
        }
        return sum_of_items
    }
}

document.write('<h3>Якщо масив містить числа</h3>')
document.write('<p>arr=[' + arr + ']</p>')
document.write('Сума чисел з масиву: '+sum_items_of_arr(arr))

document.write('<h3>Якщо масив не містить жодного числа</h3>')
document.write('<p>arr2=[' + arr2 + ']</p>')
document.write('Сума чисел з масиву: '+sum_items_of_arr(arr2))