/**
 * b站一面
 * 输出 a,b,c...(深度遍历结果)
 * 
 */
 let tree = [
    {
        value:'a',
        children:[
            {
                value:'b',
                children:[
                    {
                        value:'c'
                    }
                ]
                
            },
            {
                value:'d',
                children:[
                    {
                        value:'e'
                    }
                ]
            }
        ]
    },
    {
        value:'f',
        children:[
            {
                value:'g'
            }
        ]
    }
]

function fn(tree,arr){
    for(let item of tree){
        arr.push(item.value)
        if(item.children){
            fn(item.children,arr) //递归时注意arr,arr内包含父级value,接着递归push children
        }
    }
    return arr
}
let result = fn(tree,[])
console.log('result',result)

