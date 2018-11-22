// fetch号称是ajax的替代品，它的API是基于Promise设计的，旧版本的浏览器不支持Promise，需要使用polyfill es6-promise
var xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText)
    }
};
xhr.send();


// fetch
fetch(url).then(reponse => {
    if(reponse.ok){
        response.json();
    }
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// 缺点:
// 1.http错误处理  当返回的是一个错误的http状态码是，是不会被reject的，即使该响应返回的状态码是404或500，相反它会标记promise的状态设置为resolve,
// 但resolve返回的ok值会被标记为false,仅当网络错误或者请求被拒绝时才会被标记为reject
// 2.默认情况下不会从服务端接受或发送任何cookie，要发送cookie必须设置credentials选项
// 3.fetch不支持超时控制


// fetch集合async和await使用
async function getData ( url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

// async/await是ES7的API，目前还在试验阶段，还需要我们使用babel进行转译成ES5代码

// fetch封装
// jquery ajax
$.post(url, {name: 'test'})
// fetch
fetch(url, {
    method: 'POST',
    body: Object.keys({name: 'test'}).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&')
})
// 此外fetach不支持超时控制

