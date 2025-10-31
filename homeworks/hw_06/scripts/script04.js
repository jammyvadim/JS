console.log('#0b89BkYZwu')
console.log('– Є “брудна” стрінга let str = ‘ dirty string   ‘. Почистити її від зайвих пробілів.')

let str=' dirty string   '
console.log('"брудна” стрінга = "' + str + '"')
document.write('<p>"брудна” стрінга = "' + str + '"</p>')
str=str.trim()
console.log('"чиста” стрінга = "' + str + '"')
document.write('<p>"чиста” стрінга = "' + str + '"</p>')

console.log('---------------------')
str=' dirty     string   '
console.log('дуже "брудна” стрінга = "' + str + '"')
document.write('<p>дуже "брудна” стрінга = "' + str + '"</p>')
str=str.trim()
let very_clear_string=str[0]
for (let i = 1; i < str.length ; i++) {
    if (str[i-1] === ' ') {
        if (str[i] !== ' '){
            very_clear_string = very_clear_string + str[i]
        }
    }else {
        very_clear_string = very_clear_string + str[i]
    }
}
console.log('дуже "чиста” стрінга = "' + very_clear_string + '"')
document.write('<p>дуже "чиста” стрінга = "' + very_clear_string + '"</p>')
