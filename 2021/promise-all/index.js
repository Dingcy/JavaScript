function PromiseAll(promiseArr) {
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promiseArr)){
            reject(`参数必须是数组`)
        };
        let count = 0;
        const len = promiseArr.length;
        let res = [];

        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then(result => {
                res[i] = result;
                count++;
                if(count === len){
                    resolve(res);
                }
            }).catch(e => reject(e))
        }
    })
}

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000);
});

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(3)
    }, 3000);
});

const p4 = 4;

const p5 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(5)
    }, 1000);
});

PromiseAll([p1,p2,p4,p5]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
})