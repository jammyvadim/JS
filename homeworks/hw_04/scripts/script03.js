console.log('#Mbiz5K4yFe7')
console.log('– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r')


function get_square_circle_num(circle_radius_num){
    return Math.PI * circle_radius_num ** 2
}

function get_square_cylinder_num(cylinder_height_num, cylinder_radius_num){
    let s=get_square_circle_num(cylinder_radius_num)
    return s * cylinder_height_num
}

let h= 100
let r = 10

console.log('h=' + h)
console.log('r=' + r)
console.log('get_square_cylinder_num(h,r)=' + get_square_cylinder_num(h,r))