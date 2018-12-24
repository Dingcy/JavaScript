
Function.prototype.bind2 = function (context) {
    if(typeof this != 'function'){
        throw Error('不是一个函数');
    }
    let self = this;//this指向调用者
    let fNOP = function(){};
    // 因为第1个参数是指定的this,所以只截取第1个之后的参数
    let args = Array.prototype.slice.call(arguments,1);//除第一项以外的args取出
    const fBond =  function () {  //函数科里化
        // 这时的arguments是指bind返回的函数传入的参数
        let bindArgs = Array.prototype.slice.call(arguments)
        self.apply(context,args.concat(bindArgs));
    }
    // 维护原型关系
    if(this.prototype){
        fNOP.prototype = this.prototype;
        fBond.prototype = new fNOP;
    }

    return fBond
}
