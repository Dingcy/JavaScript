class MyEventEmitter {
    constructor(){
        this.messageBox = {};
    }
    emit(eventname,func){
        const callbacks = this.messageBox[eventname] || [];
        callbacks.push(func);
        this.messageBox[eventname] = callbacks;
    }
    on(eventname,...args){
        const callbacks = this.messageBox[eventname];
        if(callbacks.length >0){
            callbacks.forEach(callback => {
                callback(...args);
            });
        }
    }
    off(eventname,func){
        const callbacks = this.messageBox[eventname];
        const index = callbacks.indexOf(func);
        if(index !== -1){
            callbacks.splice(index,1);
        }
    }
}