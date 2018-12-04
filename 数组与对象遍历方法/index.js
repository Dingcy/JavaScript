// 各种数组和对象属性的遍历方法
// 原生for循环，for-in,以及forEach
// ES6 fro-of方法遍历数组集合
// Object.keys()返回键名集合
// Jquery.$each
// underscore的_.each()


var arrTmp = ["value1","value2","value3"];
var objTmp = {
    aa:"value1",
    bb:"value2",
    cc:function(){
       console.log("value3")
    }
}

// 1.for循环
for (let index = 0; index < arrTmp.length; index++) {
   console.log(arrTmp[index]);
    
}

// 2.for -in
// 遍历对象
for (const key in objTmp) {
   console.log(key +":"+ objTmp[key]);
}
// 遍历数组
for (const i in arrTmp) {
    console.log(i,arrTmp[i]);
}

//3.forEach遍历数组，三个参数依次是数组元素、索引、数组本身
arrTmp.forEach((value,index,array) => {
    console.log(value,index);
})

// for循环和for-in能正确响应break、continue和return语句，但forEach不行
//只会输出value1 value2
for(var i=0;i<arrTmp.length;i++){
    console.log(i+": "+arrTmp[i]);
    if(i==1){
        break;
    }
}
 
//会输出value1 value2 value3,forEach无返回值,返回undefined,且会改变原数组
var tempArr =  arrTmp.forEach(function(value){
    console.log(value);
    if(value==1){
        return;
    }
});

console.log(tempArr)//undefined

var arr = [12,23,24,42,1];
// var res = arr.forEach(function (item,index,input) {
//     input[index] = item*10;
// })
// console.log(res)//undefined
// console.log(arr);//[ 120, 230, 240, 420, 10 ]


// map有返回值，可以return出来,且不会改变原数组
var res2 = arr.map(function (item,index,inout) {
    return item*10;
})
console.log(res2)//[ 120, 230, 240, 420, 10 ]
console.log(arr);//[ 12, 23, 24, 42, 1 ]


// 不管是forEach还是map在IE6-8都不兼容（不兼容的情况在Array.prototype上没有这两个方法），那么需要我们自己封装一个兼容的方法，代码如下：

// 封装forEach
Array.prototype.myForEach = function myForEach(callback,context) {
    var context = context || window;
    if('forEach' in Array.prototype){
        this.forEach(callback,context);
        return;
    }

    // IE6-8
    for (let index = 0; index < this.length; index++) {
       callback && callback.call(context,this[index],index,this) 
    }
}


// 封装map
Array.prototype.myMap = function myMap(callback,context) {
    var context = context || window;
    if('map' in Array.prototype){
        this.map(callback,context);
        return;
    }

    // IE6-8
    var newArr = [];
    for (let index = 0,len = this.length; index < this.length; index++) {
       if(typeof callback === 'function'){
           var val = callback.call(context,ths[index],index,this);
           newArr[newArr.length] = val;
       }
    }
    return newArr;
}


// 类数组转换成数组的方法：4种
// [].prototype.slice.call(likeArr,0);
// [...likeArr]
// let arr2 = Array.from(likeArr);
// for (let index = 0; index < likeArr.length; index++) {
//    arr2.push(likeArr[index])
// }


// slice和splice的区别
// slice返回子数组，不会影响原数组,可以看成截取数组，同样可以同于字符串的且切割
// start参数：必须，规定从何处开始选取，如果为负数，规定从数组尾部算起的位置，-1是指最后一个元素。
// end参数：可选（如果该参数没有指定，那么切分的数组包含从start倒数组结束的所有元素，如果这个参数为负数，那么规定是从数组尾部开始算起的元素）。
var testArr = [1,2,3,4,5];
console.log(testArr.slice(1))//[2,3,4,5]
console.log(testArr.slice(1,3))//[2,3]
console.log(testArr)//[1,2,3,4,5]
console.log(('hello world').slice(1,5))//ello


// splice可以看作删除数组，会改变原数组
// index参数：必须，整数，规定添加或者删除的位置，使用负数，从数组尾部规定位置。
// howmany参数：必须，要删除的数量，如果为0，则不删除项目。
// tem1,...itemX参数：可选，向数组添加的新项目。
var testArr2 = [1,2,3,4,5];
console.log(testArr2.splice(2,1,'hello'));//[3]
console.log(testArr2);//[ 1, 2, 'hello', 4, 5 ]




