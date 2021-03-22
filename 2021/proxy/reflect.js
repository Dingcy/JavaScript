const man = {
    name: "阿宝哥",
    city: "Xiamen",
};

console.log(Reflect.set(man,'sex',1));
console.log(Reflect.has(man,'name'));
console.log(Reflect.has(man,'age'));
console.log(Reflect.ownKeys(man));