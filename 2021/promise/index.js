

// let promise = new Promise(function(resolve,reject){
//     let i = 1;
//     resolve(i);//调用.then()中的方法
//     i++;
//     reject(i);//调用.catch()中的方法，不能与.then()一起执行
// })
// promise
// .then(function(num){
//     console.log(num);
// })
// .catch(function(num){
//     console.log(num);
// })
// .finally(function(){//不论执行.then还是.catch，finally都会执行
//     console.log('finally');
// })


const getA = new Promise((resolve, reject) => {
    //模拟异步任务
    setTimeout(function(){
      resolve(2);
    }, 1000) 
 })
 .then(result => result)
 
 
 const getB = new Promise((resolve, reject) => {
    setTimeout(function(){
      // resolve(3);
      reject('Error in getB');
    }, 1000) 
 })
 .then(result => result)
 
 
 Promise.all([getA, getB]).then(data=>{
     console.log(data)
 })
 .catch(e => console.log(e));