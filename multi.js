let d=require('readline-sync')

let day=d.question('enter the mark')
let n=parseInt(day)


for(let i=0;i<=10;i++){
    console.log(`${n}*${i}=${n*i}`);
}