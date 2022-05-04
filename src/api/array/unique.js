/**
 * 数组去重
 */
let arr = [1,2,2,3,4,4,5]

//es6 set
console.log([...new Set(arr)])
Array.from(new Set(arr)) //对类数组创建一个新的数组实例

//用map 数据结构
function unique(arr){
    let map = new Map()
    let res = []

    for(let item of arr){
        if(!map.has(item)){
            map.set(item,true)
        }
    }
    map.forEach((key,val) => {
        res.push(val)
    })
}
unique(arr)

//用indexOf 去重
//判断新数组是否有该值，没有push进去
function unique2(arr){
    let newArr = []
    for(let item of arr){
        if(newArr.indexOf(item) == -1){
            newArr.push(item)
        }
    }
    console.log(newArr,'newArr')
}
unique2(arr)