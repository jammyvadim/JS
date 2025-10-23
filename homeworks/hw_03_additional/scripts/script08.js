
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let UsersAndCities=[]
let i=0

let user_adress={}
let user_with_address={}

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            // UsersAndCities[i] = {...user,...city}
            user_with_address = user
            user_adress = city
            user_with_address.address = user_adress
            UsersAndCities[i]=user_with_address
            i++
        }
    }
}
console.log('array1:')
console.log(usersWithId)
console.log('array2:')
console.log(citiesWithId)
console.log('array1+array2 (linked by id==user_id:')
console.log(UsersAndCities)
console.log('<p>--------------------------------------------------------------------------</p>')


console.log('<p>– Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.</p>')
let arr=[]
for (let i = 0; i < 9; i++) {
    arr[i]=i
}
console.log('arr=[' + arr + ']')
console.log('Парні числа з масиву arr[]:')
for (const item of arr) {
    if (item%2===0 & item !==0 ){
        console.log(item)
    }
}
console.log('<p>--------------------------------------------------------------------------</p>')

console.log('– Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.')
let arr2 = []
i=0
for (i = 0; i < arr.length; i++) {
    arr2[i]=arr[i]
}
console.log('arr2=arr=[' + arr2 + ']')
console.log('<p>--------------------------------------------------------------------------</p>')

console.log('– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.')
let arr_chars=['a', 'b', 'c']
let word=''
i=0
for (i = 0; i < arr_chars.length; i++){
    word=word + arr_chars[i]
}
console.log('word="' + word + '"')
console.log('<p>--------------------------------------------------------------------------</p>')

console.log('– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.')
i=0
word=''
while (i < arr_chars.length){
    word=word+arr_chars[i]
    i++
}
console.log('word="' + word + '"')
console.log('<p>--------------------------------------------------------------------------</p>')

console.log('– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.')
word=''
for (const item_char of arr_chars) {
    word=word + item_char
}
console.log('word="' + word + '"')

