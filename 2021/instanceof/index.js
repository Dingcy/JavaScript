// instanceof 手动实现
// 原型

// obj -> Object.prototype -> null

// func -> Function.prototype  -> Object.prototype  -> null
// arr -> Array.prototype  -> Object.prototype -> null

const Instanceof = (A, B) => {
  let p = A;

  while (p) {
    if (p === B.prototype) {
      return true;
    }
    p = p.__proto__;
  }

  return false;
};

const myInstanceof = function (left, right) {
  let r_pro = right.prototype;

  console.log(left.__proto__ === Object.getPrototypeOf(left));

  while (true) {
    if (left.__proto__ === null) {
      return false;
    }
    if (left.__proto__ === r_pro) {
      return true;
    }
    left = left.__proto__;
  }
};

// console.log(myInstanceof([1, 23], Array));

async function job1() {
  console.log("a");
  await job2();
  console.log("b");
}

async function job2() {
  console.log("c");
}

setTimeout(function () {
  new Promise(function (resolve) {
    console.log("d");
    resolve();
  }).then(function () {
    console.log("e");
  });
  console.log("f");
});

job1();

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("g");
});

console.log("h");

// achbgdfe
