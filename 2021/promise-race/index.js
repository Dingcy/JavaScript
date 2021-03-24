function promiseRace(promiseArr) {
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promiseArr)){
            reject(`need an Array`)
        };

        const len = promiseArr.length;
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then(res => {
                resolve(res)
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

promiseRace([p1,p2,p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
})