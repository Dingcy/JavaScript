var array = [1, 2, 1, 1, '1'];

// 1.双重循环法
function unique(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}




// 2 indexOF
function unique2(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        if(res.indexOf(array[i]) === -1){
            res.push(array[i]);
        }
    }
    return res;
}

// 3.filter+indexOf
function unique3(array) {
    // res用来存储结果
    var res = array.filter((item,index,array) => {
        return array.indexOf(item) === index
    })
    return res;
}

// 4.排序去重
function unique4(array) {
    // res用来存储结果
    var res = array.concat().sort().filter((item,index,array) => {
        return  !index || array.indexOf(item) === index
    })
    return res;
}

var array2 = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('2'),{a:2},{a:'2'}, {a:2},{b:2}, /a/, /a/, NaN, NaN];

// 5 键值对树  全部去重
function unique5(array) {
    // res用来存储结果
    var obj = {};
    var res = array.filter((item,index,array) => {
        return  obj.hasOwnProperty(typeof item+ JSON.stringify(item))?false :obj[typeof item+JSON.stringify(item)] = true;
    })
    return res;
}


// 6.ES6 set方法 （对象不去重）
// function unique6(array) {
//     return Array.from(new Set(array));
// }

// 简化1
// function unique6(array) {
//     return [...new Set(array)];
// }

// 简化2
let unique6 = (array) => [...new Set(array)]






console.log(unique5(array2)); 