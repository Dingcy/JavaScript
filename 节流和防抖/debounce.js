// 每次用户停止输入后，延迟超过500ms时，才去搜索此时的String，这就是防抖。
// 原理：将若干个函数调用合成为一次，并在给定时间过去之后仅被调用一次。

function debounce(fn, delay) {
    let timer = null;
    return function () {
        let self = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(self, args);
        }, delay)
    }
}