console.log('#bq1zkx7WP')
console.log('створити сторінку з довільним блоком, в середині якого є значення “100грн”')
console.log('при перезавантаженні сторінки до значення додається по 10грн,')
console.log('але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.')
console.log('При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається')

const start_price = 100
const price_increase = 10
let increase_count = 0
const currency_name = 'грн'
const h3_price = document.getElementById('h3_price')
let prev_visit_date = new Date()
const current_visit_date = new Date()
let obj={
    prev_visit_date: current_visit_date,
    increase_count: increase_count
}

if (localStorage.getItem('js_hw_10_09')){
    obj = JSON.parse(localStorage.getItem('js_hw_10_09'))
    increase_count = obj.increase_count
    prev_visit_date = new Date(obj.prev_visit_date)
    let date_diff= current_visit_date.getTime() - prev_visit_date.getTime()
    if(date_diff > 10000){
        increase_count++
        obj.increase_count = increase_count
    }
    document.getElementById('p_diff_between_dates').innerText = 'reloaded after ' + date_diff/1000 + ' sec'
    obj.prev_visit_date = current_visit_date
}

localStorage.setItem('js_hw_10_09', JSON.stringify(obj))

h3_price.innerText = start_price + price_increase * increase_count + ' ' + currency_name

