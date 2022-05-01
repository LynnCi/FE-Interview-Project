/**
 * 手写promise.all
 */
function all(arr){
    //函数返回一个 promise 对象
    return new Promise((resolve,reject) => {
        let count = 0;
        let result = [];

        //并发执行每一个 promise
        for(let i = 0;i < arr.length;i++){
            //arr里有可能是promsie 或者 常量，用promise包装
            Promise.resolve(arr[i]).then(res => {
                //用下标存储结果，保证输出顺序和arr一致
                //因为promise 对象执行时间可能不同，用push会破坏顺序
                result[i] = res 
                count++
                if(count === arr.length){
                    resolve(result)
                }
            }).catch(err => reject(err))
        }
    })
}
const p0 = 'p0'
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p1')
    }, 1000)
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p2')
    }, 2000)
})

const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p3')
    }, 3000)
})

const test = all([p0, p2, p3])
    .then(res => console.log(res))
    .catch(e => console.log(e))

console.log(test);