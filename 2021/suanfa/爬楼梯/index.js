// 1.递归
const palouti = function (n) {
    if(n===1){
        return 1
    }
    if(n===2){
        return 2
    }
    return palouti(n-1) + palouti(n-2)
}


// 2.递归+记忆化存储
let f = [];
const palouti2 = function (n) {
    if(n===1) return 1
    if(n===2) return 2

    if(f[n] === undefined){
        f[n] = palouti2(n-1)+ palouti2(n-2)
    }

    return f[n]
}


// 3.动态规划
const palouti3 = function (n) {
    let f = []
    f[1] = 1;
    f[2] = 2;

    for (let i = 3; i <= n; i++) {
        f[i] = f[i-1] + f[i-2]
    }

    return f[n]

}
// console.log(palouti3(10))