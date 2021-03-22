// 实现一个Router类，通过add方法添加路由配置，第一个参数为路由路径，第二个参数为render函数，返回要插入页面的html；通过listen方法，监听hash变化，并将每个路由返回的html，插入到app中。
class Router {
    constructor(){
        this.routes = [];
    }

    add(route,render){
        this.routes.push({
            route,
            callback:render
        })
    }

    listen(callback){
        window.onhashchange = this.hashchange(callback);
        this.hashchange(callback)();//首次进入要手动触发一下
    }

    hashchange(callback){
        let _this = this;
        return function(){
            let hash = location.hash;
            for (let i = 0; i < _this.routes.length; i++) {
                if(hash === _this.routes[i].route){
                    callback(_this.routes[i].render);
                    return
                }
                
            }
        }
    }
}

const myRouter = new Router();
myRouter.add('#app_1',() => {
    return `这是app_1`
})

myRouter.add('#app_2',() => {
    return `这是app_2`
})

myRouter.listen(renderHtml => {
    let app = document.getElementById('app');
    app.innerHTML = renderHtml;
})