// const bar=()=>console.log('bar');
// const baz=()=>console.log('baz');

// const foo=()=>{
//     console.log('foo')
//     setTimeout(bar,1000)
//     baz()
// }
// foo()


// function getmessage(message,callback){
//     setTimeout(()=>{
//         console.log(message);
//         callback()
//     },1000)
    
    
// }
// function displaymessage(){
//     console.log('displaymessage');
// }
// getmessage('getmessage',displaymessage)

let promises=new Promise(function(resolve,reject){
    setTimeout(()=>resolve('run before'),1000)
    // setTimeout(()=>reject(new Error('whoops')),1000)
})

// promises.then(
//     result=>{
//         console.log(result);
//         Getafter()
//     },
//     error=>console.log(error)
// )


// function Getafter(){
//     console.log('print after');
// }
// Getafter()

function clown(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('hi')
        },2000)
    })
}

async function msg(callback){
    const msg= await clown()
    console.log('message'+msg);
    callback()
}
msg(getresult)

function getresult(){
    console.log('execute after');
}