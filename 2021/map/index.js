Array.prototype.myMap = function () {
    let arr = [];
    let callback = arguments[0];
    
    if(!Array.isArray(this)) throw `need array`;
    let self = Object.create(this);

    for (let index = 0; index < self.length; index++) {
        const element = self[index];
        arr.push(callback(element,index,self))
    }

    return arr
}

// let arr = [1,2,3,4];
// arr.map( x => x*2)


Array.prototype.map = function() {
    if(!Array.isArray(this)) throw `need a array`;
    let callBack = arguments[0];
    let obj = Object.create(this);
    let res = []
    for (let i = 0; i < obj.length; i++) {
       res.push(callBack(obj[i],i,obj))
    }
    return res
}