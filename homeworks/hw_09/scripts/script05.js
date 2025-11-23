console.log('#n/a')
console.log('– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)')
console.log('Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись')
console.log('значення окремих властивостей, для властивості modules зробити список з елементами')
console.log('Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом')

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const item of coursesArray) {

    const div_item= document.createElement('div')
    div_item.classList.add('div_item')

    const item_title = document.createElement('h2')
    item_title.classList.add('item_title')
    item_title.innerText=item.title
    div_item.append(item_title)

    const div_duration = document.createElement('div')
    div_duration.classList.add('div_duration')

    const monthDuration = document.createElement('h3')
    monthDuration.classList.add('monthDuration')
    monthDuration.innerText = 'monthDuration: ' + item.monthDuration
    div_duration.append(monthDuration)

    const hourDuration = document.createElement('h3')
    hourDuration.classList.add('hourDuration')
    hourDuration.innerText = 'hourDuration: ' + item.hourDuration
    div_duration.append(hourDuration)

    div_item.append(div_duration)

    const module_list = document.createElement('ul')
    module_list.classList.add('module_list')
    for (const item_module of item.modules) {
        const module_name = document.createElement('li')
        module_name.classList.add('module_name')
        module_name.innerText = item_module
        module_list.append(module_name)
    }

    div_item.append(module_list)

    document.body.appendChild(div_item)
}