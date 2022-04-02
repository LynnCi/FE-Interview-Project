/**
 * vdom:用js模拟dom结构，计算出最小的变更，操作dom
 */

<div id="div1" class="container">
    <p>vdom</p>
    <ul style="font-size:20px">
        <li>a</li>
    </ul>
</div>

{
    tag:'div'
    props:{
        id:'div1';
        className:'container'
    }
    children:[
        {
            tag:'p',
            children:'vdom'
        },
        {
            tag:'ul',
            props:{
                style:'font-size:20px'
            },
            children:[
                {
                    tag:'li',
                    children:'a'
                }
            ]
        }
    ]
}