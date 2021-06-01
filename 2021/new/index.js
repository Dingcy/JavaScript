function myNew(Fn,...args) {
    // 1.创建一个新对象，开辟一个内存空间
    let obj = {};
    // 2.修改this的指向，将this指向新对象
    const result = Fn.call(obj,...args);
    // 3.修改原型，将新对象的—__proto__等于构造函数的prototype
    obj.__proto__ = Fn.prototype;
    // 4.执行构造函数内部的代码，给新对象添加属性，并返回
    return  result instanceof Object?result:obj;  //构造函数内部返回的是对象就直接返回，如果返回的不是对象则返回新对象本身
}







function myNew2(Fn,...args) {
    let obj = {};
    let result = Fn.call(obj,...args);
    obj.__proto__ = Fn.prototype;
    return result instanceof Object?result:obj;
}

function Parent(name,age) {
    this.name = name;
    this.age = age;
}

// console.log(new Parent('tes',16));
console.log(myNew2(Parent,'test',16));