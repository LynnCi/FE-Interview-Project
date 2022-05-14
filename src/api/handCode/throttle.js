//节流
function throttle(fn,delay = 1000){
    let timer = null
    return function(){
        if(timer){
            return
        }
        timer = setTimeout(() => {
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}
const task = () => { console.log('throttle') }
throttle(task,1000)