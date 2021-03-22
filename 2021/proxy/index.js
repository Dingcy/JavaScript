// const man = {
//     name:'st',
//     age:28
// }

// const proxy = new Proxy(man,{
//     get(target,property,receiver){
//         console.log(`正在访问${property}属性`)
//         return target[property]
//     }
// })

// console.log(proxy.name)
// console.log(proxy.age)


// const man = {
//     name: "semlinker",
// };
  
// const handler = {
//     set: "Read-Only",
//     defineProperty: "Read-Only",
//     deleteProperty: "Read-Only",
//     preventExtensions: "Read-Only",
//     setPrototypeOf: "Read-Only",
// };
  
// const proxy = new Proxy(man, handler);

// console.log(proxy.name);
// proxy.name = 'tes'


function freeze (obj) {
    return new Proxy(obj, {
      set () { return true; },
      deleteProperty () { return false; },
      defineProperty () { return true; },
      setPrototypeOf () { return true; }
    });
  }

  
let frozen = freeze([1,2,3]);
frozen[0] = 6;
delete frozen[0];
frozen = Object.defineProperty(frozen, 0, { value: 66 });
console.log(frozen);

