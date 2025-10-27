console.log('#ETGAxbEn8l')
console.log('– створити функцію, яка обчислює та повертає площу кола з радіусом r')

// function get_square_circle_num(circle_radius_num){
//     let result = Math.PI * circle_radius_num ** 2
//     return result
// }
let r = 10
let get_square_circle_num = (r) => Math.PI * r ** 2

console.log('r=' + r)
console.log('площа кола =' + get_square_circle_num(r))