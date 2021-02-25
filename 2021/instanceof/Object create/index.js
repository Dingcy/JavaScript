const MyObjectCreate = function(obj) {
    function F(){}
    F.prototype = obj;
    F.prototype.constructor = F;
    return new F()
}

const obj1 = {
    name:'dingcy',
    age:29
}

console.log(MyObjectCreate(obj1).name)