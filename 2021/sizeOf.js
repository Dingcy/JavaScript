// js 中数字占8个字节，boolean 4个字节  字符串 每个占两字节
function sizeOf(object) {
    const type = typeof object;
    switch (type) {
        case 'string':
            return object.length*2
        case 'number':
            return 8
        case 'boolean':
            return 4
        case 'object':
            if(Array.isArray(object)){
                return object.map(sizeOf).reduce((acc,current) => acc + current,0)
            }else if(object === null){
                return 0
            }else {
                return sizeOfObject(object)
            }
        default:
            return 0;
    }
}

function sizeOfObject(params) {
    let  keys = Object.keys(params);
    let byte = 0;
    for (let i = 0; i < keys.length; i++) {
       let key = keys[i];
        byte += sizeOf(key);
        if(params[key] === null){
            continue
        }

        byte += sizeOf(params[key]);
        
    }  

    return byte
};

const obj = {
    a:2,
    b:'2222',
    c:false,
    d:{
        e:2,
        c:true,
        f:{
            g:'111'
        }
    },
    h:9,
    i:null
}

console.log(sizeOf(obj));
// console.log(sizeOf(null));