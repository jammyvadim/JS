console.log('#Jg0gPO00')
console.log('створити конвертор ваги з кг в фунти. дані заповнюються через інпут.')
console.log('При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок')

const form_kilo_to_pound = document.getElementById('form_kilo_to_pound')
const input_kilo = form_kilo_to_pound.input_kilo
const input_pound = form_kilo_to_pound.input_pound
const index_kilo_to_pound = 2.0462262

input_kilo.oninput = function (){
    input_pound.value = input_kilo.value * index_kilo_to_pound
}

input_pound.oninput = function (){
    input_kilo.value = input_pound.value / index_kilo_to_pound
}
