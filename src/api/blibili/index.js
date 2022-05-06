/**
 * b站一面
 * 输出 a,b,c...(深度遍历结果)
 * 
 */
 let tree = [
    {
        value:'a',
        children:[
            {
                value:'b',
                children:[
                    {
                        value:'c'
                    }
                ]
                
            },
            {
                value:'d',
                children:[
                    {
                        value:'e'
                    }
                ]
            }
        ]
    },
    {
        value:'f',
        children:[
            {
                value:'g'
            }
        ]
    }
]

function fn(tree,arr){
    for(let item of tree){
        arr.push(item.value)
        if(item.children){
            fn(item.children,arr) //递归时注意arr,arr内包含父级value,接着递归push children
        }
    }
    return arr
}
let result = fn(tree,[])
console.log('result',result)


/**
 * 手写 - 函数柯里化
 * 要求：把 add 函数变换成柯里化
 */

const add = function(x, y, z) {
   return x + y + z
}
add(1, 2, 3)


//1、接收一个单一参数
const curryingAdd = function(x) {
    // 并且返回接受余下的参数的函数
    return function(y,z) {
        return x + y + z
    }
}
//等价于 const fn = curryingAdd(1)   fn(2, 3)
curryingAdd(1)(2, 3)


//2、分别接受参数
const curryingAdd2 = function(x) {
    return function(y) {
        return function(z){
            return x + y + z
        }
    }
}
curryingAdd2(1)(2)(3)


//3、接收两个参数
const curryingAdd3 = function(x,y) {
    return function(z) {
        return x + y + z
    }
}
curryingAdd3(1,2)(3)
 


