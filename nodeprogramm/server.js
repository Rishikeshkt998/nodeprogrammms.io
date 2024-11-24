// const http=require('http')

// const hostname='127.0.0.1'

// const port=3000

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write('hi')
//     res.end()
// })
// .listen(port,hostname,()=>{
//     console.log(`server running at http://${hostname}:${port}`);

// })


// const http=require('http')

// http.get('http://api.open-notify.org/astros.json',resp=>{
//     let data=''
//     resp.on('data',chunk=>{
//         data+=chunk
//     })
//     resp.on('end',()=>{
//         let jsondata=JSON.parse(data)
//         console.log(jsondata);
//     })
// })


// const http=require('https')

// const data=JSON.stringify({
//     name:'jhon',
//     job:'content writtr'
// })
// const options={
//     hostname:'reqres.in',
//     path:'/api/users',
//     method:'POST',
//     header:{
//         'Content-Type':'application/json'
//     }
// }

// const req=http.request(options,(res)=>{
//     let data=''
//     console.log(res.statusCode);
//     res.on('data',(chunk)=>{
//         data+=chunk
//     })
//     res.on('end',()=>{
//         console.log('body',JSON.parse(data));
//     })

// })
// req.write(data)
// req.end()

// const axios=require('axios')

// const data=JSON.stringify({
//     name:'jhon',
//     job:'content writtr'
// })

// axios.post('https://reqres.in/api/users',data).then(res=>{
//     console.log(res.status);
//     console.log('body'+JSON.stringify(res.data));
// })
// .catch(err=>{
//     console.log(err);
// })


// const fs=require('fs')


// // fs.readFile('test.txt','utf-8',(err,data)=>{
// //     if(err) throw err
// //     console.log(data);
// // })

// // const data=fs.readFileSync('test.txt',{encoding:'utf-8',flag:'r'})
// // console.log(data);

// fs.stat('test.txt',(err,stats)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.size);




// })

// const fs=require('fs')


// const content={
//     type:'node application'
// }

// fs.writeFileSync('text.json',JSON.stringify(content))
// const content='node'

// // fs.writeFile('tesst.txt',content,{flag:'a+'},err=>{
// //     if(err){
// //         console.log(err);
// //         return
// //     }
// //     console.log('successfully done');
// // })

// fs.unlink('tesst.txt',err=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('successsfully done');
// })



// const http=require('http')
// const routes={
//     '/':function index(request,response){
//         response.writeHead(200)
//         response.end('node routing')
//     },
//     '/about':function about(request,response){
//         response.end('aboutrouting')
//     }
    
// }




// http.createServer((req,res)=>{

//     if(req.url in routes){
//         return routes[req.url](req,res)
//     }
    
// })
// .listen(3000)



// function add(num1,num2,callback){
//     let err=false
//     if(num1==0){
//         err=true

//     }
//     callback(num1+num2,err)
// }
// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function div(num1,num2,callback){
//     callback(num1/num2)
// }
// add(10,20,(sum,err)=>{
//     if(err){
//         console.log('first no is zero');
//     }else{
//         console.log(sum);
//         multiply(sum,sum,(product)=>{
//             console.log(product);
//             div(product,10,(result)=>{
//                 console.log(result);
//             })
//         })

//     }
   
// })

// const Promise=require('promise')


// function add(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1==0){
//             reject('first number is zero')
//         }
//         resolve(num1+num2)
//     })
// }
// function multi(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1==0){
//             reject('first number is zero')
//         }
//         resolve(num1*num2)
//     })
// }
// function div(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1==0){
//             reject('first number is zero')
//         }
//         resolve(num1/num2)
//     })
// }

// add(10,20).then((sum)=>{
//     console.log(sum);
//     return multi(sum,sum)
// }).then((product)=>{
//     console.log(product);
//     return div(product,10)


// }).then((result)=>{
//     console.log(result);

// })
// .catch((err)=>{
//     console.log(err)

// })


// const Promise=require('promise')

// function getName(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('nikil')
//         },1000)
//     })
// }

// function getMobile(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('986754')
//         },2000)
//     })
// }

// Promise.all([getName(),getMobile()]).then((result)=>{
//       console.log(result);
// })


// async function getuser(){
//     let name=await getName()
//     let phone=await getMobile()
//     console.log(name);
//     console.log(phone);
// }
// getuser()



// const arr=[5,1,3,2,6]


// arr.map((ele)=>{
//     const d=ele*2
//     console.log(d);
// })
// function double(x){
//     return x*2
// }
// function triple(x){
//     return x*3
// }

// const output= arr.map((x)=>{
//     return x.toString(2)
// })
// console.log(output);
// function isodd(x){
//     return x%2
// }
// function iseven(x){
//     return x%2==0
// }
// function isgreater(x){
//         return x>4
//     }

// const output=arr.filter(function isgreater(x){
//     return x>4
// }
// )
// console.log(output)

// const arr=[5,1,3,2,6]

// function sum(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum

// }
// console.log(sum)

// function sum(arr){
//     let max=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
       
//     }
//     return max
   

// }
// console.log(sum(arr))


// const output=arr.reduce(function(acc,curr){
//     acc+=curr
//     return acc
// },0)
// console.log(output);

// const output=arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr
//     }
//     return acc

// },0)
// console.log(output);


// const users=[{firstname:'rishi',lastname:'kt',age:26},
// {firstname:'jithu',lastname:'pv',age:75},
// {firstname:'sidhu',lastname:'kt',age:50},
// {firstname:'yadhu',lastname:'kt',age:26},]


// const output=users.filter((x)=>x.age<30).map((x)=>x.firstname)
// console.log(output);


// let r=require("readline-sync");
// var num=r.question("enter the number")
// var number=parseInt(num)
// sum=0
// for(i=1;i<=number;i++){
//     if(i%2!=0){
//         var sum=sum+i
       
   
//     }
   
// }
// console.log(sum)

arr=[1,2,3,4,5,6,7]

// setTimeout(function sum(){
//     sum=0
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             sum=sum+arr[i]
//         }
//     }
//     console.log(sum)
// }
// ,1000)


const output=arr.filter((x)=>x%2!=0).reduce((acc,curr)=>acc+=curr)
console.log(output)



