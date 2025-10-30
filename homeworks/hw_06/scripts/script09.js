console.log('#bovDJDTIjt')
console.log('– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.')

// function doc_write_arr_obj(arr){
//
//     for (let i = 0; i < arr.length; i++){
//         document.write('<div>')
//         document.write('user ' + i + ': ')
//         document.write('id: ' + arr[i].id + ', ')
//         document.write('name: ' + arr[i].name + ', ')
//         document.write('age: ' + arr[i].age)
//         document.write('</div>')
//     }
// }

let arr=[
    {
        id: 1,
        name: 'Vasia',
        age: 30
    },
    {
        id: 2,
        name: 'Petia',
        age: 32
    },
    {
        id: 3,
        name: 'Marusia',
        age: 18
    },
]

let doc_write_arr_obj = (arr) =>{

    for (let i = 0; i < arr.length; i++){
        document.write('<div>')
        document.write('user ' + i + ': ')
        document.write('id: ' + arr[i].id + ', ')
        document.write('name: ' + arr[i].name + ', ')
        document.write('age: ' + arr[i].age)
        document.write('</div>')
    }
}

doc_write_arr_obj(arr)