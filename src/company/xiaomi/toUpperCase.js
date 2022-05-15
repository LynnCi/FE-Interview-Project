// 字符串转为驼峰格式 font-size 转换为 fontSize
function fn(str){
    let arr = str.split('')  //split() 字符串转为字符数组
    if(arr.indexOf('-') == 0){
        arr.splice(0,1)
    }
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == '-'){
            arr.splice(i,1)
            arr[i] = arr[i].toUpperCase() //toUpperCase() 转为大写字母
        }
    }
    return arr.join('') //数组转为字符串
}
let str = '-webkit-background-composite'  
console.log(fn(str))

