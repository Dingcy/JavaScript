Array.prototype.mySome = function(callbackFn,thisArg){
    if(Object.prototype.toString.call(callbackFn) !== '[object Function]'){
        throw `arg should be a function`
    }
    let self = Object(this);

    for (let index = 0; index < self.length; index++) {
       let res = callbackFn.call(thisArg,self[index],index,self);
       if(res){
           return true
       }
    }
    return false
}

Array.prototype.myEvery = function(callbackFn,thisArg){
    if(Object.prototype.toString.call(callbackFn) !== '[object Function]'){
        throw `arg should be a function`
    }
    let self = Object(this);

    for (let index = 0; index < self.length; index++) {
       let res = callbackFn.call(thisArg,self[index],index,self);
       if(!res){
           return false
       }
    }
    return true
}