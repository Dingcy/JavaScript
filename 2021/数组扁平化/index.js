// 一般方法实现
function flatterArray(arr) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        if(Array.isArray(arr[index])){
            result = result.concat(flatterArray(arr[index]))
        }else {
            result = result.concat(arr[index])
        }
        
    }

    return result
}
// reduce实现
function flatterArray2(arr) {
   return arr.reduce((prev,next) => {
       if(Array.isArray(next)){
            next = flatterArray2(next)
       }
       return prev.concat(next)
   },[])
}

// some 实现
function flatterArray3(arr) {
    let result = arr;
    // console.log(result)

    while (result.some(item => Array.isArray(item))) {
        result = [].concat(...result)
    }

    return result
    
 }

// console.log(flatterArray3([1,2,3,[4,[5,6]]]))

// 数组分块
let arr = [1,2,3,4,5,6,7];

function chunk(arr,size) {
    let result = [];
    let temp = []
    arr.forEach(element => {
        if(temp.length === 0){
            result.push(temp);
        }
        temp.push(element)
        if(temp.length === size){
            temp = []
        }
    });

    return result
}

console.log(chunk(arr,3))