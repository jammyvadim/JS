// #awLXL6TBzg
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
// За допомогою іф перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

console.log('------- script 11: #awLXL6TBzg -------')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// console.log(coursesAndDurationArray[1]["title"])
// console.log(coursesAndDurationArray[1].monthDuration)
// console.log(if (coursesAndDurationArray[1].monthDuration > 5){console.log('Супер')})

if (coursesAndDurationArray[0].monthDuration > 5){
    coursesAndDurationArray[0]['is_super'] = 'Супер'
}
if (coursesAndDurationArray[1].monthDuration > 5){
    coursesAndDurationArray[1]['is_super'] = 'Супер'
}
if (coursesAndDurationArray[2].monthDuration > 5){
    coursesAndDurationArray[2]['is_super'] = 'Супер'
}
if (coursesAndDurationArray[3].monthDuration > 5){
    coursesAndDurationArray[3]['is_super'] = 'Супер'
}
if (coursesAndDurationArray[4].monthDuration > 5){
    coursesAndDurationArray[4]['is_super'] = 'Супер'
}
if (coursesAndDurationArray[5].monthDuration > 5){
    coursesAndDurationArray[5]['is_super'] = 'Супер'
}

console.log(coursesAndDurationArray)


