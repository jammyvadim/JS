console.log('#5hqyKTfmc')
console.log('– створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.')
console.log('let nums = [11,21,3];')
console.log('sortNums(nums,’ascending’) // [3,11,21]')
console.log('sortNums(nums,’descending’) // [21,11,3]')

function sortNums(array, direction){
    if (direction==='ascending') {
        return array.sort((a, b) => a-b)
    }else if (direction==='descending') {
        return array.sort((a, b) => b-a)
    }
}

let nums = [11,21,3]
console.log(nums)

nums = sortNums(nums, 'ascending')
console.log(nums)

nums = sortNums(nums, 'descending')
console.log(nums)