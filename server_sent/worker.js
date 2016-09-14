function messagehandler(event){
    var source;
    var url="server.php";
    if(event.data){
        try{
            source=new EventSource(url);
            source.onopen=function(e){
               // console.log("已建立连接 "+this.readyState);
                postMessage("已建立连接 "+this.readyState);
            }
            source.onmessage=function(e){
             //   console.log("收到数据 "+ e.data);
                postMessage("收到数据 "+ e.data);            }
            source.onerror=function(e){
                postMessage("出错了 "+ this.readyState);
            }
        }catch(e){
            postMessage("连接失败 "+ e.message);
        }
    }else{
        postMessage("已经退出 ");
        source.close();
        source=null;
    }
}
//self.onmessage=messagehandler;
self.addEventListener('message',messagehandler,false);