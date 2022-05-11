
 Promise.resolve() //Promise.resolve() 已经是一个成功态的promise了
 .then(() => {
   //return new Error('error!!!') 等价于 return Promise.resolve(new Error('error!!!'))
   return new Error('error!!!') //不管返回什么，状态都不会再改变
 })
 .then((res) => { //promise.then()可以连续执行
   console.log('then: ', res) // Error: error!!!
 })
 .catch((err) => {
   console.log('catch: ', err) 
 })
 //