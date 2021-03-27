function promiseLimit(urls,handler,max) {
    let sequence = [].concat(urls)
    // 截取max个url,此时sequence只剩下urls.length - max个
    let promises = sequence.splice(0,max).map((url,index) => {
        return handler(url).then(() => {
            return index  //执行完成后返回索引
        })
    });

    let p = Promise.race(promises);
    // 此时的sequence只剩下urls.length - max
    for (let i = 0; i < sequence.length; i++) {
        p = p.then(res => {
            // 一个执行完毕再推入新的请求并返回索引
            promises[res] = handler(sequence[i]).then(()=> {
                return res
            });
            return Promise.race(promises)  //继续返回promise.race  链式调用
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