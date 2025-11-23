console.log('#8Nmt60ZT')
console.log('– створити блок,')
console.log('– додати йому класи wrap, collapse, alpha, beta')
console.log('– додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту')
console.log('– додати цей блок в body.')
console.log('– клонувати його повністю, та додати клон в body.')

const div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

// document.body.appendChild(div)

const cloneNode = div.cloneNode(true);

// document.body.appendChild(cloneNode)

document.body.append(div, cloneNode);