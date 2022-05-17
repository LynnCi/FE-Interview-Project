/**
 * 函数柯里化，实现一个 add 函数
 * add(1)(2)(3) = 6;
 * add(1,2)(3) = 6;
 * add(1)(2,3) = 6;
 */
 const add = function(x, y, z) {
    return x + y + z
 }
 add(1, 2, 3)
 
 const curryingAdd = function(x) {
     return function(y) {
         return function(z){
             return x + y + z
         }
     }
 }
 curryingAdd(1)(2)(3) //等价于 fn1 = curryingAdd(1), fn2 = fn1(2) 
 
 function curry(){
     let args = Array.prototype.slice.call(arguments) //类数组 转换为 数组对象

     //递归，curry()自递归
     let inner = function(){
        args.push(...arguments)
        return inner
     }

     inner.toString = function(){
         return args.reduce(function(prev,cur){
            return prev + cur
         })
     }
     return inner;

 }
 let result = curry(1)(2)(3) //执行每个fn，都返回 inner 函数
 console.log('result',result.toString())
  
 
 
 