/**
 * 原型与原型链
 */


/**
 * 1、构造函数 constructor
 */

//普通函数
let Parent = function(){}
//Parent 就是一个构造函数，p就是它的实例
let p = new Parent()

/**
 * 2、分清什么是独有的
 * proto、constructor属性是对象所独有的
 * prototype属性是函数独有的
 * 函数也是一种对象，所以函数同样具有_proto_、constructor
 */

/**
 * 3、prototype属性
 * 可以通过prototype给函数添加属性，这个函数的所有实例化对象，均可以继承添加的属性
 * 添加方法：函数名.prototype.新属性 = ''
 */
function Person(userName){
    this.name = userName
}
Person.prototype.age = 20 //为Person函数添加age属性
var p1 = new Person('hanmeimei')
console.log(p1.name + p1.age) //hanmeimei + 20
var p2 = new Person('lilei')
console.log(p2.name + p2.age) //lilei + 20

/**
 * 4、proto 找到原型
 */
function Parent(userName){
    this.name = userName
}
Person.prototype = {
    constructor:Parent,
    speak:function(){
        console.log(`i am ${this.name}`)
    }
}
var children = new Parent('olivia')
children.name //olivia
children.speak() //i am olivia
children._proto_ = Person.prototype //true
Person.prototype._proto_ = Object.prototype // true
//对象的proto属性指向函数的prototype,函数的prototype._proto_又指向Object的prototype,形成链式结构