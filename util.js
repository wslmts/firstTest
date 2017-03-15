var util={
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
    },

//给定一组数中随机取其中几个
    getRandom:function(array,num){
        var aay=array.sort(function(){
            return  0.5-Math.random();
        });
        if(num<=ary.length){
            return ary.splice(0,num)
        }
    },
    getRandom_new:function(array,num){
        var myarray=[];
        for(var i=0;i<num;i++){
            var idx=parseInt(Math.random()*array.length)
            myarray.push(array[idx])
            array.splice(idx,1)
        };
        return myarray;
    },
    //给定字符串，重复n次
    repeat:function(target,n){
       // return new Array(n+1).join(target);
        return Array.prototype.join.call({length:n+1},target);
    },
    //文字字节长度
    byteLength:function(target){
        var l=target.length;
        for(var i=0;i<target.length;i++){
            if(target.charCodeAt(i)>255){l++;}
        }
        return l;
    },
    //计算距离今天n天以后星期几
    dateOfDays:function(n){
        var today=new Date().getDate();
        var d1=n%7;
        var date=(today+d1)%7===0?7:(today+d1)%7;
        return date;
    },
    isPalindrome:function(text){//字符串是不是回文
      if(text.length<=1) return true;
        if(text.charAt(0)!=text.charAt(text.length-1)) return false;
        return this.isPalindrome(text.substr(1,text.length-2))
    },
    uniqueArray:function(a){
     var b=[];var obj={};
      for(var i=0;i< a.length;i++){
         if(!obj[a[i]]){
             obj[a[i]]=true;
             b.push(a[i])
         }
      }
        return b;
    }
}
function curry(fn){
    function inner(length,args){
        if(length===0){
            return fn.apply(null,args);
        }
        return function(x){
            return inner(length-1,args.concat(x));
        }
    }
    return inner(fn.length,[]);
}
function sum(x,y,z,w){
    return x+y+z+w;
}
curry(sum)(1)(2)(3)(4)