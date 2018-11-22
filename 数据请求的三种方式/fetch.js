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