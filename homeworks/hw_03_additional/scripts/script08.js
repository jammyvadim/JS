
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