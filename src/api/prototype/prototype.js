/**
 * 原型 & 原型链
 * 高频问题RQ1:如何理解原型与原型链？
 * 把proto、prototype、constructor这三个属性讲清楚，弄清楚之间的关系，原型与原型链之间的关系也就讲清楚了。
 * 高频问题RQ2:原型链的终点是什么？
 * 原型链的终点是null。
 * func._proto_ = Function.prototype
 * Function.prototype._proto_ = Object.prototype
 */


/**
 * 1、_proto_ 隐式原型
 * proto指向的是父类构造函数的原型对象，proto称为隐式原型，prototype称为显示原型，我们可以说一个对象的隐式原型_proto_指向了该对象的构造函数的显示原型prototype。
 * 在显示原型prototype上定义的属性和方法，通过隐式原型_proto_传递给了构造函数的实例，这样实例就能访问到构造函数原型上的方法和属性了。
 *
 */

/**
 * 2、prototype显示原型
 * prototype指的是显示原型，它是从一个函数指向一个对象，prototype的目的是为了实现继承，让函数创建的所有实例共享属性和方法，
 * 也就是说让某个构造函数实例化的所有对象可以找到公共的属性和方法。
 */

/**
 * 3、constructor 构造函数
 * constructor指向的函数就是该对象的构造函数，实例的原型对象的constructor属性都是指向其对应的构造函数，一个函数的构造函数指向的是Function根构造函数，并且Function函数的构造函数指向的是它本身。
 */

