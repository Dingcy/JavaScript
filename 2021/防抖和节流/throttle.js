// 节流：规定时间内执行一次
function throttle(fn,delay) {
    let timer = null;
    return function () {
        let self = this;
        let args = arguments;
        if(!timer){
            timer = setTimeout(() => {
                fn.apply(this,args);
                timer = null
            }, delay);
        }
    }
}


// 时间戳实现
function throttle(fn,delay) {
    let prev = Date.now();
    return function () {
        let self = this;
        let args = arguments;
        let cur = Date.now();
        if((cur-prev)>delay){
            fn.apply(self,args);
            prev = Date.now()
        }
    }
}


function throllte(fn,delay) {
    let prev = Date.now();
    return function (...args) {
        let cur = Date.now();
        if(cur - prev > delay){
            fn.apply(this,args);
            prev = Date.now()
        }
    }
}