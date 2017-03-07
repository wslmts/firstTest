/*
import * as C from './constant.js' ;
console.log('const', C.a)*/
alert('async')
function f(a,b,c){
    'uses strict'
    console.log(arguments[0]+arguments[2])
}
f.apply(null,[1,2,6]);
function  b(text){//字符串是不是回文
    if(text.length<=1) return true;
    if(text.charAt(0)!=text.charAt(text.length-1)) return false;
    return  b(text.substr(1,text.length-2))
}

var o1={m1:"m1",m2:'m2'};
var obj={};
for(var i in o1){
  obj[i]=function(){
      console.log(i)
  }
}
obj.m1();
obj.m2();