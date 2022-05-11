new Promise((resolve,reject) => { //promise 本身是同步的
    console.log("1"); 
    resolve("success"); //resolve 触发 then
    setTimeout(() => { //宏任务
        console.log("2"); 
    })
}).then(res => console.log(res)) //微任务 success
console.log("3"); 
//1 3 success 2