function myApply(fn,obj,args) {
    if(typeof fn !== 'function') throw 'is not a function'
    if(obj === null || obj === undefined){
        obj = globalThis
    }
    obj._fn = fn;
    const result = obj._fn(...args);
    delete obj._fn
    return result
}

Function.prototype.myApply = function(){
    if(typeof this !== 'function') throw `is not a function`;
    let obj = arguments[0] || globalThis;
    obj._fn = this;
    // let args = [...arguments].flat().slice(1);
    const result = obj._fn(...args);
    delete obj._fn
    return result
}