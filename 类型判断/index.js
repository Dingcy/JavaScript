// 1:使用 typeof 方法
// console.log(typeof undefined); //undefined
// console.log(typeof null);      // object
// console.log(typeof true);      //boolean
// console.log(typeof 5);         //number
// console.log(typeof '5');       //string
// console.log(typeof {a:2});     //object

// null和objec同样返回了object ，因此使用typeof 具有不确定性

// 2.使用Object.prototype.toString

// 以下是11种：
var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = {a: 1}         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a(){}; // [object Function]

function checkType() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(Object.prototype.toString.call(arguments[i]))
    }
}

// checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)

// console.log(Object.prototype.toString.call(Math));//[object Math]
// console.log(Object.prototype.toString.call(JSON));//[object JSON]



//封装type函数
var classType = {};
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item,index) {
    classType["[object "+item+"]"] = item.toLowerCase();
})
function typeObj(obj) {
    if(obj == null){
        return obj+"";
    }
    return typeof obj === 'object' || typeof obj ==='function'?
    classType[Object.prototype.toString.call(obj)] || 'object':typeof obj;
}


// 测试
function test() {
    console.log(111);
}

console.log(Object.prototype.toString.call(test));//[object Function]
console.log(classType['[object Function]']);//function
console.log(typeof test);//function
console.log(typeObj(test));//functions


// 判断数组
let arraytest = [1,2,3,4];
console.log(Array.isArray(arraytest));//true
console.log(Object.prototype.toString.call(arraytest));//[object Array]


