const bar = new Bar(); // it's ok
function Bar() {
  this.bar = 42;
}

// const foo = new Foo(); // ReferenceError: Foo is not defined
class Foo {
  constructor() {
    this.foo = 42;
  }
}

// 1.class声明会提升，但不会赋初始值，Foo进入暂时锁区，类似let const 
// 2.class所有的方法，包括实例方法和静态方法都不可枚举
// 3. class内部采用严格模式
// 4.class所有的方法，包括实例方法和静态方法都没有原型对象prototype。所以也没有constructor，不能使用new
// 5.class必须使用new 调用


// es5继承是先创建子类，在子类上添加父类的方法和属性
// es6继承是先创建父类实例对象this,所以要先调用super方法 ，在通过子类的构造函数修改this
// es5通过构造函数或者原型链实现继承   es6通过extends实现继承，子类必须在constructor中调用super方法，因为子类没有自己的this对象


class Parent {}
class Son extends Parent {};

let son = new Son();

console.log(Son.__proto__ === Parent)


function Super() {
    
}
function Sub() {
     
}
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var sub = new Sub();
console.log(Sub.__proto__ === Function.prototype)


