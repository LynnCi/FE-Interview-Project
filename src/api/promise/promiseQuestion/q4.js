//promise 内部代码是同步的，且状态更改后不能再改

let p = new Promise((resolve, reject) => {
    resolve('success1') //promise 内部代码是同步的，且状态更改后不能再改
    reject('error')
    resolve('success2')
})
  
p.then((res) => {
    console.log('then: ', res) //success1，只打印success1
})
.catch((err) => {
    console.log('catch: ', err) 
})
//then:  success1