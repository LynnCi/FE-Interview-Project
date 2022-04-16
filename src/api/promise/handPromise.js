/**
 * 手写promise
 */

class myPromise{
    //构造函数
    constructor(handle){
        //判断handle是否为函数
        if(typeof handle !== 'function'){
            throw new Error('handle is not function')
        }
        //初始值
        this.state = myPromise.PENDING //状态
        this.value = null   //最终结果
        this.reason = null   //拒因
        this.onFulfilledCallbacks = [] //成功回调
        this.onRejectedCallbacks = [] //失败回调

        //try catch 为了执行顺序
        try{
            //bind 改变this指向
            handle(this.resolve.bind(this),this.reject.bind(this))
        }catch(e){
            this.reject(e)
        }
        
    }
    resolve(val){
        //状态不可逆
        if(this.state === myPromise.PENDING){
            this.state = myPromise.FUNFILLED
            this.value = val //执行成功的回调
            this.onFulfilledCallbacks.forEach((fn) => {
                fn(this.value)
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
    //参数可选
    then(onFulfilled,onRejected){
        if(typeof onFulfilled !== 'function'){
            onFulfilled = function(value){
                return value //不是func,重新返回值
            }

        }
        if(typeof onRejected !== 'function'){
            onRejected = function(reason){
                throw reason
            }
        }
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
myPromise.FUNFILLED = 'fulfilled'
myPromise.REJECTED = 'rejected'
module.exports = myPromise