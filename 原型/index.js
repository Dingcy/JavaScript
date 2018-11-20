function Parent(name) {
    this.name = name;
}

let p = new Parent('张三');
console.log(Parent.prototype);//Parent {}
console.log(p.prototype);//undefined
console.log(Parent.__proto__);//undefined
console.log(p.__proto__);//Parent {}  指向Parent的原型
console.log(p.__proto__.__proto__);//{}

`一个对象 A的__proto__属性指向的那个对象B，B就是 A 的原型对象（或者叫父对象），
对象 A 可以使用对象 B 中的属性和方法，同时也可以使用对象 B 的 原型对象C 上的属性和方法，
以此递归，就是所谓的原型链`;


`
所以在new一个实例的过程中，其实是执行了如下的步骤
1、声明一个中间对象，并开辟一个内存空间
2、将该中间对象的原型指向构造函数的原型
3、将构造函数中的this指向该中间对象
4、返回该中间对象，即返回实例对象
`

// jquery如何使用原型


