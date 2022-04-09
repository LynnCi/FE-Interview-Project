/**
 * 深拷贝
 * @param {*} obj
 * @returns
 * Object.create(obj) 也可以实现深拷贝,通过原型链方式
 * new Object(obj) 浅拷贝
 * 深浅拷贝区别：
 * 浅拷贝只拷贝地址，修改新对象的值，旧对象也会变化；
 * 深拷贝的地址是新的，改变新对象的值，不影响旧对象；
 */
function deepClone(obj){
    if(obj == null || typeof obj !== 'object'){
        return obj
    }
    let res;
    if(obj instanceof Array){ //或者Array.isArray(obj) 也可以判断obj是否是数组
        res = []
    }else{
        res = {}
    }
    for(let key in obj){ //for in 既可以判断数组，也可以判断对象，遍历数组下标，取得对象的key
        if(obj.hasOwnProperty(key)){ //判断obj 是否有 key 属性
            res[key] = deepClone(obj[key])
        }
    }
    return res
}
