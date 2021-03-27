

// 去重
let arry = [1, 2, 3, 4, 4,1,2,3,2];

// console.log([...new Set(arry)])


// 求并集
let arryA= [2,3,4,5,6],arryB = [3,4,5,6,7,8];
// console.log([...new Set([...arryA,...arryB])])


// 求交集
let arryC= [2,3,4,5,6],arryD = [3,4,5,6,7,8];
console.log(arryC.filter(item => new Set(arryD).has(item)))


// 求差集
console.log([...arryC.filter(item => !new Set(arryD).has(item)),...arryD.filter(item => !new Set(arryC).has(item))])

// set对象允许存储任何对象的唯一值 size add has delete clear

// map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。 FIFO原则  size set get delete has clear 
// map与数组之间的转换  Array.from

// object 键只能是字符串或者symbols ，map中的键可以是任意值  object没有有size，只能手动，  map尊询FIFO，object随机，


// weekSet 不重复的值的集合  成员只能是对象  弱引用   可以用来存放dom ，不用担心内存泄露，因为是弱引用，随时可能消失，不稳定，所以没有size方法且不可遍历


// weekMap 键值对的集合  键是弱引用，值是正常的，因为键值弱引用，所以key值不可枚举
