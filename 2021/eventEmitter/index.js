const wrapOnceFn = (fn, once = false) => ({ callback: fn, once })
class EventEmitter {
    constructor() {
        this.eventBus = new Map();
    }

    $on(type, fn, once = false) {
        const handler = this.eventBus.get(type);
        if (!handler) {
            this.eventBus.set(type, wrapOnceFn(fn, once))
        } else if (handler && typeof handler.callback === 'function') {
            this.eventBus.set(type, [handler, wrapOnceFn(fn, once)])
        } else if (Array.isArray(handler)) {
            handler.push(wrapOnceFn(fn, once))
        }
    }


    $emit(type,...args){
        const handler = this.eventBus.get(type);
        if(!handler){
            throw new Error(`未注册该事件`)
        }

        if(Array.isArray(handler)){
            handler.map( item => {
                item.callback.apply(this,args)
                // 处理once
                if(item.once){
                    this.$off(type,item)
                }
            })
        }else {
            if(args.length > 0){
                handler.callback.apply(this,args)
            }else {
                handler.callback.call(this)
            }
        }
    }

    $off(type,fn){
        const handler = this.eventBus.get(type);

        if(!handler) return;
        if(!Array.isArray(handler)){
            this.eventBus.delete(type);
        }else {
            for (let index = 0; index < handler.length; index++) {
                const element = handler[index];

                if(element.callback === fn.callback){
                    handler.slice(index,1);
                    index--;
                    if(handler.length === 1){
                        this.eventBus.set(type,handler[0])
                    }
                }
                
            }
        }
    }

    $once(type,fn){
        this.$on(type,fn,true)
    }

    $allOff(type){
        const handler = this.eventBus.get(type);
        if(!handler) return
        this.eventBus.delete(type)
    }
}

// export default EventEmitter

