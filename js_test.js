function Foo(){
  getName=function(){alert(1)}
  return this; 
}
Foo.getName=function(){alert(2)}
Foo.prototype.getName=function(){alert(3)}
var getName=function(){alert(4)}
function getName(){alert(5)}
console.log(Foo())

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
//2,4,1,1,2,3,3
/*
var o=(function(){
    var n=0;
    return function(){
        console.log(n+=1);
    }
}());
var a1=new o();
var a2=new o();
var a3=new o();*/
function vb(){
    var n=0
    console.log(n+=1);
    console.log(this)
}
var a1=new vb();