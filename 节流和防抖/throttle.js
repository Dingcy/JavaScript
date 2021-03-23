// 原理：节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。
// 代码实现有两种，一种是时间戳，另一种是定时器 
// 1）时间戳实现：

function throttle(fn,delay) {
    let prev = Date.now(); //这一种写法第一次不会执行，延时delay执行，最后一次也会延迟执行
    // let prev = 0; //这一种写法第一次会立即执行，最后一次也会延迟执行
    return function () {
        let now = Date.now();
        if(now - prev >= delay){
            prev = now;
            fn.apply(this,arguments)
        }
    }
}


// 2)定时器实现  第一次会延时执行,最后一次也会延迟执行
function throttle2(fn,delay) {
    let timer = null
    return function () {
        if(!timer){
            const self = this;
            const args = arguments;
            timer = setTimeout(() => {
                fn.apply(self,args)
                timer = null;
            }, delay);
        }
    }
}

// 3）第一次延迟执行，最后一次立即执行   相对精确
function throttle3(fn,delay) {
    let timer = null;
    let startTime = Date.now();
    return function () {
        let currentTime = Date.now();
        let remainTime = delay - (currentTime - startTime);//计算还要多长时间执行
        let self = this;
        let args = arguments;
        clearTimeout(timer)
        if(remainTime <= 0){
            fn.apply(self,args);
            startTime = Date.now()
        }else {
            timer = setTimeout(fn, remainTime);
        }
    }
}



const handle = function () {
    console.log(Math.random())
}

const throttleHanlder = throttle2(handle,2000);

throttleHanlder()
setInterval(() => {
    throttleHanlder()
}, 500);