Array.prototype.myReduce = function (callbckFn,initValue) {
    if(typeof callbckFn !== 'function') throw new TypeError(`第一个参数必须为函数`)
    if(this === null || this === undefined) throw new TypeError(`Cannot read property 'reduce' of ${this}`)

    let acc = initValue;
    if(initValue === null || initValue === undefined){
        acc = this[0];
    }
    let startIndex = 0;
     if(initValue === null || initValue === undefined){
        startIndex = 1;
     }

    for (let index = startIndex; index < this.length; index++) {
        const element = this[index];
        acc = callbckFn(acc,element,index,this)
    }


    return acc
}