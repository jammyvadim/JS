console.log('#nkMXISv')
console.log('– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)')
console.log('створити пустий масив, наповнити його 10 об’єктами Client')

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

    clients = [
        new Client(
            1,
            'name01',
            'surname01',
            'email01@mailbox.com',
            '+380000000001',
            [
                new Product('product 0010', 99),
                new Product('product 0020', 199),
                new Product('product 0060', 599)
            ]
        ),
        new Client(
            2,
            'name02',
            'surname02',
            'email02@mailbox.com',
            '+380000000002',
            [
                new Product('product 0010', 99),
                new Product('product 0060', 599)
            ]
        ),
        new Client(
            3,
            'name03',
            'surname03',
            'email03@mailbox.com',
            '+380000000003',
            [
                new Product('product 0010', 99),
                new Product('product 0030', 299),
                new Product('product 0060', 599),
                new Product('product 0040', 399)
            ]
        ),
        new Client(
            4,
            'name04',
            'surname04',
            'email04@mailbox.com',
            '+380000000004',
            [
                new Product('product 0100', 999)            ]
        ),
        new Client(
            5,
            'name05',
            'surname05',
            'email05@mailbox.com',
            '+380000000005',
            [
                new Product('product 0030', 299),
                new Product('product 0060', 599),
                new Product('product 0080', 799)
            ]
        ),
        new Client(
            6,
            'name06',
            'surname06',
            'email06@mailbox.com',
            '+380000000006',
            [
                new Product('product 0060', 599),
                new Product('product 0040', 399)            ]
        ),
        new Client(
            7,
            'name07',
            'surname07',
            'email07@mailbox.com',
            '+380000000007',
            [
                new Product('product 0010', 99),
                new Product('product 0030', 299),
                new Product('product 0020', 199)
            ]
        ),
        new Client(
            8,
            'name08',
            'surname08',
            'email09@mailbox.com',
            '+380000000008',
            [
                new Product('product 0010', 99),
                new Product('product 0030', 299),
                new Product('product 0060', 599),
                new Product('product 0040', 399),
                new Product('product 0050', 499)
            ]
        ),
        new Client(
            9,
            'name09',
            'surname09',
            'email09@mailbox.com',
            '+380000000009',
            [
                new Product('product 0040', 399)
            ]
        ),
        new Client(
            10,
            'name10',
            'surname10',
            'email10@mailbox.com',
            '+380000000010',
            [
                new Product('product 0010', 99),
                new Product('product 0050', 499)
            ]
        )
    ]

console.log(clients)