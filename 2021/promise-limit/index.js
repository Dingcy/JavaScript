function promiseLimit(urls,handler,max) {
    let sequence = [].concat(urls)
    let promises = sequence.slice(0,max).map((item,index) => {
        
    })

}

const handler = function (delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('111')
        }, delay);
    })
}

let urls = ['1','2','3','4','5','6']

promiseLimit(urls,handler,3)