/**
 * 手写Promise.race
 */

function race(arr){
    return new Promise((resolve,reject) => {
        for(let i = 0;i < arr.length;i++){
            //当数组元素为常量时，直接用arr[i]报错不是函数，所以需要用promise包装
            Promise.resolve(arr[i]).then(res => {
                //某一个 promise 完成后直接返回其值
                resolve(res)
            }).catch(err => {
                //如果有错误，直接结束循环，并返回错误
                reject(err)
            })
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

const test = race([p1, p2, p3])
    .then(res => console.log(res))
    .catch(e => console.log(e))

console.log(test); //p1 哪个先执行完毕，先返回哪个