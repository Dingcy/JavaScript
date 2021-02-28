const add = (a,b,c,d,e) => {
    return a+b+c+d+e
}

function curry(fn, args=[]) {
    return function() {
        let newArgs = args.concat(Array.prototype.slice.call(arguments))
        if (newArgs.length < fn.length) { // 假如：实参个数 < 形参个数
            return curry.call(this, fn, newArgs)
        } else {
            return fn.apply(this, newArgs)
        }
    }
}


let res = curry(add)(1,2)(3,4,5)

console.log(res)