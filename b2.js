let c=require('readline-sync')

let P=c.question('enter principle amount')
let R=c.question('enter interest rate')
let n=c.question('enter no of years')


var SI=((P*R*n)/100)

console.log('the simple interest is'+SI)
