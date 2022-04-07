/**
 * js继承
 */

/**
 * 要高清楚的几个名词
 *
 * prototype //原型对象
 * function Person(userName){ //构造函数
      this.name = userName
   }
   const man = new Person() //实例
 */


/**
 * 几个常见的问题
 * QR1:普通函数和构造函数的区别是什么？
 * 执行方式不同：普通函数通过调用执行，构造函数可以通过new执行。
 * this指向不同。
 */

/**
 * 1、原型链继承
 * 核心点：让子类的原型对象指向新创建的父类实例。Child.prototype = new Father()
 * 优点：
 *      1、可以继承实例构造函数的属性；
 *      2、可以继承父类构造函数的属性；
 *      3、可以继承父类原型对象上的属性；
 * 缺点：某个实例修改了父类的属性或方法，会影响其他实例，其他实例也会改变。
 */

/*
function Father(){
    this.name = 'olvia',
    this.color = ['red','green']
}
function Child(){}
Child.prototype = new Father()
const child1 = new Child()
console.log('child',child1.color) //['red','green']

//缺点
const child2 = new Child()
child2.color.push('pink')
console.log(child1.color,'child1') //[ 'red', 'green', 'pink' ]
console.log(child2.color,'child2') //[ 'red', 'green', 'pink' ]

*/


/**
 * 2、构造函数继承：改变this指向，继承属性。
 * 核心点：在子类构造函数中让父类构造函数通过call改变this指向来继承。
 * 优点：
 *      1、子类属性和方法不共享。
 *      2、子类实例可以向父类实例传参。
 * 缺点：
 *      1、只继承了父类构造函数的属性，无法继承父类原型对象上的属性。
 *      2、无法实现父类构造函数的复用，每次都要重新调用。
 */

/*
function Father(){
    this.name = 'Joe';
    this.read = {book:'oneBook'}
}
function Child(age){
    Father.call(this)
    this.age = age
}
const child1 = new Child(21)
const child2 = new Child(22)
console.log(child1.age,'child1') //21
console.log(child2.age,'child2') //22

child2.read.book = 'twoBook'
console.log(child1.read.book,'child1.read') //oneBook
console.log(child2.read.book,'child2.read') //twwoBook

*/

/**
 * 3、组合继承（es6 之前用） = 原型链继承 + 构造函数继承
 * 核心点：通过在子类构造函数上让父类构造函数调用call改变this指向；子类构造函数的原型对象指向父类构造函数的实例；
 * 优点：
 *      1、子类实例的属性是私有的，不会共享；
 *      2、可以继承父类原型对象的方法；
 *      3、可以传参；
 * 缺点：
 *      1、调用了两次父类构造函数；
 *      2、子类实例上的属性，同时存在于原型链上和子例身上，造成原型链污染。
 */

/*
function Father(name,age){
    this.name = name;
    this.age = age;
    this.color = ['res','green']
}
Father.prototype.getInfo = function(){ //既可以继承父类原型对象的方法
    return this.name + this.age
}
function Child(name,age){
    Father.call(this,name,age)
}
Child.prototype = new Father()
const child1 = new Child('hanmeimei',18) //也不会让实例的属性共享
const child2 = new Child('leilei',19)

console.log(child1.getInfo(),'child1.info') //hanmeimei 18
console.log(child2.getInfo(),'child2.info') // leilei 19
*/

/**
 * es6 class继承
 * class在通过Babel转换成 es5 的时候，用的就是组合继承
 */

class Person{
    constructor(name){
        this.name = name;
        this.colors = ['red','green']
    }
}
class Child extends Person{
    constructor(name,age){
        super(name)
        this.age = age
    }
}

let child = new Child('joe',9)
console.log(child.name)