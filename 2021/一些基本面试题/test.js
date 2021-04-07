// 一般方法
const flatterArray = function (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
       if(Array.isArray(arr[i])){
           res = res.concat(flatterArray(arr[i]))
       }else {
           res.push(arr[i])
       } 
    }
    return res
};
// reduce 实现
const flatterArray2 = function (arr) {
   return arr.reduce((acc,current) => {
        if(Array.isArray(current)){
            return acc.concat(flatterArray(current))
        }else {
            return acc.concat(current)
        }
    },[])
};
// some实现
const flatterArray3 = function (arr) {
    let res = arr;
    while(res.some((item) => Array.isArray(item) )){ 
        res = [].concat(...res)
    }
    return res
 };

const arr = [1,2,[3,4],[[5],[6],[[7],[8]]]];
var arr2 = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

console.log(flatterArray3(arr))
// console.log([...new Set(flatterArray(arr2))])