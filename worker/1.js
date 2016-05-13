var temp=0;
self.onmessage = function(event) {
//接收worker1传递过来的值,存储在event.data中
var n = parseInt(event.data);
temp+=n*Math.random()*n*100000000000000000000;
self.postMessage("第"+event.data+"条运算完毕，结果为："+temp);
//向网页文件回传数据
}