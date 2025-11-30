console.log('#NKB0tgWIK1G')
console.log('***PAGINATION')
console.log('зробити масив на 100 об’єктів та дві кнопки prev next')
console.log('при завантаженні сторінки з’являються перші 10 об’єктів.')
console.log('При натисканні next виводяться наступні 10 об’єктів')
console.log('При натисканні prev виводяться попередні 10 об’єктів')

let arr=[]
let arr_len = 0
let page_num = 1

const button_prev = document.getElementById('button_prev')
button_prev.classList.add('button_prev')

const button_next = document.getElementById('button_next')
button_next.classList.add('button_next')

// -------------СТВОРЮЄМО МАСИВ НА 100 ЕЛЕМЕНТІВ-----------
for (let i = 0; i < 100; i++) {
    let user_id = i+1
    arr.push({
        user_id: user_id,
        user_name:'name ' + user_id,
        amount: (Math.random() * 100).toFixed(2)
    })
}

arr_len = arr.length

function set_viewed_page_num(){
    localStorage.setItem('hw_10_10', JSON.stringify({viewed_page_num: page_num}))
}

function get_viewed_page_num(){
    if(!localStorage.getItem('hw_10_10')){
        set_viewed_page_num()
    }
    let loc_st_obj = JSON.parse(localStorage.getItem('hw_10_10'))
    return loc_st_obj.viewed_page_num
}

function set_buttons_disability(){
    if(page_num===1){
        button_prev.disabled=true
        button_next.disabled=false
    }else if(page_num===pages_count){
        button_prev.disabled=false
        button_next.disabled=true
    }else{
        button_prev.disabled=false
        button_next.disabled=false
    }
}

const page_capacity = 10
// The Math.ceil() static method always rounds up and returns the smallest integer
let pages_count = Math.ceil(arr_len / page_capacity)

const p_page_number = document.getElementById('p_page_number')
p_page_number.innerText = 'page ' + page_num + ' of ' + pages_count

const ul_arr_part = document.getElementById('ul_arr_part')

function arr_page_update(){
    ul_arr_part.innerHTML=''
    p_page_number.innerText = 'page ' + page_num + ' of ' + pages_count
    for (let j = (page_num - 1) * page_capacity; j < page_num * page_capacity; j++) {
        //це для останньої сторінки - щоб не додавались li-шки, якщо arr вже закінчився
        //(якщо кылькысть елементыв масиву не буде кратною 10):
        if(j < arr_len){
            const li_arr_item = document.createElement('li')
            li_arr_item.classList.add('li_arr_item')
            li_arr_item.innerText = JSON.stringify(arr[j])
            ul_arr_part.appendChild(li_arr_item)
        }
    }
}

page_num = get_viewed_page_num()
arr_page_update()
set_buttons_disability()

button_prev.onclick=function () {
    button_next.hidden = false
    if (page_num > 1) {
        page_num--
        arr_page_update()
    }
    set_viewed_page_num()
    page_num = get_viewed_page_num()
    set_buttons_disability()}

button_next.onclick=function () {
    button_prev.hidden = false
    if (page_num < pages_count) {
        page_num++
        arr_page_update()
    }
    set_viewed_page_num()
    page_num = get_viewed_page_num()
    set_buttons_disability()
}