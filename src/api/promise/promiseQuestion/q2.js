//promise 内部是同步任务，从上往下执行

const promise = new Promise((resolve,reject) => {
    console.log('1') 
    resolve()
    console.log('2') //注意，这里也是同步
})
promise.then(() => { //微任务，上面执行了resolve，这里的then 才会生效。如果上面没有执行resolve,3不会打印
    console.log('3')
})
console.log('4')
//1 2 4 3