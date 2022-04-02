/**
 * JavaScript:将多维数组扁平化的方法
 */

//ES6新增数组扩展方法flat()，默认只拉伸一层，flat(Infinity)表示完全展开
let arr = [1,2,3,[4,5],6]
let res = arr.flat() //[1,2,3,4,5,6]

let arr2 = [5,6,[7,8,[9,10]]]
let res2 = arr2.flat(3) //也可设置具体的层数，展开三层

//ES6扩展运算符
let res3 = [...arr] //2维数组
//处理未知嵌套数组
function flatten(arr){ //方法用于检测数组中的元素是否满足指定条件
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr

}
let res4 = flatten([1,2,3,[4,[5,[6]]]])

//用递归
function flatten2(arr){
    let res8 = []
    for(let i =0;i < arr.length;i++){
        if(Array.isArray(arr[i])){
            res8 = res8.concat(flatten(arr[i]))
        }else{
            res8.push(arr[i])
        }
    }
    return res8
}

//用reduce
function flatten3(arr){
    //reduce第一个参数返回累加的结果，第二个是当前遍历的值
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? flatten3(cur) : cur)
    })
}

/**
 * 数组去重
 */
//es6 new Set()
let array = [3,3,5,6,7,7]
Array.from(new Set(array)) //new Set(array){3,5,6,7} Array.from()[3,5,6,7]

//indexOf
let arr10 = []
for(let i = 0;i < array.length;i++){
    if(arr10.indexOf(array[i]) === -1){
        arr10.push(array[i])
    }
}

//includes
let arr11 = []
for(let i = 0;i < array.length;i++){
    if(!arr11.includes(array[i])){
        arr11.push(array[i])
    }
}

/**
 * new创建对象的过程
 */
function Person(name,age){
    this.pName = name,
    this.pAge = age,
    this.eat = function(){
        console.log('eat apple')
    }
}
var man = new Person('olivia',8)
console.log('man',man)