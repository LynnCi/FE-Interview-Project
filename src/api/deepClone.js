//深拷贝
function deepClone(obj){
    if(typeof obj !== 'object' || obj == null){
        return obj
    }
    let res
    if(obj instanceof Array){
        res = []
    }else{
        res = {}
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            res[key] = deepClone(obj[key])
        }
    }
    return res
}

let obj1 = {
    name:'joe',
    age:9
}
let obj2 = obj1
obj2.name = 'olivia'
console.log('obj1.name',obj1.name)
console.log('obj2.name',obj2.name)