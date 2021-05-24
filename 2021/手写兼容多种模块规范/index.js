;function name(name,factory) {
    // 检测上下文是否存在AMD和CMD
    var ifDefine = typeof define === 'function';
    var isExports = typeof module !== 'function' && module.exports;
    if(ifDefine){
        //AMD环境或CMD环境
        define(factory);
    }else if(isExports){
        //定义为普通Node模块
        module.exports = factory()
    }else {
        //将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = factory()
    }
}('hello',function () {
    let hello = function () {}
    return hello
})