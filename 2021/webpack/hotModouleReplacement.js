// 热更新

// 配置
plugins:{
    HotModuleReplacementPlugin:new HotModuleReplacementPlugin()
}

decServer:{
    hot:true //开启热更新
}

// 当修改vue 的一个方法时会生成两个文件，json文件和js文件

// json文件
{
    h:'xxxxx', //hash值 本次输出的hash值会被作为下次更新的标识符
    c:{
        '201':true
    }   '模块编码' //当前热更新文件对应哪个文件模块
}

// js文件  编译后的代码重新打包
webpackHotUpdate(201, {})  //webpackHotUpdate方法更新 201模块


// 热更新原理  websocket
// 1.如果webpack开启了热更新，HMR runtime 通过HtmlModuleReplacementPlugin 注入到chunk中
// 2。除了开启Bundle server 还开启了 HRM server,用来和HMR Runtime 通信
// 3.当编译完成时触发compiler.hooks.done 通知客户端
// 4.客户端收到通知后，调用module.hot.check等，发起http请求去服务器请求获取新的资源并更新渲染到页面


//文章链接：https://mp.weixin.qq.com/s/RS5JOqe4Cuqeg_LjhRBMWg





