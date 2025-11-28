console.log('#kUSgFqWY')
console.log('Створити 3 інпута та кнопку.')
console.log('Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.')
console.log('При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.')

const form_table_parameters = document.forms.form_table_parameters

const table_main = document.getElementById('table_main')

form_table_parameters.onsubmit=function(e){
    table_main.innerText=''
    e.preventDefault()
    let row_count = form_table_parameters.input_row_count.value
    let column_count = form_table_parameters.input_column_count.value
    let cell_value = form_table_parameters.input_cell_value.value

    for (let i = 0; i < row_count; i++) {
        const table_main_tr = document.createElement('tr')
        table_main_tr.classList.add('table_main_tr')
        table_main.appendChild(table_main_tr)

        for (let j = 0; j < column_count; j++) {

            const table_main_th = document.createElement('th')
            table_main_th.classList.add('table_main_th')
            table_main.appendChild(table_main_th)

            const table_main_td = document.createElement('td')
            table_main_td.classList.add('table_main_td')
            table_main_td.innerText = cell_value
            table_main.appendChild(table_main_td)
        }
    }

}

