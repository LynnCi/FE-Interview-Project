# 前端面试题

## 数组

#### 1、数组去重

```
function unique(array){
  let map = new Map()
  return array.filter((item) => !map.has(item) && map.set(item,1))
}
```

```
function unique(array){
  return Array.from(new Set(array))
}
```

#### 2、数组扁平化

```
function flatten(arr){
  let res = []
  for(let item of arr){
    if(Array.isArray(item)){
      res = res.concat(flatten(item))
    }else{
      res.push(item)
    }
  }
  return res
}
```

```
function flatten(arr){
  // reduce第一个参数返回累加的结果，第二个是当前遍历的值
  return arr.reduce((result,item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item)
  })
}
```

```
//es6
array.flat(Infinity) //Infinity 可展开多层
[...array] //只能展开两层
```
