//promise 内部是同步执行
//定时器都是宏任务，哪个快先执行哪个
//先执行promise 内部，再执行 then
//字节一面

console.log('start') 
setTimeout(() => { //宏任务
    console.log('1')
    Promise.resolve().then(() => {
        console.log('2')
    })
},5000) //注意，这里是0秒，所以微任务前执行
new Promise(function(resolve,reject){ //微任务
    console.log('5') 
    setTimeout(() => { //宏任务
        console.log('7')
        resolve('8')
    },6000)
}).then((res) => { //微任务
    console.log('9')
    setTimeout(() => console.log(res),0)
})
console.log('end') 

//start 5 end 1 2 7 9 8
//start 5 end 7 9 8 1 2 定时器1 5s后执行，定时器2 0s执行 
//start 5 end 1 2 7 9 8 定时器1 5s后执行，定时器2 6s执行 