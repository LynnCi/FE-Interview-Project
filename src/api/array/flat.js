/**
 * 数组扁平化
 */
let arr = [[1,2],3]

//es6 flat(Infinity)展开多层，flat(3) 展开3层
arr.flat(Infinity)

//ES6 扩展运算符...
let arr2 = [...arr] //只能展开二维数组


//递归
function flatten(arr){
    let res = []
    for(let item of arr){
        if(Array.isArray(item)){
            res = res.concat(flatten(item))
        }else{
            res.push(item)
        }
    }
    return res
}
let newArr = flatten(arr)

//reduce()
//reduce第一个参数返回累加的结果，第二个是当前遍历的值
function flat2(arr){
    return arr.reduce((result,item) => {
        return result.concat(Array.isArray(item) ? flat2(item) : item)
    })
}
let res2 = flat2(arr)

