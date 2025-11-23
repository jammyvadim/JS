console.log('#jeBqHV525U5')
console.log('Є масив let coursesAndDurationArray')
console.log('Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration')
console.log('Завдання робити через цикли.')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    const div = document.createElement('div')
    div.innerText = 'Title: ' + item.title + '; monthDuration: ' + item.monthDuration
    document.body.appendChild(div)
}

