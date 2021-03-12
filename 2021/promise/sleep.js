function sleep(fn,time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(fn)
        }, time);
    })
}

const log = (name) => console.log(`hello ${name}`);

const autoPlay = async () => {
    let t1 = await sleep(log('红灯'),3000);
    let t2 = await sleep(log('绿灯'),2000);
    let t3 = await sleep(log('黄灯'),1000);
}

// autoPlay()


// 对象map
Object.prototype._map = function (fn) {
    let obj = this;
    let res = {}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
           res[key] = fn(key,obj[key])
        }
    }

    return res
}

const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function test() {
//   list.forEach((x,index)=> {
//       setTimeout( async () => {
//         const res = await square(x)
//         console.log(res)
//       }, index*1000);
//   })

    for (let i = 0; i < list.length; i++) {
        const res = await square(list[i])
        console.log(res)
    }
}
test()