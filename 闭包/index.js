// 1.
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }

// console.log(new Date, i);

// 用箭头表示其前后的两次输出之间有 1 秒的时间间隔，而逗号表示其前后的两次输出之间的时间间隔可以忽略
// 2018-11-19T01:57:37.399Z 5
// 1秒之后直接输出5个5  
// 2018-11-19T01:57:38.399Z 5
// 2018-11-19T01:57:38.400Z 5
// 2018-11-19T01:57:38.400Z 5
// 2018-11-19T01:57:38.401Z 5
// 2018-11-19T01:57:38.401Z 5
// 结论:5->5,5,5,5,5


// 稍加改造打印5->0,1,2,3,4
// for (var i = 0; i < 5; i++) {
//     (function (j) {
//         setTimeout(function() {
//             console.log(new Date, j);
//         }, 1000);
//     })(i)
// }
// 或者
// for (var i = 0; i < 5; i++) {
//         setTimeout(function(j) {
//             console.log(new Date, j);
//         }, 1000,i);
// }
// console.log(new Date, i);


// 3.期望变成0->1->2->3->4->5
// for (var i = 0; i < 5; i++) {
//     (function (j) {
//         setTimeout(function() {
//             console.log(new Date, j);
//         }, 1000*j);
//     })(i)
// }
// setTimeout(function () {
//     console.log(new Date, i);
// },1000*i)
// or
// var tasks = [];
// for (var i = 0; i < 5; i++) {
//     (function (j) {
//         tasks.push(new Promise(function (resolve) {
//             setTimeout(() => {
//                 console.log(new Date(),j);
//                 resolve();
//             }, 1000*j);
//         }))
//     })(i)
// }
// Promise.all(tasks).then(function () {
//     setTimeout(() => {
//         console.log(new Date(),i);
//     }, 1000);
// })
// async await改造
const sleep = (timeout) => new Promise((resolve) => {
    setTimeout(resolve, timeout);
});

(async function () {
    for (var i = 0; i < 5; i++) {
       if(i>0){
           await sleep(1000);
       }
       console.log(new Date(),i)
    }
    await sleep(1000);
    console.log(new Date(),i);
})()

// setTimeout(() => {
//     console.log(new Date(),i);
// }, 1000*i);




