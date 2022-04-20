/**
 * 手写Promise.race
 */

function race(arr){
    return new Promise((resolve,reject) => {
        for(let i = 0;i < arr.length;i++){
            arr[i].then(res => {
                //某一个 promise 完成后直接返回其值
                resolve(res)
            }).catch(err => {
                //如果有错误，直接结束循环，并返回错误
                reject(err)
            })
        }

    })

}