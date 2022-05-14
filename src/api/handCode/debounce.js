//防抖debounce
function debounce(fn,delay = 500){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}
const task = () => {console.log('run task')}
const res = debounce(task,500)
window.addEventListener('scroll',res)