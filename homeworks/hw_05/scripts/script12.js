console.log('#kpsbSQCt2Lf')
console.log('– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах')
console.log('Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]')

// function change_items_of_arr(arr, index1, index2){
//     let valueOfIndex1 = arr[index1]
//     let valueOfIndex2 = arr[index2]
//     arr[index1]=valueOfIndex2
//     arr[index2]=valueOfIndex1
// }

let arr=[0, 10, -5, null, false, true]
let numberOfItem1=4
let numberOfItem2=5

let change_items_of_arr=(arr, numberOfItem1, numberOfItem2)=>{
    let valueOfIndex1 = arr[numberOfItem1]
    let valueOfIndex2 = arr[numberOfItem2]
    arr[numberOfItem1]=valueOfIndex2
    arr[numberOfItem2]=valueOfIndex1
}

document.write('<p>arr=[' + arr + ']</p>')
document.write('<p>numberOfItem1 = ' + numberOfItem1 + '</p>')
document.write('<p>numberOfItem2 = ' + numberOfItem2 + '</p>')
change_items_of_arr(arr, numberOfItem1, numberOfItem2)
document.write('<p>Після виклику функції change_items_of_arr:</p>')
document.write('<p>arr=[' + arr + ']</p>')
