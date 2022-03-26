/**
 * Promise.race( )
 * 接收的参数是数组；
 * 只取第一个返回的结果（哪个方法先执行完，就用那个）
 */

/**
 * 举例：
异步请求一个图片，这里是模拟，图片路径设为“图片路径“，所以肯定请求不到；timeout函数是一个延时2秒的操作。
把这两个请求结果放进race，让他们开始赛跑，如果2秒内图片请求成功了，进入then()方法，如果2秒图片还未成功返回，则进入catch报“图片请求超时”错误。
 */

//requestImg 异步请求一张图片
function requestImg(){
    let p = new Promise((resolve,reject) => {
        let img = new Image()
        img.onload = (() => {
            resolve(img)
        })
        img.src = '图片路径'
    })
    return p
}
//timeout函数是一个延时2秒的操作
function timeout(){
    let p = new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('图片请求超时')
        },2000)
    })
    return p
}
Promise.race([requestImg(),timeout()])
.then(() => {
    console.log('requestImg、timeout哪个先执行完，就取谁的结果')
})
.catch((err) => {
    console.log(err)
})
