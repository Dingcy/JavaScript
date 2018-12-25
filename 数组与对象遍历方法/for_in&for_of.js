Array.prototype.method = function () {
    console.log(this.length);
}
var myArray = [1, 2, 4, 5, 6, 7]
myArray.name = "数组";
// for (var value of myArray) {   //for of遍历的是数组元素值
//     console.log(value);
// }
    
for (var value in myArray) {   //for in遍历的是数组的索引（即键名）,for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性
    console.log(value);
}
