// 防抖:输入完之后，多少秒执行
function debounce(fn,delay) {
    let timer = null;
    return function () {
        let args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}


function debounce(fn,delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}