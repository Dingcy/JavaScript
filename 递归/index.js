// 程序自己调自身叫做递归
// 递归的特点：
// 子问题须与原始问题为同样的事，且更为简单；
// 不能无限制地调用本身，须有个出口，化简为非递归状况处理。

// 1.阶乘
function jiecheng(n) {
    return n===1?1:n*jiecheng(n-1);
}



// 2.斐波那契数列
function fibonacci(n) {
    return n<2?2:fibonacci(n-1)+fibonacci(n-2);
}

// console.log(fibonacci(5));

// 递归的应用
//1.数组扁平化
function flatten(arr) {
    return arr.reduce(function (prev,next,arr) {
        return prev.concat(Array.isArray(next)?flatten(next):next)    
    },[])
}

// 2.深拷贝
function depCopy(obj) {
    if(typeof obj !== 'object') return;
    var newObj = obj instanceof Array?[]:{};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object'?depCopy(obj[key]):obj[key];
        }
    }
    return newObj;
}

console.log(flatten([1,2,[3,8,[9,10]],4,5,6]));