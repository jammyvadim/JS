console.log('1. Створити пустий масив та :')
document.write('<h3>1. Створити пустий масив та :</h3>')

console.log('       a. заповнити його 50 парними числами за допомоги циклу')
document.write('<p>       a. заповнити його 50 парними числами за допомоги циклу</p>')
let arr_even=[]
let i = 0
document.write('arr_even=[')
for (i = 0; i < 50; i++) {
    arr_even[i]=(i+1)*2
    if (i < 49){
        document.write(arr_even[i] + ', ')
    }else{
        document.write(arr_even[i] + ']')
    }
}
console.log('arr_even=[' + arr_even + ']')
console.log('---------------------------------')

console.log('    b. заповнити його 50 непарними числами за допомоги циклу')
document.write('<p>    b. заповнити його 50 непарними числами за допомоги циклу</p>')
document.write('arr_odd=[')
let arr_odd=[]
i = 0
for (i = 0; i < 50; i++) {
    arr_odd[i]=(i+1)*2 - 1
    if (i < 49){
        document.write(arr_odd[i] + ', ')
    }else{
        document.write(arr_odd[i] + ']')
    }
}
console.log('arr_odd=[' + arr_odd + ']')
console.log('---------------------------------')

console.log('    c. Заповнити масив 20-ма рандомними числами.')
document.write('<p>    c. Заповнити масив 20-ма рандомними числами.</p>')
document.write('arr_rnd=[')
let arr_rnd=[]
i = 0
for (i = 0; i < 20; i++) {
    arr_rnd[i]=Math.random()
    if (i < 19){
        document.write(arr_rnd[i] + ', ')
    }else{
        document.write(arr_rnd[i] + ']')
    }
}
console.log('arr_rnd=[' + arr_rnd + ']')
console.log('---------------------------------')

console.log('    d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732')
document.write('<p>    d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732</p>')
document.write('arr_rnd_in_diap=[')
let arr_rnd_in_diap=[]
i = 0
for (i = 0; i < 20; i++) {
    // Math.floor(Math.random() * (max - min + 1) + min)
    arr_rnd_in_diap[i]=Math.floor(arr_rnd[i] * (732 - 8 + 1) + 8)
    if (i < 19){
        document.write(arr_rnd_in_diap[i] + ', ')
    }else{
        document.write(arr_rnd_in_diap[i] + ']')
    }
}
console.log('arr_rnd_in_diap=[' + arr_rnd_in_diap + ']')
console.log('---------------------------------')

console.log('2. Вивести за допомогою console.log кожен третій елемент')
document.write('<h3>2. Вивести за допомогою console.log кожен третій елемент</h3>')
i = 0
for (i = 2; i < arr_rnd_in_diap.length; i+=3) {
    console.log('arr_rnd_in_diap[' + i + '] = ' + arr_rnd_in_diap[i])
    document.write('<p>arr_rnd_in_diap[' + i + '] = ' + arr_rnd_in_diap[i] + '</p>')
}
console.log('---------------------------------')

console.log('3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.')
document.write('<h3>3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.</h3>')
i = 0
for (i = 2; i < arr_rnd_in_diap.length; i+=3) {
    if (arr_rnd_in_diap[i] % 2 ===0){
        console.log('arr_rnd_in_diap[' + i + '] = ' + arr_rnd_in_diap[i])
        document.write('<p>arr_rnd_in_diap[' + i + '] = ' + arr_rnd_in_diap[i] + '</p>')
    }
}
console.log('---------------------------------')

console.log('4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив')
document.write('<h3>4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив</h3>')
let arr_every_third_even=[]
i = 0
let j = 0
for (i = 2; i < arr_rnd_in_diap.length; i+=3) {
    if (arr_rnd_in_diap[i] % 2 ===0){
        arr_every_third_even[j] = arr_rnd_in_diap[i]
        j++
    }
}
console.log(arr_every_third_even)
document.write(arr_every_third_even)
console.log('---------------------------------')

console.log('5. Вивести кожен елемент масиву, сусід справа якого є парним')
document.write('<h3>5. Вивести кожен елемент масиву, сусід справа якого є парним</h3>')
i=0
for (i = 0; i < arr_rnd_in_diap.length - 1; i++) {
   if (arr_rnd_in_diap[i+1]%2===0){
       console.log('arr_rnd_in_diap[' + i + '] = ' + arr_rnd_in_diap[i])
       document.write('<p>arr_rnd_in_diap[' + i + '] = ' + arr_rnd_in_diap[i] + '</p>')    }
}
console.log('---------------------------------')

console.log('6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.')
document.write('<h3>6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.</h3>')
let arr_prices=[100,250,50,168,120,345,188]
i=0
let price_total=0
for (const price of arr_prices) {
    price_total = price_total + price
}
let price_average = price_total / arr_prices.length
console.log('average price = ' + price_average)
document.write('average price = ' + price_average)
console.log('---------------------------------')

console.log('7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.')
document.write('<h3>7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.</h3>')
let arr_rnd_7=[]
let arr_rnd_7_5x=[]
i = 0
document.write('arr_rnd_7=[')
for (i = 0; i < 7; i++) {
    arr_rnd_7[i]=Math.random()
    if (i < 6){
        document.write(arr_rnd_7[i] + ', ')
    }else{
        document.write(arr_rnd_7[i] + ']')
    }
}
i=0
document.write('<p>arr_rnd_7_5x=[')
for (i = 0; i < arr_rnd_7.length; i++) {
    arr_rnd_7_5x[i]=arr_rnd_7[i] * 5
    if (i < 6){
        document.write(arr_rnd_7_5x[i] + ', ')
    }else{
        document.write(arr_rnd_7_5x[i] + ']</p>')
    }
}
console.log('arr_rnd_7=[' + arr_rnd_7 + ']')
console.log('arr_rnd_7_5x=[' + arr_rnd_7_5x + ']')
console.log('---------------------------------')

console.log('8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.')
document.write('<h3>8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.</h3>')
let arr_8 = [0, 'sdasd', null, false,100500, 0.5]
let arr_8_numbers_only=[]
i=0
j=0
for (i = 0; i < arr_8.length; i++) {
   if (typeof(arr_8[i])==='number'){
       arr_8_numbers_only[j]=arr_8[i]
       j++
   }
}
console.log('arr_8=' + arr_8)
console.log('arr_8_numbers_only=' + arr_8_numbers_only)
document.write('<p>[' + arr_8 + ']</p>')
document.write('<p>[' + arr_8_numbers_only + ']</p>')
console.log('---------------------------------')