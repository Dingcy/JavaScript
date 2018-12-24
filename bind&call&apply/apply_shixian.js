Function.prototype.apply2 = function(context,arr){
    context = context || window;
    context.fn = this;

    let result;
    if(!arr){
        result = context.fn();
    }else{
        result = context.fn(arr);
    }

    delete context.fn;
    return result;
}


// 原文地址  https://mp.weixin.qq.com/s?__biz=MzU3NjczNDk2MA==&mid=2247483863&idx=1&sn=384c33055af75760195ef6196924e85c&chksm=fd0e1248ca799b5effb5f80db3f081f24a7a4e4ae6f1428308fc178b3e1f23440521c6309637&mpshare=1&scene=23&srcid=1224QdRuqW2XCeQpxnU8DZ1c#rd