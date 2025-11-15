console.log('#XjJuucOMR0')
console.log('– Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone')
console.log('створити пустий масив, наповнити його 10 об’єктами new User(….)')

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user = new User(1, 'Vadim', 'Kuznetsov', '', '+380971111111');
console.log(user);

let users = [
    new User(1, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(2, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(3, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(4, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(5, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(6, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(7, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(8, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(9, 'Vadim', 'Kuznetsov', '', '+380971111111'),
    new User(10, 'Vadim', 'Kuznetsov', '', '+380971111111'),
];
console.log(users);