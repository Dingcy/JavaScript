//1. 合并两个数组   将第二个数组融合进第一个数组
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
Array.prototype.push.apply(vegetables,moreVegs);
console.log(vegetables);//[ 'parsnip', 'potato', 'celery', 'beetroot' ]

// 2.获取数组中的最大值和最小值
// console.log(Math.max(1,2));//2
// console.log(Math.max([1,2,3]));//NaN
console.log(Math.max.apply(Math,[1,2,3]));//3


//3. 验证是否是数组
console.log(Object.prototype.toString.call([1,2,3]))//[object Array]

// 4、类数组对象（Array-like Object）使用数组方法
var arr =  Array.prototype.slice.call(likeArr)  
// 等同于
var arr2 = [].slice.call(likeArr);
// 等同于
Array.from(arguments)
// 等同于
[...arguments]