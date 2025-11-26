console.log('#LhSfdhM3')
console.log('Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки')
console.log('Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html')
console.log('Інфу НЕ виводити в консоль, а малювати в DOM')

let arr= []
let str = localStorage.getItem('sessionsList')
const ul_index_05_sessions = document.getElementById('ul_index_05_sessions')

if (str === null){
    arr[0]='the page index05 has no visitors yer'
}else{
    arr = JSON.parse(str)
}

for (const item of arr) {
    const li_index_05_session=document.createElement('li')
    li_index_05_session.classList.add('li_index_05_session')
    li_index_05_session.innerText = item
    ul_index_05_sessions.append(li_index_05_session)
}


