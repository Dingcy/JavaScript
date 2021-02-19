const obj = {};
const func = () => {};
const arr = [];
console.log(obj.__proto__ === Object.prototype)
console.log(func instanceof Object)
console.log(Function.prototype.__proto__.__proto__)


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

console.log(Instanceof(arr,Array))