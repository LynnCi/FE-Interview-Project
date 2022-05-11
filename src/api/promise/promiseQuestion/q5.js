//promise内部return，相当于返回新的promise

Promise.resolve(1) //promise.resolve 把当前的promise 状态改为成功，并传值1
  .then((res) => {
    console.log(res) //res为1
    return 2 //注意，这里的return 相当于返回新的 promise,并携带参数 2，实现链式调用
  })
  .catch((err) => { //不执行 catch
    return 3
  })
  .then((res) => { //promise.then 可以调用多次
    console.log(res) //res为2
  })
  //1 2