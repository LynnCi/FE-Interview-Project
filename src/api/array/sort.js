/**
 * 数组排序
 */
let arr = [3,2,5,1,4]

//sort() 
arr.sort((a,b) => a - b)

//快速排序
//找基准，left < mid < rihgt,递归左右，再return

function quickSort(arr){
    if(arr.length < 2) return arr //注意，递归需要有结束条件

    let mid = arr[0]
    let left = [],right = []

    for(let i = 1;i < arr.length;i++){
        if(arr[i] < mid){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),mid,...quickSort(right)]
}
let res2 = quickSort(arr)
console.log('res2',res2)