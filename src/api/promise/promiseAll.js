
/**
 *  - Promise.all() 处理多个异步任务，所有异步操作执行完毕才执行回调；
 - .all(paramasArray) 接收一个数组参数，数组中的每一项是一个promise对象；
 - 返回的结果也是一个数组，数组中的每一项对应 .all参数的结果；
 - 适用场景：打开页面，显示‘loading...’，预先加载需要用到的图片和各种资源，等所有资源都加载完毕，关闭‘loading...’显示页面。
 */
let promise1 = new Promise((resolve,reject) => {})
let promise2 = new Promise((resolve,reject) => {})
let promise3 = new Promise((resolve,reject) => {})

let paramsArray = [promise1,promise2,promise3]
Promise.all(paramsArray)
.then(() => {
    //三个成功则成功
})
.catch((err) => {
    //有一个失败则失败
})