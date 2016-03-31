//将地址参数转换为对象
url2Object:function(str){
  var param={};
        var s=location.search.substring(1);
        if(s.indexOf("&")!=-1){
            var ay=s.split("&");
            if(ay.length>0){
                for(var i=0;i<ay.length;i++){
                    var obj=ay[i].split("=");
                    param[obj[0]]=obj[1];
                }
            }
        }
   return param;
}

//给定一组数中随机取其中几个
 getRandom:function(array,num){
    var aay=array.sort(function(){
       return  0.5-Math.random();
    });
    if(num<=ary.length){
        return ary.splice(0,num)
    }
}
