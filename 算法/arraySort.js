// 排序方法  
// 1.冒泡
function BUbbleSort(array) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
         if(array[i] > array[j]){
             let temp = array[i];
             array[i] = array[j];
             array[j] = temp;
         }           
        }
    }

    return array;
}


// 快速排序
function quickSort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    const middle = Math.floor(arr.length/2);
    let starand = arr.splice(middle,1)[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>starand){
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }
    return [].concat(quickSort(leftArr),starand,quickSort(rightArr));
}

const arr1 = [1,5,6,97,6,1,3,4,9,5,6,7,8];
console.log(quickSort(arr1));


// 10阶台阶的走法
function steps(n) {
    if(n == 1){
        return 1;
    }else if(n ==2 ){
        return 2;
    }

    return steps(n-1)+steps(n-2);
}

console.log(steps(10));


// 判断一个单词是否是回文
function checkPalindrom(str) { 
    return str == str.split('').reverse().join('');
}


// 去掉一组整型数组重复的值
function unique (arr) {  
    let hashTable = {};
    let data = [];
    for(let i=0,l=arr.length;i<l;i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
        data.push(arr[i]);
        }
    }
    return data
}

// 统计一个字符串出现最多的字母
function findMaxDuplicateChar(str) {  
    if(str.length == 1) {
        return str;
    }
    let charObj = {};
    for(let i=0;i<str.length;i++) {
        if(!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        }else{
            charObj[str.charAt(i)] += 1;
        }
    }
    let maxChar = '',
    maxValue = 1;
    for(var k in charObj) {
        if(charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return maxChar;
}

// 找出下列正数组的最大差值
function getMaxProfit(arr) {

    var minPrice = arr[0];
    var maxProfit = 0;

    for (var i = 0; i < arr.length; i++) {
        var currentPrice = arr[i];

        minPrice = Math.min(minPrice, currentPrice);

        var potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}

//随机生成指定长度的字符串
function randomString(n) {  
    let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let tmp = '',
        i = 0,
        l = str.length;
    for (i = 0; i < n; i++) {
      tmp += str.charAt(Math.floor(Math.random() * l));
    }
    return tmp;
}

// 实现类似getElementsByClassName
function queryClassName(node, name) {  
    var starts = '(^|[ \n\r\t\f])',
         ends = '([ \n\r\t\f]|$)';
    var array = [],
    regex = new RegExp(starts + name + ends),
    elements = node.getElementsByTagName("*"),
    length = elements.length,
    i = 0,
    element;
  
    while (i < length) {
        element = elements[i];
        if (regex.test(element.className)) {
            array.push(element);
        }

        i += 1;
    }

    return array;
}
