/**
 * 二分查找：前提是数组是有序的
 * 适用场景：查找某个最值，统计出现次数
 * 1、从中间元素mid开始,mid == target 返回mid;
 * 2、找目标值的区间范围，移动左右的index;
 * 3、重复1，2
 */

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let midValue = arr[mid]
        if(target == midValue){
            return midValue
        }else if(target > midValue){
            left = mid + 1
        }else if(target < midValue){
            right = mid - 1
        }
    }
    return -1
}
let res = binarySearch([3,4,7,7,9],7)
console.log(res)