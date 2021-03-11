function eventTrust(element,eventType,selctor,fn) {
    element.addEventListener(eventType,function(e){
        let el = e.target;
        while(!el.matches(selctor)){
            if(element === el){
                el = null;
                break
            }
            el = el.parentNode;
        }
        el && fn.call(el,e)
    })

    return element
}