
// 服务器响应完成的时间其实就是服务器时间，但经过网络传输这一步，就会产生误差了，误差大小视网络环境而异，这部分时间前端也没有什么好办法计算出来，一般是几十ms以内，大的可能有几百ms。

// 1.要获得服务器返回的时间：可以得出：当前服务器时间 = 服务器系统返回时间 + 网络传输时间 + 前端渲染时间 + 常量（可选），这里重点是说要考虑前端渲染的时间，避免不同浏览器渲染快慢差异造成明显的时间不同步，这是第一点。（网络传输时间忽略或加个常量呗）

// 获得服务器时间后，前端进入倒计时计算和计时器显示，这步就要考虑js代码冻结和线程阻塞造成计时器延时问题了，我的思路是通过引入计数器，判断计时器延迟执行的时间来调整，尽量让误差缩小，不同浏览器不同时间段打开页面倒计时误差可控制在1s以内。
//继续线程占用
setInterval(function(){ 
     var j = 0; 
     while(j++ < 100000000); 
}, 0); 
 
//倒计时
var  interval = 1000,
       ms = 50000,  //从服务器和活动开始时间计算出的时间差，这里测试用50000ms
       count = 0,
       startTime = new Date().getTime();
if( ms >= 0){
       var timeCounter = setTimeout(countDownStart,interval);                  
}
 
function countDownStart(){
       count++;
       var offset = new Date().getTime() - (startTime + count * interval);
       var nextTime = interval - offset;
       var daytohour = 0; 
       if (nextTime < 0) { nextTime = 0 };
       ms -= interval;
       console.log("误差：" + offset + "ms，下一次执行：" + nextTime + "ms后，离活动开始还有：" + ms + "ms");
       if(ms < 0){
              clearTimeout(timeCounter);
       }else{
              timeCounter = setTimeout(countDownStart,nextTime);
       }
 }