
const arr = [2,3,4,1,6,7,9,5];
// 1:冒泡
function bubblesort(arr) {
    const len = arr.length;
    for(let i=0;i<len;i++){
        let flag = true;
        for(let j = 0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                flag = false
            }
        }

        if(flag){
            return arr
        }
    }
}

// 选择排序
function choosesort(arr) {
    const len = arr.length;
    let minIndex;
    for(let i = 0;i<len;i++){
        minIndex = i;
        for(let j = i;j<len;j++){
            if(arr[minIndex]> arr[j]){
                [arr[minIndex],arr[j]] = [arr[j],arr[minIndex]]
            }
        }

        if(minIndex !== i){
            [arr[minIndex],arr[1]] = [arr[i],arr[minIndex]]
        }
    }

    return arr
}

// 插入排序
function insertsort(arr) {
    const len = arr.length;
    let temp
    for(let i=1;i<len;i++){
        let j = i;
        temp = arr[i];

        while (j>0 && arr[j-1] > temp) {
            arr[j] = arr[j-1];
            j--
        }

        arr[j] = temp
    }

    return arr
}
console.log(insertsort(arr))