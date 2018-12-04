if(!Function.prototype.bind){
    Function.prototype.bind = function () {
        if(typeof this != 'function'){
            throw Error('不是一个函数');
        }
        let self = this;//保留原函数
        let fNOP = function(){};
        let context = [].shift.call(arguments);//把类数组的第一项单独取出
        let args = [].slice.call(arguments);//把剩余的上下文关系放在一个数组里
        const fBond =  function () {
            self.apply(context,context.concat([].slice.call(arguments)))
        }
        // 维护原型关系
        if(this.prototype){
            fNOP.prototype = this.prototype;
            fBond.prototype = new fNOP;

        }

        return fBond
    }
}