// h5中 基于 
// history.pushState 向历史中追加一条记录
// history.replaceState 替换当前页在历史中的记录
// history.state 是一个属性，可以得到当前页的state信息
// window.onpopstate  是一个事件，点击浏览器回退按钮，或者js 调用forward() back  go等方法

class Router{
    constructor(){
        this.routes = [];
        this.routerCallback = null;
    }
    add(route,callback){
        this.routes.push({
            path:route,
            render:callback
        })
    }

    pushState(path,data={}){
        window.history.pushState(path,'',data);
        this.renderHtml(path);
    }

    listen(callback){
        this.routerCallback = callback;
        this.changeA();
        window.onpopstate(() => this.renderHtml(location.path))
        this.renderHtml(location.path);

    }


    changeA(){
        document.addEventListener('click',(e) => {
            if(e.target.nodeName == 'A'){
                e.preventDefault();
                let path = e.target.getAttribute('href');
                this.pushState(path)
            }
        })
    }

    renderHtml(path){
        let self = this;
        for (let i = 0; i < self.routes.length; i++) {
            const route = self.routes[i];
            if(route.path === path){
                self.routerCallback(route.render());
                return
            }
            
        }
    }

}
