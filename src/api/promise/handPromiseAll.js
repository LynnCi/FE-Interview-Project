/**
 * 手写promise.all
 */

function all(arr){
    return Promise((resolve,reject) => {
        let length = arr.length //传入的promise个数
        let count = 0 //传入fulfilled的promise个数
        const result = []  //创建一个等长的数组，放置结果

        //如果传入的是空数组，返回一个fulfilled状态的promise
        if(arr.length === 0){
            return Promise.resolve(arr)
        }

        for(let i = 0;i < length;i++){
            arr[i].then(res => {
                //arr顺序和打印顺序一致
                //result[i] = res
                
                result.push(res)  //将每次结果保存在result中
                count++
                //判断是否所有的promise 都进入 fulfilled 状态
                if(count === length){
                    resolve(result)  //返回结果
                }
            }).catch(err => {
                reject(err)  //如果有错误，直接结束循环，并返回结果
            })
        }
    })
}
