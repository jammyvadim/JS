console.log('#mkGDenYnNjn.html')
console.log('Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)')
console.log('Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400')

// function exchange(sumUAH, currencyCourses, exchangeCurrency){
//     for (const currencyCourse of currencyCourses) {
//         if (currencyCourse.currency === exchangeCurrency){
//             return sumUAH / currencyCourse.course + ' (' + sumUAH + ' / ' + currencyCourse.course + ')'
//         }
//     }
// }

let sumUAH = 8500
let currencyCourses=[
    {
        currency: 'USD',
        course: 42.5
    },
    {
        currency: 'EUR',
        course: 48.50
    },
    {
        currency: 'UAH',
        course: 1
    }
]
let exchangeCurrency = 'USD'

let exchange=(sumUAH, currencyCourses, exchangeCurrency)=>{
    for (const currencyCourse of currencyCourses) {
        if (currencyCourse.currency === exchangeCurrency){
            return sumUAH / currencyCourse.course + ' (' + sumUAH + ' / ' + currencyCourse.course + ')'
        }
    }
}

document.write('<p> sumUAH = ' + sumUAH + '</p>')
// document.write('<p> currencyCourses = [' + ${currencyCourses} + ']</p>')
document.write('<p> exchangeCurrency = ' + exchangeCurrency + '</p>')
document.write('<p> exchange = ' + exchange(sumUAH, currencyCourses, exchangeCurrency) + '</p>')