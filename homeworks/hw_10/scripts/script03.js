console.log('#ymAmN2xJ')
console.log('Створити форму з трьома полями для name, surname, age та кнопкою.')
console.log('При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.')
console.log('Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом')

const div_result = document.getElementById('div_result')

const form_main = document.forms.form_main

form_main.onsubmit=function (e) {
    e.preventDefault()
    const name_value = form_main.name.value
    const surname_value = form_main.surname.value
    const age_value = form_main.age.value
    let obj={name_value, surname_value, age_value}
    console.log(obj)
    document.getElementById('div_result').innerText = 'Result obj = { name: ' + obj.name_value + ', surname: ' + surname_value + ', age: ' + age_value + '}'

}


