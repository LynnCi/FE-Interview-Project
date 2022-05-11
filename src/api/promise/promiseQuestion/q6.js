//promise.then 可以调用多次

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('once') //1 once
      resolve('success')
    }, 1000)
  })
  let start = Date.now()
  p.then((res) => {
    console.log(res, Date.now() - start) // 2 success
  })
  p.then((res) => { //注意这里，promise.then()可以调用多次
    console.log(res, Date.now() - start) //3 success
  })

  //once success success
