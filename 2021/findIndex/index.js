Array.prototype.myFindIndex = function(callbackFn,thisArg){
    if(this === null || this === undefined) return 
    if(typeof callbackFn !== 'function') return

    if(!Array.isArray(this)) throw new TypeError(`need array`)

    const self = new Object(this);

    for (let index = 0; index < self.length; index++) {
        const element = self[index];
        const res = callbackFn.call(thisArg,element,index,self)
        if(res){
            return index
        }
        
    }

    return -1
}