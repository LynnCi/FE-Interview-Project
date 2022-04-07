/**
 * 手写 实现数组扁平
 */

//用递归
function flatten(arr){
    let res = []
    for(let i = 0;i < arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res

}
//用reduce
function flatten2(arr){
    //reduce第一个参数返回累加的结果，第二个是当前遍历的值
    return arr.reduce((result,item) => {
        return result.concat(Array.isArray(item) ? flatten2(item) : item)
    })
}

//ES6 flat()
arr.flat(Infinity) //Infinity：全部展开；也可设置具体的层数

//ES6 扩展运算符...
let newArr = [...arr] //只能展开二维数组