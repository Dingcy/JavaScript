const wrapOnceFn = (fn,once=false) => ({callback:fn,once})
class EventEmitter {
    constructor(){
        this.eventBus = new Map()
    }

    on(type,fn,once=false){
        const handler = this.eventBus.get(type);

        if(!handler){
            this.eventBus.set(type,wrapOnceFn(fn,once))
        }else if(handler && typeof handler.callback === 'function'){
            this.eventBus.set(type,[handler,wrapOnceFn(fn,once)])
        }else {
            handler.push(wrapOnceFn(fn,once))
        }
    }
    emit(type,...args){
        const handler = this.eventBus.get(type);
        if(!handler) return
        if(Array.isArray(handler)){
            handler.map(item => {
               item.callback.apply(this,args);
               if(item.once){
                   this.off(type,item)
               }
            })
        }else {
            handler.callback.apply(this,args)
            if(handler.once){
                this.off(type,handler)
            }
        }
    }
    off(type,fn){
        const handler = this.eventBus.get(type);
        if(!handler) return
        if(Array.isArray(handler)){
           for (let index = 0; index < handler.length; index++) {
               const element = handler[index];

               if(element.callback === fn){
                   handler.splice(index,1)
                   index--;
                   if(handler.length === 1){
                       this.eventBus.set(type,handler[0])
                   }
               }
               
           }
        }else {
            this.eventBus.delete(type)
        }

    }

    once(type,fn){
        this.on(type,fn,true)
    }

    alloff(type,fn){
        const handler = this.eventBus.get(type);
        if(!handler) return
        this.eventBus.delete(type)
    }
}