let listOfItems = [
    'html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js'
];

document.write('<ul>')

// Variant 1:
// for (let i = 0; i <= listOfItems.length - 1; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`)
// }

// Variant 2:
// for (let i = 0; i <= listOfItems.length - 1; i++) {
//     document.write('<li>'+listOfItems[i] + '</li>')
// }

// Variant 3:
for (const item of listOfItems){
    document.write(`<li>${item}</li>`)
}

document.write('</ul>')