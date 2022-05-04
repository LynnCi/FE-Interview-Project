/**
 *  promise主要用来解决这两个问题：
 1、解决回调地狱问题，通常第二个函数的参数是第一个函数的返回值；
 2、解决异步问题，但不能说promise是异步的；

 如果没有抛出异常，then/catch 返回的都是一个 resolve 状态的 Promise;
 抛出异常 返回的都是 rejected 的 Promise;
 */

 //new一个构造函数 p是返回的promise对象
let p = new Promise((resolve,reject) => {
    setTimeout(()=>{ //setTimeout 模拟异步
        resolve() //异步成功后执行
    },1000) //1s
    reject() //异步失败后执行的回调函数
})

//promise的精髓是状态维护和传递，then链式操作
p.then((data) => {
    console.log(data)
}).then((data2) => { //p.then 返回 Promise 对象，data2 为返回的结果
    console.log(data2)
}).then((data3) => {
    console.log(data3)
})

//举例
let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let num = Math.ceil(Math.random()*10) //随机生成1-10
        if(num < 5){
            resolve(num)
        }else{
            reject('数字大于5')
        }
    },500)
})
//then方法接收两个参数，第一个对应resolve的回调，第二个对应reject的回调。
p2.then((number) => {
    console.log('展示resolve的结果',number)
},(err) => {
    console.log('reject',err)
})

//但我们常见的是then 和 catch 的配合使用。catch用法，执行reject的回调，相当于上面then的第二个参数。
p2.then((data) => {
    console.log('输出resolve的结果:',data) //输出resolve的结果:8
}).catch((err) => {
    console.log('输出reject的结果:',err) //输出reject的结果:数字大于5
})

//catch另一个作用，如果执行resolve的回调时，抛出异常，不会报错卡死js，而是进入catch。
p.then((number) => {
    console.log('resolve',number) //8
    console.log(number2) //这里的number2 未定义
}).catch((err) => {
    console.log('reject',err) //最终的输出结果 resolve 8 ,reject number2未定义
})