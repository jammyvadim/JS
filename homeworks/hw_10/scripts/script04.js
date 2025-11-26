console.log('#2VaLt4vDczH')
console.log('є сторінка, на якій є блок, в кому знаходиться цифра')
console.log('Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1')

let div_block_inner_text = document.getElementById('div_block').innerText
let div_block_number_local_storage = localStorage.getItem('div_block_number') || 0

let div_block_number = parseInt(div_block_inner_text) || 0

if(div_block_number < div_block_number_local_storage){
    div_block_number = div_block_number_local_storage
}

div_block_number++
document.getElementById('div_block').innerText = div_block_number
localStorage.setItem('div_block_number', div_block_number)



