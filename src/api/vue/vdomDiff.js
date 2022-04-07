/**
 * vdom-diff的过程：
 * 1、用js模拟dom结构，即vnode；
 * 2、把此vdom转成真实dom，插入页面中（render）；
 * 3、若vdom有修改，比较两棵vdom差异，得到差异对象（diff）;
 * 4、把差异对象应用到真实的dom树上（patch）；
 *
 * 比较规则
 *
 * patch（补丁更新）做了什么？
 */

function diff(oldTree,newTree){
    //patches用来存放补丁
    let patches = {}
    //第一次比较树的第0个索引
    let index = 0
    //递归树，比较后的结果放补丁里
    walk(oldTree,newTree,index,patches)

    return patches
}
function walk(oldNode,newNode,index,patches){
    //每个元素都有一个补丁,用来存放当前元素的补丁
    let current = [];

    if(!newNode){ //1、没有新节点
        //把type:REMOVE的类型放入当前补丁
        current.push({type:'REMOVE',index})

    }else if(isString(oldNode) && isString(newNode)){ //2、新旧节点都是文本
        //比较文本是否一样
        if(oldNode !== newNode){
            //再把type:text的类型放入当前补丁
            current.push({type:'TEXT',text:newNode})
        }

    }else if(oldNode.type === newNode.type){ //3、新旧节点的类型相同
        //比较属性是否更改
        //diffAttr,比较新旧attr是否相同

    }else{ //4、上面3种情况都没有，说明节点被替换，直接用newNode
        current.push({type:'REPLACE',newNode})
    }

    //如果当前元素有补丁存在
    if(current.length){
        //将元素和补丁对应起来，放到大补丁中
        patches[index] = current
    }
}

//patch 打补丁过程
//patch接受两个参数，node:需要打补丁的元素；patches：需要打的补丁
function patch(node,patches){

    //给某个元素打补丁
    wark(node)

}

function wark(node){
    let childNodes = node.childNodes
    //递归子元素
    childNodes.forEach((child) => wark(child))
    //如果当前补丁存在，就对其打补丁doPatch
    if(current){
        doPatch(node,current)
    }
}

function doPatch(node,patches){
    //遍历所有打过的补丁
    //判断补丁的类型来进行不同的操作
}