console.log('#pOeHKct')
console.log('– Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)')

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

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

console.log(users.sort((user1, user2) => user1.id - user2.id));