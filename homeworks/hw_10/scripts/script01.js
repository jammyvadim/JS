console.log('#sH8c4er')
console.log('– Створити довільний елемент з id = text та створити кнопку.')
console.log('Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.')

let is_text_hidden=false

const button_hide_text = document.getElementById('button_hide_text')
const text = document.getElementById('text')

button_hide_text.onclick=function (){
    if(is_text_hidden === false){
        text.hidden = true
        button_hide_text.innerText = 'show text'
        is_text_hidden = true
    }else{
        text.hidden = false
        button_hide_text.innerText = 'hide text'
        is_text_hidden = false
    }
}
