Function.prototype.myBind = function(){
    if(typeof this !== 'function') throw `is not a function`;
    let self = this;
    let context = arguments[0];
    let args = Array.prototype.slice.call(arguments,1);

    let fn =  function(){
        let bindArgs = Array.prototype.slice.call(arguments)

        // 第一种： call
        // let allArgs = args.concat(bindArgs)
        // return self.call(context,...allArgs)

        // 第一种： apply
        return self.apply(context,args.concat(bindArgs))
    }

    // 改变原型 
    fn.prototype = Object.create(self.prototype);

    return fn


}


function myBind2(fn,obj,...args) {
    
    return function (...args2) {
        
        return fn.call(obj,...args,...args2)
    }
}