//虾皮一面

let p = new Promise((resolve,reject) => {resolve('1')}) //p 成功状态

p.then((res) => {
    console.log('2') 
    console.log(res) //res=1

    return new Promise((resolve) => {
        console.log('3') 
        resolve('4')  
        console.log('5')  //3 5

        return new Promise((resolve) => {resolve('6')})
            .then(res => {
                console.log(res) 
                return res
            })
    })
}).then(res => {
    console.log('第1',res)  //res=4
    return res
})

p.finally(() => {
    console.log('7') 
}).then(res => {
    console.log('第2',res) 
})

//2 1 3 5 7 6 （第1，4）（第2，1） 