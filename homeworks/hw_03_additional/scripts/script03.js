console.log('#qLQLJSeN7i')
let arr = [2,17,13,6,22,31,45,66,100,-18]
let i =0
console.log('1. перебрати його циклом while')
    while (i < arr.length){
        console.log(arr[i])
        i++
    }

console.log('---------------------------------')

console.log('2. перебрати його циклом for')

    // Variant 1
    // for (const item of arr){
    //     console.log(item)
    // }

    // Variant 2
    i=0
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

console.log('---------------------------------')

console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом')
    i=0
    while (i < arr.length){
        if (i % 2 !== 0){
            console.log('arr[' + i + ']=' + arr[i])
        }
        i++
    }

console.log('---------------------------------')

console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом')
    i=0
    for (i = 0; i < arr.length; i++) {
        if (i % 2 !== 0){
            console.log('arr[' + i + ']=' + arr[i])
        }
    }

console.log('---------------------------------')

console.log('5. перебрати циклом while та вивести  числа тільки парні  значення')
    i=0
    while (i < arr.length){
        if (arr[i] % 2 == 0){
            console.log(arr[i])
        }
        i++
    }

console.log('---------------------------------')


console.log('6. перебрати циклом for та вивести числа тільки парні значення')

    // Variant 1
    for (const item of arr){
        if (item % 2 == 0){
            console.log(item)
        }
    }

    // Variant 2
    // i=0
    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 == 0){
    //         console.log(arr[i])
    //     }
    // }

console.log('---------------------------------')

console.log('7. замінити кожне число, кратне 3, на слово “okten”')
    for (const item of arr){
        if (item % 3 == 0){
            console.log(item +' --> okten')
        }else{
            console.log(item)
        }
    }

console.log('---------------------------------')

console.log('8. вивести масив у зворотньому порядку.')

    // Variant 1
    // i = arr.length
    // for (i = arr.length-1; i >= 0; i--) {
    //     console.log(arr[i])
    // }

    // Variant 2
    i = 0
    let j = arr.length - 1
    for (i = 0; i < arr.length; i++) {
        console.log(arr[j-i])
    }


console.log('---------------------------------')

console.log('9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)')

console.log('9.1.----------')
    i = arr.length - 1
    while (i >=0){
        console.log(arr[i])
        i--
    }

console.log('9.2.----------')
    i = arr.length - 1
    for (i = arr.length - 1; i >=0; i--) {
        console.log(arr[i])
    }

console.log('9.3.----------')
    i = arr.length - 1
    while (i >= 0){
        if (i % 2 !== 0){
            console.log('arr[' + i + ']=' + arr[i])
        }
        i--
    }

console.log('9.4.----------')
    i = arr.length - 1
    for (i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0){
            console.log('arr[' + i + ']=' + arr[i])
        }
    }

console.log('9.5.----------')
    i = arr.length - 1
    while (i >= 0){
        if (arr[i] % 2 == 0){
            console.log(arr[i])
        }
        i--
    }

console.log('9.6.----------')
    i = arr.length - 1
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }

console.log('9.7.----------')
    let arr_reversed = arr.reverse()
    for (const item of arr){
        if (item % 3 == 0){
            console.log(item +' --> okten')
        }else{
            console.log(item)
        }
    }