//获取指定字符串
function captureThreeNumber(str){
    let arr = str.split('')
    for(let i = 0;i < arr.length - 2;i++){
        if(Number(arr[i]) && Number(arr[i+1]) && Number(arr[i+2])){
            return str.substr(i,3)
        }
    }
    return false

}
console.log(captureThreeNumber('7890'))