$.ajax({
    type: 'POST',
    url: url,
    data: data,
    dataType: dataType,
    success: function() {},
    error: function() {}
})

// 是对原生XHR的封装，支持JSONP，非常方便，
// jsonp为什么不支持跨域
// JSONP的最基本的原理是：动态添加一个<script>标签，而script标签的src属性是没有跨域的限制的。这样说来，这种跨域方式其实与ajax XmlHttpRequest协议无关了。
// 可以说jsonp的方式原理上和<script src="http://跨域/...xx.js"></script>是一致的，因为他的原理实际上就是 使用js的script标签 进行传参，那么必然是get方式的了，和浏览器中敲入一个url一样
