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