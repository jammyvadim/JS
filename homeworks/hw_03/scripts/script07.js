let users = [
    {name: 'vasya', age: 31, stat: false},
    {name: 'petya', age: 30, stat: true},
    {name: 'kolya', age: 29, stat: true},
    {name: 'olya', age: 28, stat: false},
    {name: 'max', age: 30, stat: true},
    {name: 'anya', age: 31, stat: false},
    {name: 'oleg', age: 28, stat: false},
    {name: 'andrey', age: 29, stat: true},
    {name: 'masha', age: 30, stat: true},
    {name: 'olya', age: 31, stat: false},
    {name: 'max', age: 31, stat: true}
];

document.write('<div>')
document.write('<h3>')
document.write('Список користувачів зі статусом true:')
document.write('</h3>')
document.write('<ul>')
for (const user of users) {
    if (user.stat){
        document.write('<li>')
            document.write(user.name)
            document.write(', ')
            document.write(user.age)
            document.write(', ')
            document.write(user.stat)
        document.write('</li>')
    }
}
document.write('/<ul>')
document.write('</div>')

document.write('<div>')
document.write('<h3>')
document.write('Список користувачів зі статусом false:')
document.write('</h3>')
document.write('<ul>')
for (const user of users) {
    if (!user.stat){
        document.write('<li>')
        document.write(user.name)
        document.write(', ')
        document.write(user.age)
        document.write(', ')
        document.write(user.stat)
        document.write('</li>')
    }
}
document.write('/<ul>')
document.write('</div>')

document.write('<div>')
document.write('<h3>')
document.write('Список користувачів, які старші за 30 років:')
document.write('</h3>')
document.write('<ul>')
for (const user of users) {
    if (user.age>30){
        document.write('<li>')
        document.write(user.name)
        document.write(', ')
        document.write(user.age)
        document.write(', ')
        document.write(user.stat)
        document.write('</li>')
    }
}
document.write('/<ul>')
document.write('</div>')
