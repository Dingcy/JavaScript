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