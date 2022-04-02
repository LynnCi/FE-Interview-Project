/**
 * 归并排序：递归 + 合并
 * 1、数组一分为二；
 * 2、递归左
 * 3、递归右
 * 4、对递归的结果进行排序
 */
function mergeSort(arr){
    if(arr.length < 2) return arr
    let res = []

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid) //slice选择元素 从0开始，到mid结束，但不包括mid
    let right = arr.slice(mid)
    let leftOrder = mergeSort(left)
    let rightOrder = mergeSort(right)

    while(leftOrder.length || rightOrder.length){
        if(leftOrder.length && rightOrder.length){
            res.push(leftOrder[0] < rightOrder[0] ? leftOrder.shift() : rightOrder.shift())
        }else if(leftOrder.length){
            res.push(leftOrder.shift())
        }else if(rightOrder.length){
            res.push(rightOrder.shift())
        }
    }
    return res
}

let res2 = mergeSort([3,2,1])
