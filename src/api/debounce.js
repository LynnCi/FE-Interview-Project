//防抖节流

//防抖
function debounce(fn,delay){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=> {
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

//节流
function throttle(fn,delay){
    let timer = null
    return function(){
        if(timer){
            return
        }
        timer = setTimeout(() => {
            fn.apply(this,[])
            time = null
        },delay)
    }
}