new Promise((resolve,reject) => { //promise 本身是同步的
    console.log("resolve before"); //1
    resolve("success"); //resolve 触发 then
    setTimeout(() => { //宏任务
        console.log("setTimeout"); //4
    })
}).then(res => console.log(res)) //3 微任务 success
console.log("同步"); //2

// resolve before
// 同步
// success
// setTimeout





/*
const promise = new Promise((resolve,reject) => {
    console.log('1')
    resolve()
    console.log('2')
})
promise.then(() => {
    console.log('3')
})
console.log('4')
*/

/**
 * 1 2 4 3
 * 124 同步执行，按先后顺序输出，promise.then 异步执行
 * 注意，2也是同步，执行完1，立即执行2；
 * 注意3的前提也是执行 resolve（），把promise的状态变为成功才能输出，若resolve()不执行，3不会打印
 */

/*
let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('success') //p1 状态变成成功
    },1000)
})
let p2 = p1.then(() => { //p2 由 p1.then() 返回一个新的 promise
    throw new Error('error')
})
console.log('promise1',p1) //1 p1 p2都处于 pending,1s 后p1 变为 fulfilled,p2 改为拒绝
console.log('promise2',p2) //2
setTimeout(() => {
    console.log('promise1',p1)
    console.log('promise2',p2)
},2000)
*/

//1 promise1 Promise { <pending> }
//2 promise2 Promise { <pending> }
//3 Error:error
//4 promise1 Promise { 'success' }
//5 promise2 Promise {
//    <rejected> Error: error
//    at /Applications/github/FE-Interview-Project/src/api/promise/promiseQuestion/question.js:26:11
//}

/*
let p = new Promise((resolve, reject) => {
    resolve('success1') //promise 内部代码是同步的，且状态更改后不能再改
    reject('error')
    resolve('success2')
  })
  
  p.then((res) => {
      console.log('then: ', res) //success1，只打印success1
    })
    .catch((err) => {
      console.log('catch: ', err) 
    })
*/


/*
Promise.resolve(1) //promise.resolve 把当前的promise 状态改为成功，并传值1
  .then((res) => {
    console.log(res) //1 then接收1，并输出
    return 2 //注意，这里的return 相当于返回新的 promise,并携带参数 2，实现链式调用
  })
  .catch((err) => { //不执行 catch
    return 3
  })
  .then((res) => {
    console.log(res) 
  })
  //1 2
  */

  /*
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('once') //1 once
      resolve('success')
    }, 1000)
  })
  let start = Date.now()
  p.then((res) => {
    console.log(res, Date.now() - start) // 2 success
  })
  p.then((res) => { //注意这里，promise.then()可以调用多次
    console.log(res, Date.now() - start) //3 success
  })

  */


  /*
  Promise.resolve() //Promise.resolve() 已经是一个成功态的promise了
  .then(() => {
    //return new Error('error!!!') 等价于 return Promise.resolve(new Error('error!!!'))
    return new Error('error!!!') //不管返回什么，状态都不会再改变
  })
  .then((res) => { //promise.then()可以连续执行
    console.log('then: ', res) // Error: error!!!
  })
  .catch((err) => {
    console.log('catch: ', err) 
  })
  */

  /*
  Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log()) //注意，这里的then 接收函数，如果不是函数，发生值穿透，输出1
  */

/*
  const first = () => (new Promise((resolve, reject) => {
    console.log(3); //1
    let p = new Promise((resolve, reject) => {
        console.log(7); //2
        setTimeout(() => { //宏任务
            console.log(5);
            resolve(6); //进入 回调队列
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => { //微任务
        console.log(arg); //进入 回调队列
    });

}));

first().then((arg) => { //微任务
    console.log(arg);
});
console.log(4); //3

//3 7 4 1 2 5

*/