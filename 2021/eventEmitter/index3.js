const wrapOnceFn = (fn,once=false) => ({callback:fn,once})
class EventEmitter {
    constructor(){
        this.eventBus = new Map()
    }

    $on(type,fn,once = false){
        let hanlder = this.eventBus.get(type);
        if(!hanlder){
            this.eventBus.set(type,wrapOnceFn(fn,once))
        }else if(hanlder && typeof hanlder === 'object'){
            this.eventBus.set(type,[hanlder,wrapOnceFn(fn,once)])
        }else if(Array.isArray(hanlder)){
            hanlder.push(wrapOnceFn(fn,once))
        }
    }

    $emit(type,...args){
        let hanlder = this.eventBus.get(type);
        if(!hanlder) return
        if(Array.isArray(hanlder)){
            hanlder.map(item => {
                item.callback.apply(this,args);
                if(item.once){
                    this.$off(type,item.callback)
                }
            })
        }else {
            if(args.length>0){
                hanlder.callback.apply(this,args);
            }else {
                hanlder.callback.call(this)
            }
        }
    }

    $off(type,fn){
        let hanlder = this.eventBus.get(type);
        if(!hanlder) return
        if(!Array.isArray(hanlder)){
            this.eventBus.delete(type)
        }else {
            for (let index = 0; index < hanlder.length; index++) {
                const element = hanlder[index];

                if(element.callback === fn){
                    hanlder.splice(index,1);
                    index--;
                    if(hanlder.length === 1){
                        this.eventBus.set(type,hanlder[0])
                    }
                }
                
            }
        }
    }

    $once(type,fn){
        this.$on(type,fn,true)
    }

    $allOff(type){
        let hanlder = this.eventBus.get(type);
        if(!hanlder) return
        this.eventBus.delete(type)
    }
}

let eventBus = new EventEmitter();
eventBus.$on('submit1',function () {
    console.log(1111);
},false)
eventBus.$on('submit2',function () {
    console.log(2222);
},true)

eventBus.$emit('submit1')
eventBus.$emit('submit1')
eventBus.$emit('submit1')
// eventBus.$emit('submit2')
// eventBus.$emit('submit2')
eventBus.$off('submit1',function () {
    console.log(1111);
})
eventBus.$emit('submit1')




