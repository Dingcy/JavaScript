// 每日温度
// [73,74,75,71,69,72,76,73]
// 暴力解法
var dailyTemperatures = function(T) {
    const len = T.length;
    const res = []
    for(let i = 0;i<len-1;i++){
        res[i] = 0;
       for(let j = i;j<len - 1;j++){
           if(T[j]>T[i]){
               res[i] = j-i;
               break
           }
       }
        
    }
    return res
};
// 维护一个单栈
const dailyTemperatures2 = (T) => {
    const res = new Array(T.length).fill(0)
    const stack = []
    for (let i = 0; i < T.length - 1; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let j = stack.pop();
            res[j] = i - j;
        }
        stack.push(i)
        
    }
    return res
  }
//   [73,74,75,71,69,72,76,73]



console.log(dailyTemperatures2([73,74,75,71,69,72,76,73]))