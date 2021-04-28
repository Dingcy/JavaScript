class XHRHook {
    constructor(beforeHooks= {},afterHooks={}){
        this.XHR = window.XMLHttpRequest;
        this.beforeHookes = beforeHooks;
        this.afterHooks = afterHooks;
        this.init()
    }
    init(){
        let _this = this;
        window.XMLHttpRequest = function(){
            _this._xhr = new _this.XHR;
            _this.overwrite(_this);
        }
    }

    overwrite(proxyXHR){
        let _this = this;
        for (const key in proxyXHR) {
           if(typeof proxyXHR[key] === 'function'){
               _this.overwriteMethod(key,proxyXHR);
               continue
           }

           _this.overwriteAttriBute(key,proxyXHR)
        }
    }
    overwriteMethod(key,proxyXhr){
        let _this = this;
        let beforeHooks = _this.beforeHooks;
        let afterHooks = _this.afterHooks;
        proxyXhr[key] = (...args) => {
            if(beforeHooks[key]){
                let res = beforeHooks[key].call(proxyXhr,args);
                if(!res){
                    return false
                }
            }

            let res = proxyXhr._xhr[key].apply(proxyXhr,args)

            afterHooks[key] && afterHooks[key].call(proxyXhr,args);

            return res
        }
       
    }
    overwriteAttriBute(key,proxyXhr){
        Object.defineProperty(key,proxyXhr,this.setDefineProperty(key,proxyXhr))
    }
    setDefineProperty(key,proxyXhr){
        let obj = Object.create(null);
        obj.set = function(val){
            
        }
        obj.get = function(){
            return proxyXhr['_'+key] || this._xhr[key]
        }

        return obj
    }
}