export function measure (target,name,descriptor){
    const oldValue = descriptor.value;

    descriptor.value = async function(){
        console.time();
        const ret = await oldValue.apply(this,arguments);
        console.timeEnd();
        return ret;
    }

    return descriptor
}

// 装饰器