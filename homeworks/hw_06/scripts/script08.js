console.log('#yo06d74c1C')
console.log('– є масив coursesAndDurationArray')
console.log('— відсортувати його за спаданням за monthDuration')
console.log('— відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців')
console.log('— за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}')

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// const sort = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration);
// const filter = sort.filter(item => item.monthDuration > 5);
// const map = filter.map((item,index) => {
//     item.id = index + 1;
//     return item;
// });
// console.log(map);

const map1 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(item => item.monthDuration > 5)
    .map((item,index) => {
        item.id = index + 1;
        return item;
    });
console.log(map1);