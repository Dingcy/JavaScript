Promise.retry = function (fn,maxTimes=3) {

    let count = 0
    function tryOne() {
        return new Promise((resolve,reject) => {
            resolve(fn())
        }).then(res => {
            Promise.resolve(res)
            console.log(res)
        }).catch(err => {
            count++;
            console.log(err)
            if(count >= maxTimes){
                Promise.reject(err)
            }else {
                return tryOne()
            }
        })
    }
    return tryOne()
}

Promise.retry2 = function (fn,maxTime = 3) {
    return new Promise(async (resolve,reject) => {
        while(maxTime>0){
            try {
                const res = await fn();
                console.log(res)
                resolve(res);
                maxTime = 0;
            } catch (error) {
                console.log('err',error)
                if(!maxTime) reject(error)
            }
            maxTime--;
        }
    })
    
}

function getProm() {
    const n = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() =>  n > 0.9 ? resolve(n) : reject(n), 1000);
    });
}

Promise.retry2(getProm)