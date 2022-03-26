/**
 * 快速排序
 * 1、找基准
 * 2、比基准小的放左边，比基准大的放右边
 * 3、递归左，递归右，直到分成单个元素
 * 4、合并子数组
 */

function quickSort(arr){
    if(arr.length < 2) return arr //递归是自身调用自身，不能无限的调用下去，so需要有结束条件
    
    let pivot = arr[0]//基准
    let left = []
    let right = []
    
    for(let i = 1;i < arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let res = quickSort([3,5,1,6])
console.log(res)