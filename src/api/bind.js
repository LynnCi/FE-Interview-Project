/**
 * 手写bind
 * 特点：
 * 1、改变this指向
 * 2、第一个参数是 this，后面的参数 是 函数接受的参数
 * 3、返回值不变
 */

// Function.property.MyBind = function(context){
//     //判断调用对象是否为函数
//     if(typeof this !== 'function'){
//         throw new Error('error')
//     }
//     //获取参数：除了第一个，把剩下参数传过来
//     const args = [...arguments].slice(1),fn = this;

//     return function Fn(){
//         //根据调用方式，传入不同绑定值
//         return Fn.apply(this instanceof Fn ? new Fn(...arguments) : context,args.concat(...arguments))
//     }
// }

//原函数
function test(a,b,c){
    console.log(a,b,c)
    return 'olivia'
}

Function.prototype.myBind = function(){
    const self = this
    let args = arguments
    console.log(args,'args')
    return function(){
        return self();

    }
}
//通过this改变指向
let res = test.myBind({name:'olivia'},1,2,3)
console.log('res',res)
