console.log('#RbQGnH5DuC')
console.log('В localStorage зберігаються масиви.')
console.log('Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт')
console.log('сигнатура функції –')
console.log('addToLocalStorage(arrayName:string,objToAdd:any{}):void')

let arr_local_storage=[]
let form_main = document.getElementById('id_form_main')
let ul_local_storage = document.getElementById('ul_local_storage')

for (let i = 0; i < localStorage.length; i++) {
     const li_localStorage_item = document.createElement('li')
     li_localStorage_item.classList.add('li_localStorage_item')
     arr_local_storage[i] = localStorage.key(i)
     li_localStorage_item.innerText = arr_local_storage[i]
     ul_local_storage.append(li_localStorage_item)
}

form_main.onsubmit=function(){
    let obj={
        customer_name: form_main.input_customer_name.value,
        customer_city: form_main.input_customer_city.value,
        customer_phone: form_main.input_customer_phone.value
    }
    let arr = []
    for (const item of arr_local_storage) {
        if (item===form_main.input_arrayName.value){
            arr = JSON.parse(localStorage.getItem(form_main.input_arrayName.value))
        }
    }
    arr.push([obj])
    localStorage.setItem(form_main.input_arrayName.value,JSON.stringify(arr))
}
