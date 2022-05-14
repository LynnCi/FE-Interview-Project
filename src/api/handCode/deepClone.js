//深拷贝
function deepClone(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj
    }
    let result;
    if(obj instanceof Array){
        result = []
        console.log('is array')
    }else{
        result = {}
        console.log('is object')
    }
    for(let key in obj){
        console.log('key',key)
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key])
        }
    }
    return result
}
let str = {
    name:'olvia',
    age:9,
    bb:{
        cc:'is c'
    }
}
let res = deepClone(str)
console.log(res)