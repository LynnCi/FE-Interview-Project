console.log(1)

setTimeout(function(){
    console.log(2)
},1000)

console.log(3)

setTimeout(() => {
    console.log(4)
},500)

console.log(5)

//1 3 5 4 2
//1 3 5同步任务，定时器哪个快先执行哪个 4 2

