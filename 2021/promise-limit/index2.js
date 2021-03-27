function promiseLimit(urls,handler,max) {
    let sequence = [].concat(urls);//复制urls数组
    // 截取max个url供第一次使用
    let promises = sequence.splice(0,max).map((url,index) => {
        return handler(url).then(() => {
            return index  //执行完毕返回索引
        })
    })

    let p = Promise.race(promises);//第一次同时开启max个请求；

    // 循环sequence,此时sequence只剩下urls.length - max个
    for (let i = 0; i < sequence.length; i++) {
       p = p.then(res => {
        //    此时res为index
            promises[res] = handler(sequence[i]).then(() => {
                return res
            });

            return Promise.race(promises)  //继续返回promise.race供链式调用
       })
        
    }
}


const urls = [{
    info:'1',
    time:1000
},{info:'2',time:2000},{info:'3',time:3000},{info:'4',time:1000},{info:'5',time:1000},{info:'6',time:1000}]

const handler = function (url) {
    return new Promise((resolve,reject) => {
        console.log('----'+url.info+' start')
        setTimeout(() => {
            console.log('----'+url.info+' ok')
            resolve()
        }, url.time);
    })
}


promiseLimit(urls,handler,3)