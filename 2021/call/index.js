function myCall(Fn,obj,...args) {
    if(obj === undefined || obj === null){
        obj = globalThis;
    }
    obj._fn = Fn;
    let result = obj._fn(...args);
    delete obj._fn;
    return result;
}

Function.prototype.myCall2 = function () {
    if(typeof this !== 'function') throw `caller must be function`;
    let self = arguments[0] || globalThis;
    self._fn = this;
    let args = [...arguments].slice(1);
    let result = self._fn(...args);
    delete self._fn;
    return result
}