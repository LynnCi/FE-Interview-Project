//手写函数柯里化

//fn：接收一个处理数据的函数
const currying = function(fn){
    const args = [] //定义一个数组，用于接收所有的参数
    //返回一个函数，如果返回的函数接收的参数的长度是0，则返回fn执行的结果；不是0，将参数push进数组，并返回函数
    return function result(...rest){
        if(rest.length === 0){
            return fn(...args)
        }else{
            args.push(...rest)
            return result
        }
    }
}
const sum = (...arg) => {
    return arg.reduce((pre,cur) => {
        return pre + cur
    },0)
}
let res = currying(sum)(1)(2)(3)() //需要额外调用
console.log('res1',res)


//不需要额外调用
const add = (arg) => {
    return arg.reduce((pre,cur) => {
        return pre + cur
    },0)
}
const foo = (...args1) => {
    const result1 = add(args1)
    const fn = (...args2) => {
        const result2 = add(args2)
        return foo(result1 + result2)
    }
    fn.toString = () => {
        return result1
    }
    return fn
}
let res2 = foo(1)(2)(3)
console.log('res2',res2.toString())


