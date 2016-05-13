var timebgein = (new Date()).getTime();
//window.scrollTo(0,1);
function $(obj){
    return document.getElementById(obj);
}

function canvas(id){//专用动态专立canvas的函数
    var _canvas=document.createElement('canvas');
    _canvas.id=id;
    _canvas.width=window.innerWidth;
    _canvas.height=window.innerHeight;
    //_canvas.style="border:1px #000 solid;";
    return _canvas;
}

function canvas_rect(id){//专用动态专立canvas的函数
    var _canvas=document.createElement('canvas');
    _canvas.id=id;
    if(window.innerWidth>window.innerHeight){
        _canvas.width=window.innerHeight;
        _canvas.height=window.innerHeight;
        //	_canvas.style="border:1px #000 solid;";
        _canvas.style.top="0px";
        _canvas.style.position="absolute";
        _canvas.style.left=((window.innerWidth-window.innerHeight)/2)+"px";

    }
    else{
        _canvas.width=window.innerWidth;
        _canvas.height=window.innerWidth;
        //_canvas.style="border:1px #000 solid;";
        _canvas.style.top=((window.innerHeight-window.innerWidth)/2)+"px";
        _canvas.style.position="absolute";
        _canvas.style.left="0px";
    }


    return _canvas;
}

function divLayer(id){
    var div=document.createElement('div');
    div.id=id;
    div.style="font-size:18px;color:#FFF;text-align:center;z-index:999;border:1px #FFF solid;background-color:#333;position:absolute;top:0px;left:0px;width:80px;height:30px;";
    return div;
}

var ww=window.innerWidth,wh=window.innerHeight;



function Xhr(method, url, async, data, callback){//xhr构造函数
    var x;
    var states = ["正在初始化……", "正在初始化请求……成功！正在发送请求……", "成功！正在接收数据……", "完成！正在解析数据……", "完成！"];
    if (window.XMLHttpRequest) {
        x = new XMLHttpRequest();
        x.open(method, url, async);
        x.onreadystatechange = function(){
            //display_status(states[x.readyState])

            //alert(states[x.readyState]);
            //x.setRequestHeader("Connection", "close");
            if (x.readyState === 4) {
                if (x.status === 200) {
                    var data = {
                        text: x.responseText,
                        xml: x.responseXML
                    };
                    callback.call(this, data);
                    setTimeout(function(){//延时关闭
                        //  span.innerText = "您正在使用“在一起”移动设备应用软件";
                    }, 200);

                }
            }

        }
        if (method.toLowerCase() === "post") {
            //display_status(states[x.readyState])

            //alert(states[x.readyState]);
            x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            //x.setRequestHeader("Content-Length", data.length);
        }
        x.send(data);
    }
    else {

    }
    return x;
}

