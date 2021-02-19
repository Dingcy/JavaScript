// instanceof 手动实现 
// 原型

// obj -> Object.prototype -> null 

// func -> Function.prototype  -> Object.prototype  -> null
// arr -> Array.prototype  -> Object.prototype -> null



const Instanceof = (A,B) => {
    let p = A;

    while(p){
        if(p === B.prototype){
            return true
        }
        p = p.__proto__;
    }

    return false;
}