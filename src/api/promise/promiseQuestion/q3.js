let p1 = new Promise((resolve,reject) => {
    setTimeout(() => { //同步
        resolve('success') //p1 变成 fulfilled
    },1000)
})
let p2 = p1.then(() => { //p2 由 p1.then() 返回一个新的 promise
    throw new Error('error')
})
console.log('promise1',p1) //1 p1 p2开始都处于 pending,1s 后p1 变为 fulfilled,p2 改为 rejected
console.log('promise2',p2) //2
setTimeout(() => { //同步
    console.log('promise1',p1)
    console.log('promise2',p2)
},2000)

//promise1 Promise { <pending> }
//promise2 Promise { <pending> }
//promise1 Promise { 'success' }
//promise2 Promise { <rejected> Error: error }