// 手写  promise all

Promise.myall = function (proArr) {
  if (!Array.isArray(proArr)) throw `need an array`;

  return new Promise((resolve, reject) => {
    if (proArr.length === 0) {
      resolve([]);
    } else {
      const len = proArr.length;
      let count = 0;
      let res = [];

      for (let i = 0; i < len; i++) {
        if (!(proArr[i] instanceof Promise)) {
          res[i] = proArr[i];
          count++;
          if (count === len) {
            resolve(res);
          }
        } else {
          proArr[i]
            .then((data) => {
              res[i] = data;
              count++;
              if (count === len) {
                resolve(res);
              }
            })
            .catch((err) => {
              reject(err);
            });
        }
      }
    }
  });
};

Promise.myRace = function (proArr) {
  if (!Array.isArray(proArr)) throw `need an array`;
  return new Promise((resolve, reject) => {
    if (proArr.length === 0) {
      resolve([]);
    } else {
      const len = proArr.length;

      for (let i = 0; i < len; i++) {
        if (!(proArr[i] instanceof Promise)) {
          resolve(proArr[i]);
        } else {
          proArr[i]
            .then((data) => {
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        }
      }
    }
  });
};

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11);
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  reject("asfs");
});
let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(33);
  }, 4);
});

let p4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(44);
  }, 0);
});

// Promise.myall([p1,p2]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

Promise.myRace([p1, p3, p4,'test'])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
