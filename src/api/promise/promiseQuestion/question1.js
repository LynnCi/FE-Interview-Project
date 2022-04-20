//虾皮
let p = new Promise((resolve,reject) => {resolve('1')}) 

p.then((res) => {
    console.log('2') //第1 2
    console.log(res) //第2 1

    return new Promise((resolve) => {
        console.log('3') //第3 3
        resolve('4')  //
        console.log('5') //第4 5

        return new Promise((resolve) => {resolve('6')})
            .then(res => {
                console.log(res) //第6 6
                return res
            })
    })
}).then(res => {
    console.log('第1',res) //4
    return res
})

p.finally(() => {
    console.log('7') //第5 7
}).then(res => {
    console.log('第2',res) //1
})

//2 1 3 5 7 6 4 1