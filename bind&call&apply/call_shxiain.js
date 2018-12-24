// 第一版
Function.prototype.call2 = function(context){
    context.fn = this;
    context.fn();
    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

// bar.call2(foo); // 1


// 第三版 ES6实现
Function.prototype.call3 = function(context){
    context = context || window;
    context.fn = this;

    let args = [...arguments].slice(1);
    let result = context.fn(...args)
    delete context.fn;
    return result;
}

bar.call3(foo);//1

