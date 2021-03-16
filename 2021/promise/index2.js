async function job1() {
    console.log("a");
    await job2();
    console.log("b"); // 添加到微任务队列
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
  