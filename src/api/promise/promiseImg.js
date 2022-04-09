/**
 * peomise 加载一张图片
 * @param {*} url
 * @returns
 */
function loadImg(url) {
    let img = new Image()
    img.src = url
    return new Promise((resolve, reject) => { //返回promise对象
        img.onload = () => {
            // console.log(url)
            resolve(img)
        }
        img.onerror = (e) => {
            reject(e)
        }
    })
}

let url1 = 'https://image-static.segmentfault.com/304/256/3042564477-624c431b82ce6_cover160'
loadImg(url1).then((res) => {
    document.body.append(res)

})


/**
 * promise 按顺序加载多张图片
 */
 function loadAllImg(url) {
    let img = new Image()
    img.src = url
    return new Promise((resolve, reject) => { //返回promise对象
        img.onload = () => {
            // console.log(url)
            resolve(img) //注意填入img参数
        }
        img.onerror = (e) => {
            reject(e)
        }
    })
}

let imgArr = [
'https://image-static.segmentfault.com/304/256/3042564477-624c431b82ce6_cover160',
'https://image-static.segmentfault.com/532/827/532827663-6241cd93412f5_cover160',
'https://image-static.segmentfault.com/317/689/3176890972-62448cded247e_cover160']

Promise.all(imgArr).then((result) => {
    // console.log('result',result)
    result.forEach(item => {
        loadAllImg(item).then(res => {
            document.body.append(res)
        }).catch((e) => {
            console.log(e)
        })
    })
})
