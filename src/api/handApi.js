/**
 * 手写 promise.all
 */
function all(array){
    return new Promise((resolve,reject) => {
        let length = array.length
        let count = 0
        let result = []

        //array 若为空数组，返回fulfilled 状态的promise
        if(length === 0){
            return Promise.resolve(array)
        }

        for(let i = 0;i < length;i++){
            array[i].then(res => {
                result.push(res)
                //result[i] = res //array顺序和结果顺序一致
                count++
                if(count === length){ 
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

/**
 * promise.race
 */
function race(arr){
    return new Promise((resolve,reject) => {
        for(let i = 0;i < arr.length;i++){
            arr[i].then(res => {
                resolve(res) //某个promise 完成后直接返回其值
            }).catch(err => {
                reject(err) //如果有错误，直接结束循环，并返回错误
            })
        }

    })

}

/**
 * promise
 */
class myPromise{
    constructor(func){
        if(typeof func !== 'function'){
            throw new Error('func is not function')
        }
        //设置初始值
        this.state = myPromise.PENDING
        this.value = null //成功结果
        this.reason = null //失败结果
        this.onFulfilledCallbacks = [] //成功回调
        this.onRejectedCallbacks = [] //失败回调

        try{
            func(this.resolve.bind(this),this.reject.bind(this))
        }catch(e){
            this.reject(e)
        }
    }
    resolve(val){
        if(this.state === myPromise.PENDING){ //用if 表示状态不可逆
            this.state = myPromise.FULFILLED
            this.value = val
            this.onFulfilledCallbacks.forEach((fn) => {
                fn(this.val)
            })
        }
    }
    reject(err){
        if(this.state === myPromise.PENDING){
            this.state = myPromise.REJECTED
            this.reason = err
            this.onRejectedCallbacks.forEach((fn) => {
                fn(this.err)
            })
        }
    }
    then(onFulfilled,onRejected){   
        if(typeof onFulfilled !== 'function'){ //then 的参数不是函数会忽略，所以这里模拟
            onFulfilled = function(value){
                return value //不是func,重新返回值
            }
        }
        if(typeof onRejected !== 'function'){
            onRejected = function(reason){
                throw reason
            }
        }
        //另一种写法
        //onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {}
        
        if(this.state == myPromise.FUNFILLED){
            //模拟异步
            setTimeout(() => {
                onFulfilled(this.value)
            })
            
        }
        if(this.state == myPromise.REJECTED){
            setTimeout(() => {
                onRejected(this.reason)
            })
        }
        //判断 pending 状态的 promise
        if(this.state == myPromise.PENDING){
            this.onFulfilledCallbacks.push(value => {
                setTimeout(() => {
                    onFulfilled(value)
                });
            })
            this.onRejectedCallbacks.push(reason => {
                setTimeout(() => {
                    onRejected(reason)
                });
            })
        }

    }
}
myPromise.PENDING = 'pending'
myPromise.FULFILLED = 'fulfilled'
myPromise.REJECTED = 'rejected'
module.export = myPromise

/**
 * promise 加载一张图片
 */
function loadImg(url) {
    return new Promise((resolve,reject) => {
        let img = new Image()
        img.src = url
        img.onload = () => {
            resolve(img)
        }
        img.onerror = (err) => {
            reject(err)
        }
    })
}
let imgAddress = 'https://image-static.segmentfault.com/304/256/3042564477-624c431b82ce6_cover160'
imgload(imgAddress)
    .then((res) => {
        document.body.append(res)
    })
    .catch((err) => {
        console.log(`图片加载失败，原因${err}`)
    })