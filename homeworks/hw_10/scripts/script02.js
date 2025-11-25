console.log('#j693ca8')
console.log('– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію')
console.log('При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік,')
console.log('чи менше він за 18, та повідомити про це користувача')

const input_user_age = document.getElementById('input_user_age')
const button_user_age_confirm = document.getElementById('button_user_age_confirm')
const h3_message_for_user = document.getElementById('h3_message_for_user')

button_user_age_confirm.onclick =function() {
    if (input_user_age.value > 0 && input_user_age.value < 18) {
        h3_message_for_user.innerText = 'You are under 18 years old'
    }else if (input_user_age.value >= 18 && input_user_age.value <=150){
        h3_message_for_user.innerText = ''
    }else{
        h3_message_for_user.innerText = 'Input correct age (1-150)'
    }
}