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
 
//会输出value1 value2 value3
arrTmp.forEach(function(value){
    console.log(value);
    if(value==1){
        return;
    }
})


