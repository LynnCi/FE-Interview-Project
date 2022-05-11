const first = () => (new Promise((resolve, reject) => {
    console.log(3); 
    let p = new Promise((resolve, reject) => { //微任务
        console.log(7); 
        setTimeout(() => { //宏
            console.log(5);
            resolve(6); 
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => { //微 p接收1
        console.log('p=',arg); //1
    });
}));
first().then((arg) => { 
    console.log('first=',arg); //arg为2
});
console.log(4); 

//3 7 4 p=1 first=2 5