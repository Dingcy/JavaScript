const ajax = () => {
    console.log(`开始`);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('error')
        }, 500);
    })
}


const promiseRetry = function (hanler,max) {
    return new Promise((resolve,reject) => {
        ajax().then(res => {
            resolve(res)
        }).catch(err => {
            max--;
            if(max === 0){
                reject('次数用完了')
            }else{
                setTimeout(() => {
                    promiseRetry(hanler,max);
                }, 1000);
            }
        })
    })
}

promiseRetry(ajax,3)