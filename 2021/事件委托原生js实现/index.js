function eventTrust(element,eventType,selctor,fn) {
    element.addEventListener(eventType,function (e) {
        let el = e.target;

        while(!el.matches(selctor)){
            if(el === element){
                el = null;
                break;
            }
            el = el.parentNode
        }

        el && fn.call(el,e);

    },true)  //false 捕获   true 冒泡
    return element
}