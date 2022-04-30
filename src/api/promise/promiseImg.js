/**
 * peomise 加载一张图片
 * @param {*} url
 * @returns
 */
 function loadImg(url) {
    return new Promise((resolve,reject) => {
        let img = new Image()
        img.src = url
        img.onload = () => {
            resolve(img)
        }
        img.onerror = (err) => {
            reject(err)
        }
    })
}
let imgAddress = 'https://image-static.segmentfault.com/304/256/3042564477-624c431b82ce6_cover160'
imgload(imgAddress)
    .then((res) => {
        document.body.append(res)
    })
    .catch((err) => {
        console.log(`图片加载失败，原因${err}`)
    })


/**
 * promise 按顺序加载多张图片
 */

 function loadImgAll(url) {
    return new Promise((resolve, reject) => { //返回promise对象
        let img = new Image()
        img.src = url

        img.onload = () => {
            resolve(img)
        }
        img.onerror = (err) => {
            reject(err)
        }
    })
}

let imgArr = [
'https://image-static.segmentfault.com/304/256/3042564477-624c431b82ce6_cover160',
'https://image-static.segmentfault.com/532/827/532827663-6241cd93412f5_cover160',
'https://image-static.segmentfault.com/317/689/3176890972-62448cded247e_cover160']

Promise.all(imgArr).then((result) => {
    result.forEach(item => {
        loadImgAll(item).then(res => {
            document.body.append(res)
        }).catch((e) => {
            console.log(e)
        })
    })
})