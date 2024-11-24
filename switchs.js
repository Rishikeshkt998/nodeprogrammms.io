let d=require('readline-sync')

let day=d.question('enter the mark')
let n=parseInt(day)

switch(n){

case 1:
    console.log('sunday');
    break
case 2:
    console.log('monday')
    break
case 3:
    console.log('tuesday')
    break

case 4:
    console.log('wednesday')
    break
case 5:
    console.log('thursday')
    break

case 6:
    console.log('friday')
    break

case 7:
    console.log('saturady')
    break
default:
    console.log('invalid');

}
