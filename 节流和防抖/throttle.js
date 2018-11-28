// 原理：节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。
// 代码实现有两种，一种是时间戳，另一种是定时器 
// 1）时间戳实现：

function throttle(fn, delay) {
    let prev = Date.now();
    return function () {
        let self = this;
        let args = arguments;
        let now = Date.now();
        if((now - prev) >= delay){
            fn.apply(self, args);
            prev = Date.now();
        }
    }
}


// 2)定时器实现
function throttle(fn, delay) {
    let timer = null;
    return function () {
        let self = this;
        let args = arguments;
        if(!timer){
            setTimeout(() => {
                fn.apply(self, args);
                timer = null
            }, delay);
        }
    }
}