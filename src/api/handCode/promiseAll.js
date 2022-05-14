//手写promise.all
function myPromiseAll(arr){
    //返回一个promise 对象
    return new Promise((resolve,reject) =>{
        let count = 0
        let result = []

        //并发执行每个 promise
        for(let i = 0;i < arr.length;i++){
            Promise.resolve(arr[i]).then(res => {
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

const test = myPromiseAll([p0, p2, p3])
    .then(res => console.log(res))
    .catch(e => console.log(e))

console.log(test);