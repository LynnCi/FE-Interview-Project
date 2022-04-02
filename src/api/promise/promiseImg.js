/**
 * promise加载图片，
 * 加载三张图片img1、img2、img3，图片顺序1、2、3
 */

//普通加载
function loadImg(){
    let url1 = '';
    let url2 = '';
    let url3 = '';

    let img1 = new Image()
    img1.onload = function(){
        console.log('img1加载完毕');
        let img2 = new Image()
        img2.onload = function(){
            console.log('img2')
            let img3 = new Image()
            img3.onload = function(){
                console.log('img3','全部加载完毕')
            }
            img3.src = url3
            console.log(3)
        }
        img2.src = url2
        console.log(2)
    }
    img1.src = url1
    console.log(1)
}


//promise加载
function promiseImg(url){
    let img = new Image()
    img.src = url
    return new Promise((resolve,reject) => {
        img.onload = () => {
            resolve()
        }
        img.onerror = (e) => {
            reject(e)
        }
    })

}
let url1 = 'https://img-home.csdnimg.cn/images/20210114022828.png'
let url2 = 'https://img-home.csdnimg.cn/images/20210114022819.png'
let url3 = 'https://img-home.csdnimg.cn/images/20210114022831.png'
promiseImg(url1)
    .then(() => {
        return promiseImg(url2)
    })
    .then(() => {
        return promiseImg(url3)
    })


/**
 * promise.all
 * @param {*} url1
 * promise.all 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
 * const p = Promise.all([p1, p2, p3]) p 的状态由 p1, p2, p3 共同决定
 * 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
 * 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */

function loadImage(url1){
    let img = new Image()
    img.src = url1
    return new Promise((resolve,reject) => {
        img.onload = () => {
            resolve(img)
        }
        img.onerror = (e) => {
            reject(e)
        }

    })
}
function loadAll(arr){
    let imgArr = []
    arr.forEach(item => {
        let p = loadImage(item).then((img) => {
            console.log(img)
        })
        imgArr.push(p) //存储当前promise对象
    })
    Promise.all(imgArr)
        .then(() => {
            console.log('全部完成')
        })
        .catch((err) => {
            console.log(err)
        })
}
let urls = [url1,url2,url3]
loadAll(urls)

// Promise.all([p1,p2,p3]).then().catch()
new Promise((resolve,reject) => {

})


//promise预加载图片
function loadImg(url){ //创建单个图片加载
    return new Promise((resolve,reject) => {
        const img = new Image()
        img.src = url
        img.onload = () => { //加载成功
            resolve(img)
        }
        img.onerror = () => {
            reject('加载失败')
        }
    })
}

loadImg(url1).then((img) => {
    console.log(img.width)
    return loadImg(url2)
}).then((img) => {
    console.log(img.width)
    return loadImg(url3)
})

let imgArr = []
imgArr.push(loadImg(url))
